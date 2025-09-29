import os
import sys
import json
import argparse
import logging
import time
from typing import Any, Dict, Iterable, List, Optional, Tuple

import pymysql
from dataset.config import get_db_config


def get_logger() -> logging.Logger:
    logger = logging.getLogger("json_sales_loader")
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        formatter = logging.Formatter("%(asctime)s %(levelname)s: %(message)s")
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        logger.setLevel(logging.INFO)
    return logger


logger = get_logger()


def get_mysql_connection() -> pymysql.connections.Connection:
    config = get_db_config()
    conn = pymysql.connect(
        host=config["host"],
        port=config["port"],
        user=config["user"],
        password=config["password"],
        database=config["database"],
        autocommit=False,  # json_sales_loader에서는 트랜잭션 제어를 위해 False 사용
        charset=config["charset"],
        cursorclass=pymysql.cursors.DictCursor,
        connect_timeout=10,
        read_timeout=30,
        write_timeout=30,
    )
    return conn


def should_reconnect(exc: Exception) -> bool:
    # Detect common MySQL connection-lost/timeout errors including Windows 10060
    msg = str(exc)
    if "WinError 10060" in msg:
        return True
    try:
        if isinstance(exc, pymysql.err.OperationalError):
            code = exc.args[0] if exc.args else None
            # 2006: MySQL server has gone away, 2013: Lost connection, 2055: Lost connection to MySQL server at '%s'
            return code in (2006, 2013, 2055)
    except Exception:
        pass
    return False


def table_exists(conn: pymysql.connections.Connection, table_name: str) -> bool:
    with conn.cursor() as cur:
        cur.execute("SELECT DATABASE() AS db")
        row = cur.fetchone()
        if not row or not row.get("db"):
            return False
        db = row["db"]
        cur.execute(
            "SELECT 1 FROM information_schema.tables WHERE table_schema=%s AND table_name=%s LIMIT 1",
            (db, table_name),
        )
        return cur.fetchone() is not None


def column_exists(conn: pymysql.connections.Connection, table_name: str, column_name: str) -> bool:
    with conn.cursor() as cur:
        cur.execute("SELECT DATABASE() AS db")
        row = cur.fetchone()
        if not row or not row.get("db"):
            return False
        db = row["db"]
        cur.execute(
            """
            SELECT 1 FROM information_schema.columns
            WHERE table_schema=%s AND table_name=%s AND column_name=%s
            LIMIT 1
            """,
            (db, table_name, column_name),
        )
        return cur.fetchone() is not None


def infer_quality_char(resolution: Optional[str]) -> str:
    if not resolution or resolution == "N/A":
        return "U"  # Unknown
    text = resolution.lower()
    if "4k" in text:
        return "4"
    if "blu-ray 3d" in text or "blu ray 3d" in text or "3d" in text:
        return "3"
    if "blu-ray" in text or "blu ray" in text:
        return "B"
    if "dvd" in text:
        return "D"
    return "U"


def infer_is_limited(name: Optional[str], resolution: Optional[str]) -> bool:
    hay = f"{name or ''} {resolution or ''}".lower()
    keywords = [
        "limited", "collector", "collectors", "collector's", "steelbook",
        "deluxe", "special", "ultimate", "anniversary", "edition",
    ]
    return any(k in hay for k in keywords)


def auto_region_from_quality(quality: str) -> Optional[Any]:
    # 4K -> None, 3D/Blu-ray -> 'A', DVD -> 1
    if quality == "4":
        return None
    if quality in ("3", "B"):
        return "A"
    if quality == "D":
        return 3
    return None


def normalize_region_code_value(rc: Any) -> Optional[int]:
    if rc is None:
        return None
    if isinstance(rc, int):
        return rc
    if isinstance(rc, float):
        try:
            return int(rc)
        except Exception:
            return None
    if isinstance(rc, str):
        s = rc.strip()
        if s.upper() == "N/A":
            return None
        # Remove Korean prefix like "지역코드" if present, then keep only digits
        s = s.replace("지역코드", "").strip()
        digits = ''.join(ch for ch in s if ch.isdigit())
        return int(digits) if digits else None
    return None

def parse_movie_id(key: str) -> Optional[int]:
    # key format: "<id>::<title> (<year>)"
    try:
        prefix = key.split("::", 1)[0]
        return int(prefix)
    except Exception:
        return None


def load_search_links(json_path: str) -> Dict[int, Dict[str, str]]:
    if not os.path.exists(json_path):
        return {}
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    out: Dict[int, Dict[str, str]] = {}
    for key, links in data.items():
        mid = parse_movie_id(key)
        if mid is None or not isinstance(links, dict):
            continue
        # normalize keys to expected site names
        site_map: Dict[str, str] = {}
        for site in ("yes24", "aladin", "kyobo"):
            url = links.get(site)
            if isinstance(url, str) and url:
                site_map[site] = url
        if site_map:
            out[mid] = site_map
    return out


def normalize_price(price_value: Any) -> Optional[int]:
    if price_value is None:
        return None
    if isinstance(price_value, int):
        return price_value
    if isinstance(price_value, float):
        return int(price_value)
    if isinstance(price_value, str):
        if price_value.strip().upper() == "N/A":
            return None
        # Remove commas or currency symbols if any
        cleaned = ''.join(ch for ch in price_value if ch.isdigit())
        return int(cleaned) if cleaned else None
    return None


def select_existing_sale_id(
    cur: pymysql.cursors.Cursor,
    movie_id: int,
    price: Optional[int],
    quality: str,
    region_code: Optional[int],
    is_limited: bool,
    site_name: Optional[str] = None,
    site_url: Optional[str] = None,
) -> Optional[int]:
    # Build query dynamically to include site fields when present
    base = [
        "movie_id=%s",
        "((price IS NULL AND %s IS NULL) OR price=%s)",
        "quality=%s",
        "((region_code IS NULL AND %s IS NULL) OR region_code=%s)",
        "is_limited_edition=%s",
    ]
    params: List[Any] = [movie_id, price, price, quality, region_code, region_code, is_limited]
    if site_name is not None:
        base.append("site_name=%s")
        params.append(site_name)
    if site_url is not None:
        base.append("site_url=%s")
        params.append(site_url)
    where = " AND ".join(base)
    sql = f"SELECT id FROM sales WHERE {where} LIMIT 1"
    cur.execute(sql, tuple(params))
    row = cur.fetchone()
    return int(row["id"]) if row else None


def insert_sale(
    conn: pymysql.connections.Connection,
    movie_id: int,
    price: Optional[int],
    quality: str,
    region_code: Optional[int],
    is_limited: bool,
    site_name: Optional[str] = None,
    site_url: Optional[str] = None,
    provided_id: Optional[int] = None,
    image_link: Optional[str] = None,
    bluray_title: Optional[str] = None,
) -> Optional[int]:
    with conn.cursor() as cur:
        # Detect optional columns
        has_site_name = column_exists(conn, "sales", "site_name")
        has_site_url = column_exists(conn, "sales", "site_url")
        has_image_link = column_exists(conn, "sales", "image_link")
        has_bluray_title = column_exists(conn, "sales", "bluray_title")

        if provided_id is not None:
            # Insert with explicit PK; update on duplicate and return id consistently
            cols = ["id", "movie_id", "price", "quality", "region_code", "is_limited_edition"]
            vals: List[Any] = [provided_id, movie_id, price, quality, region_code, is_limited]
            update_parts = [
                "price=VALUES(price)",
                "quality=VALUES(quality)",
                "region_code=VALUES(region_code)",
                "is_limited_edition=VALUES(is_limited_edition)",
            ]
            if has_site_name and site_name is not None:
                cols.append("site_name")
                vals.append(site_name)
                update_parts.append("site_name=VALUES(site_name)")
            if has_site_url and site_url is not None:
                cols.append("site_url")
                vals.append(site_url)
                update_parts.append("site_url=VALUES(site_url)")
            if has_image_link and image_link is not None:
                cols.append("image_link")
                vals.append(image_link)
                update_parts.append("image_link=VALUES(image_link)")
            if has_bluray_title and bluray_title is not None:
                cols.append("bluray_title")
                vals.append(bluray_title)
                update_parts.append("bluray_title=VALUES(bluray_title)")

            placeholders = ", ".join(["%s"] * len(vals))
            sql = (
                f"INSERT INTO sales ({', '.join(cols)}) VALUES ({placeholders}) "
                f"ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), {', '.join(update_parts)}"
            )
            cur.execute(sql, tuple(vals))
            return int(cur.lastrowid)

        # Fallback: no provided id, do dedup check then insert
        existing_id = select_existing_sale_id(
            cur,
            movie_id,
            price,
            quality,
            region_code,
            is_limited,
            site_name=site_name if has_site_name else None,
            site_url=site_url if has_site_url else None,
        )
        if existing_id is not None:
            # If we have additional fields (image_link, bluray_title, region_code, site fields), update them
            update_sets = []
            update_vals: List[Any] = []
            if has_image_link and image_link is not None:
                update_sets.append("image_link=%s")
                update_vals.append(image_link)
            if has_bluray_title and bluray_title is not None:
                update_sets.append("bluray_title=%s")
                update_vals.append(bluray_title)
            if region_code is not None:
                update_sets.append("region_code=%s")
                update_vals.append(region_code)
            if has_site_name and site_name is not None:
                update_sets.append("site_name=%s")
                update_vals.append(site_name)
            if has_site_url and site_url is not None:
                update_sets.append("site_url=%s")
                update_vals.append(site_url)
            if update_sets:
                sql_upd = f"UPDATE sales SET {', '.join(update_sets)} WHERE id=%s"
                update_vals.append(existing_id)
                cur.execute(sql_upd, tuple(update_vals))
            return existing_id

        cols = ["movie_id", "price", "quality", "region_code", "is_limited_edition"]
        vals2: List[Any] = [movie_id, price, quality, region_code, is_limited]
        if has_site_name and site_name is not None:
            cols.append("site_name")
            vals2.append(site_name)
        if has_site_url and site_url is not None:
            cols.append("site_url")
            vals2.append(site_url)
        if has_image_link and image_link is not None:
            cols.append("image_link")
            vals2.append(image_link)
        if has_bluray_title and bluray_title is not None:
            cols.append("bluray_title")
            vals2.append(bluray_title)

        placeholders2 = ", ".join(["%s"] * len(vals2))
        sql2 = f"INSERT INTO sales ({', '.join(cols)}) VALUES ({placeholders2})"
        cur.execute(sql2, tuple(vals2))
        return int(cur.lastrowid)


def ensure_site(conn: pymysql.connections.Connection, movie_id: int, site_name: str, url: str) -> int:
    with conn.cursor() as cur:
        cur.execute(
            "SELECT id FROM sites WHERE movie_id=%s AND site_name=%s AND url=%s LIMIT 1",
            (movie_id, site_name, url),
        )
        row = cur.fetchone()
        if row:
            return int(row["id"])
        # Try insert; if unique exists it will protect; otherwise may create duplicates (acceptable)
        cur.execute(
            """
            INSERT INTO sites (movie_id, site_name, url, is_active, last_seen_at)
            VALUES (%s, %s, %s, %s, NOW())
            """,
            (movie_id, site_name, url, True),
        )
        return int(cur.lastrowid)


def iter_entries(data: Dict[str, Any], only_sites: Optional[List[str]]) -> Iterable[Tuple[int, str, Dict[str, Any]]]:
    for key, payload in data.items():
        movie_id = parse_movie_id(key)
        if movie_id is None:
            continue
        for site in (only_sites or ["yes24", "aladin", "kyobo"]):
            site_list = payload.get(site)
            if not site_list:
                continue
            for entry in site_list:
                yield movie_id, site, entry


def load_sales_from_json(
    conn: pymysql.connections.Connection,
    json_path: str,
    only_sites: Optional[List[str]] = None,
    default_region_code: Optional[bool] = None,
    skip_na_price: bool = True,
    search_links_path: Optional[str] = None,
    filter_movie_id: Optional[int] = None,
    start_sales_id: Optional[int] = None,
) -> Tuple[int, int]:
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    inserted = 0
    skipped = 0

    links_map: Dict[int, Dict[str, str]] = {}
    if search_links_path:
        try:
            links_map = load_search_links(search_links_path)
        except Exception as e:
            logger.warning("Failed to load search links from %s: %s", search_links_path, e)

    for movie_id, site, entry in iter_entries(data, only_sites):
        if filter_movie_id is not None and movie_id != filter_movie_id:
            continue
        # Optional filter: skip entries with entry id less than the threshold
        sale_pk_early: Optional[int] = None
        if isinstance(entry, dict) and entry.get("id") is not None:
            try:
                sale_pk_early = int(entry.get("id"))
            except Exception:
                sale_pk_early = None
        if start_sales_id is not None and sale_pk_early is not None and sale_pk_early < start_sales_id:
            continue
        price = normalize_price(entry.get("price"))
        if price is None and skip_na_price:
            skipped += 1
            continue
        quality = infer_quality_char(entry.get("resolution"))
        is_limited = infer_is_limited(entry.get("movie_name"), entry.get("resolution"))
        # Start unset; fill from JSON or auto-mapping flag later
        region_code = None
        # Prefer site URL from blueray_summary entry; fallback to search_links.json map
        site_url = None
        sale_pk: Optional[int] = sale_pk_early
        image_link_val = entry.get("img") if isinstance(entry, dict) else None
        bluray_title_val = entry.get("movie_name") if isinstance(entry, dict) else None
        # Per-entry region_code override if present
        if isinstance(entry, dict):
            rc = entry.get("region_code")
            nr = normalize_region_code_value(rc)
            if nr is not None:
                region_code = nr

        # Try to read per-entry link first
        if isinstance(entry, dict):
            site_url = entry.get("link") or entry.get("url") or site_url
        if not site_url and links_map:
            movie_links = links_map.get(movie_id)
            if movie_links:
                site_url = movie_links.get(site)
        # Apply auto default mapping if caller supplied --region_code and no entry value
        if region_code is None and default_region_code:
            region_code = auto_region_from_quality(quality)

        # Prefer explicit sale id from JSON entry when present
        if sale_pk is None:
            try:
                sale_pk = int(entry.get("id")) if entry.get("id") is not None else None
            except Exception:
                sale_pk = None

        try:
            sale_id = insert_sale(
                conn,
                movie_id,
                price,
                quality,
                region_code,
                is_limited,
                site_name=site,
                site_url=site_url,
                provided_id=sale_pk,
                image_link=image_link_val,
                bluray_title=bluray_title_val,
            )
            conn.commit()
            logger.info(
                "Inserted/Found sale id=%s movie_id=%s price=%s quality=%s region=%s limited=%s (site=%s url=%s image_link=%s bluray_title=%s)",
                sale_id, movie_id, price, quality, region_code, is_limited, site, site_url, image_link_val, bluray_title_val,
            )
            inserted += 1
        except Exception as e:
            if should_reconnect(e):
                logger.warning("Connection issue detected (%s). Reconnecting and retrying once...", e)
                try:
                    conn.rollback()
                except Exception:
                    pass
                try:
                    conn.close()
                except Exception:
                    pass
                time.sleep(1.0)
                conn = get_mysql_connection()
                try:
                    sale_id = insert_sale(
                        conn,
                        movie_id,
                        price,
                        quality,
                        region_code,
                        is_limited,
                        site_name=site,
                        site_url=site_url,
                        provided_id=sale_pk,
                        image_link=image_link_val,
                        bluray_title=bluray_title_val,
                    )
                    conn.commit()
                    logger.info(
                        "Retry OK. sale id=%s movie_id=%s price=%s quality=%s region=%s limited=%s (site=%s)",
                        sale_id, movie_id, price, quality, region_code, is_limited, site,
                    )
                    inserted += 1
                    continue
                except Exception as e2:
                    try:
                        conn.rollback()
                    except Exception:
                        pass
                    skipped += 1
                    logger.exception("Retry failed for movie_id=%s (site=%s): %s", movie_id, site, e2)
                    continue
            # Non-retryable
            try:
                conn.rollback()
            except Exception:
                pass
            skipped += 1
            logger.exception("Failed insert for movie_id=%s (site=%s url=%s image_link=%s bluray_title=%s): %s", movie_id, site, site_url, image_link_val, bluray_title_val, e)

    return inserted, skipped


def build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="Load sales from blueray_summary.json into MySQL sales table")
    p.add_argument("--json_path", type=str, default=os.path.join(os.path.dirname(__file__), "./files/blueray_summary.json"))
    p.add_argument("--sites", type=str, nargs="*", default=None, help="Subset of sites to load (yes24 aladin kyobo)")
    p.add_argument("--movie_id", type=int, default=None, help="Load only this movie_id from blueray_summary.json")
    p.add_argument("--start_sales_id", type=int, default=None, help="Skip entries with JSON id lower than this value")
    p.add_argument("--region_code", action="store_true", help="If set (no value), auto-assign region by quality when JSON lacks it")
    p.add_argument("--no_skip_na_price", action="store_true", help="Insert rows even when price is N/A (NULL)")
    p.add_argument("--search_links_path", type=str, default=os.path.join(os.path.dirname(__file__), "search_links.json"), help="Path to search_links.json for per-site URLs (optional fallback)")
    return p


def main() -> None:
    args = build_arg_parser().parse_args()
    conn = get_mysql_connection()
    try:
        inserted, skipped = load_sales_from_json(
            conn,
            json_path=args.json_path,
            only_sites=args.sites,
            default_region_code=args.region_code,
            skip_na_price=not args.no_skip_na_price,
            search_links_path=args.search_links_path,
            filter_movie_id=args.movie_id,
            start_sales_id=args.start_sales_id,
        )
        logger.info("Done. inserted=%s skipped=%s", inserted, skipped)
    finally:
        conn.close()


if __name__ == "__main__":
    main()


