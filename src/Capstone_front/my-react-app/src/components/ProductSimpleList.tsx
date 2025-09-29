import React, { useRef, useState, useMemo } from "react";
import * as S from "./ProductSimpleList.styled";
import ProuductCardSimple from "./ProductCardSimple";
import { useInfinitePopularSales } from "../hook/useSales";

export default function ProductSimpleList() {
  const { data: allProducts } = useInfinitePopularSales(20);
  const [visibleCount, setVisibleCount] = useState(20);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 현재 보여줄 상품들만 필터링
  const visibleProducts = useMemo(() => {
    return allProducts.slice(0, visibleCount);
  }, [allProducts, visibleCount]);



  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      // 오른쪽으로 스크롤할 때 끝에 도달했으면 더 많은 상품 로드
      if (direction === "right" && currentScrollLeft >= maxScrollLeft - 10) {
        if (visibleCount < allProducts.length) {
          setVisibleCount(prev => Math.min(prev + 10, allProducts.length));
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({
                left: width,
                behavior: "smooth",
              });
            }
          }, 100);
          return;
        }
      }
      
      scrollRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };


  return (
    <S.ListWrapper>
      <S.CarouselWrapper>
        <S.ScrollButton left onClick={() => scroll("left")}>◀</S.ScrollButton>
        <S.ProductWrapper>
          <S.Grid ref={scrollRef}>
            {visibleProducts.map((p) => (
              <ProuductCardSimple key={p.id} product={p} />
            ))}
          </S.Grid>
        </S.ProductWrapper>
        <S.ScrollButton onClick={() => scroll("right")}>▶</S.ScrollButton>
      </S.CarouselWrapper>
    </S.ListWrapper>
  );
}
