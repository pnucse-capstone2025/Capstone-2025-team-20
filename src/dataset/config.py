import os
from pathlib import Path

try:
    from dotenv import load_dotenv  # type: ignore
except Exception:
    load_dotenv = None


def load_env_if_available() -> None:
    """Load .env from project root if python-dotenv is installed."""
    if load_dotenv is None:
        return
    # Try repo root .env
    repo_root = Path(__file__).resolve().parents[1]
    env_path = repo_root / ".env"
    if env_path.exists():
        load_dotenv(dotenv_path=str(env_path))


load_env_if_available()


def get_env(name: str, default: str | None = None) -> str:
    value = os.getenv(name, default)
    if value is None:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


def get_db_config() -> dict:
    # DB_* 환경 변수를 우선으로 하고, MYSQL_* 환경 변수도 지원
    return {
        "host": os.getenv("DB_HOST") or os.getenv("MYSQL_HOST") or "localhost",
        "port": int(os.getenv("DB_PORT") or os.getenv("MYSQL_PORT") or "3306"),
        "user": os.getenv("DB_USER") or os.getenv("MYSQL_USER") or "root",
        "password": os.getenv("DB_PASSWORD") or os.getenv("MYSQL_PASSWORD") or "",
        "database": os.getenv("DB_NAME") or os.getenv("MYSQL_DATABASE") or "lapisbluedb",
        "charset": os.getenv("DB_CHARSET") or os.getenv("MYSQL_CHARSET") or "utf8mb4",
        "autocommit": True,
    }




def get_dataset_dir() -> str:
    return os.getenv("APP_DATASET_DIR", "/app/dataset")


