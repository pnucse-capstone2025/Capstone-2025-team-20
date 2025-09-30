import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useInfiniteRecommendations, ProductWithReason } from '../hook/useRecommendations';
import { runRecommendations, getSale } from '../api/salesAPI';
import ProuductCardSimple from './ProductCardSimple';
import * as S from './ProductSimpleList.styled';
import Loading from './Loading';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserReviews, UserReviewWithProduct } from '../hook/useUserReviews';


const RecommendationContent: React.FC<{ userId: number; token: string }> = ({ userId, token }) => {
  const { data, error, isLoading } = useInfiniteRecommendations(userId, token);
  const [allProducts, setAllProducts] = useState<ProductWithReason[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 초기 데이터가 로드되면 allProducts에 설정
  useEffect(() => {
    if (data?.productsWithReasons && allProducts.length === 0) {
      setAllProducts(data.productsWithReasons);
    }
  }, [data?.productsWithReasons, allProducts.length]);

  // 현재 보여줄 상품들
  const visibleProducts = useMemo(() => {
    return allProducts.map(item => ({
      product: item.product,
      recommendReason: item.reason
    }));
  }, [allProducts]);

  // 더 많은 상품 로드
  const loadMoreProducts = useCallback(async () => {
    if (isLoadingMore) return;
    
    setIsLoadingMore(true);
    try {
      const newCount = allProducts.length + 5;
      
      // 추천 API 호출
      const recommendations = await runRecommendations(userId, token, newCount);
      
      // 새로운 상품들을 기존 목록에 추가
      const newProducts = recommendations.results.slice(allProducts.length);
      const newProductsWithDetails = await Promise.all(
        newProducts.map(async (item) => {
          // item: RecommendedItem
          if (item.saleId) {
            try {
              const product = await getSale(item.saleId);
              return { product, reason: item.reason || null };
            } catch (error) {
              console.warn(`Sale ID ${item.saleId}를 가져올 수 없습니다:`, error);
              return null;
            }
          }
          return null;
        })
      );
      
      const validNewProducts = newProductsWithDetails.filter(Boolean);
      setAllProducts(prev => [...prev, ...validNewProducts]);
    } catch (error) {
      console.error('추가 상품 로딩 실패:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [allProducts.length, isLoadingMore, userId, token]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      // 오른쪽으로 스크롤할 때 끝에 도달했으면 더 많은 상품 로드
      if (direction === "right" && currentScrollLeft >= maxScrollLeft - 10) {
        loadMoreProducts();
        return;
      }
      
      scrollRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  // 추천 데이터를 불러오는 중일 때 로딩 표시
  if (isLoading) {
    return (
      <div style={{ width: "100%" }}>
        <S.WhiteContainer>
          <Loading 
            type="enhanced" 
            message="추천 상품을 불러오는 중..."
          />
        </S.WhiteContainer>
      </div>
    );
  }

  if (error) {
    throw (error instanceof Error ? error : new Error('추천 데이터를 불러오는 중 오류가 발생했습니다.'));
  }

  if (!data?.productsWithReasons || data.productsWithReasons.length === 0) {
    return (
      <div style={{ width: "100%" }}>
        <S.WhiteContainer>
          추천 결과가 없습니다
        </S.WhiteContainer>
      </div>
    );
  }

  return (
    <S.ListWrapper>
      <S.CarouselWrapper>
        <S.ScrollButton left onClick={() => scroll("left")}>◀</S.ScrollButton>
        <S.ProductWrapper>
          <S.Grid ref={scrollRef}>
            {visibleProducts.map(({ product, recommendReason }) => (
              <ProuductCardSimple key={product.id} product={product} recommendReason={recommendReason} />
            ))}
            {/* 추가 로딩 중일 때 로딩 표시 */}
            {isLoadingMore && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '200px',
                height: '300px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                margin: '0 8px'
              }}>
                <Loading type="default" message="더 많은 추천을 불러오는 중..." />
              </div>
            )}
          </S.Grid>
        </S.ProductWrapper>
        <S.ScrollButton 
          onClick={() => scroll("right")}
          disabled={isLoadingMore}
        >
          ▶
        </S.ScrollButton>
      </S.CarouselWrapper>
    </S.ListWrapper>
  );
};

// 사용자 리뷰 데이터를 처리하는 컴포넌트
const UserReviewsHandler: React.FC<{ userId: number; token: string }> = ({ userId, token }) => {
  const { data: userReviews, isLoading: reviewsLoading } = useUserReviews(userId, token);
  const navigate = useNavigate();

  // 리뷰 데이터를 불러오는 중일 때 로딩 표시
  if (reviewsLoading) {
    return (
      <div style={{ width: "100%" }}>
        <S.WhiteContainer>
          <Loading 
            type="enhanced" 
            message="리뷰 데이터를 불러오는 중..."
          />
        </S.WhiteContainer>
      </div>
    );
  }

  const reviewCount = (userReviews as UserReviewWithProduct[])?.length ?? 0;

  if (reviewCount < 5) {
    return (
      <div style={{ width: "100%" }}>

        <S.WhiteContainer>
          추천을 위해 상품 리뷰 또는 온보딩을 진행해 주세요
          <S.LoginButton  onClick={() => navigate('/static/Onboarding')}>
            Onboarding
          </S.LoginButton>
          <p style={{ fontSize: "12px", color: "#888" }}>(온보딩을 완료했는데도 이 메세지가 나온다면 새로고침을 눌러주세요)</p>
        </S.WhiteContainer>
      </div>
    );
  }

  return <RecommendationContent userId={userId} token={token} />;
};

const RecommendationSection = () => {
  const { token, me } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  if (!token || !me) {
    return (
      <div style={{ width: "100%" }}>
        <S.WhiteContainer>
          로그인하고 맞춤 추천을 받아보세요!
          <S.LoginButton onClick={() => navigate('/static/Login', { state: { from: location.pathname } })}>
            login
          </S.LoginButton>
        </S.WhiteContainer>
      </div>
    );
  }

  return <UserReviewsHandler userId={me.userId} token={token} />;
};

export default RecommendationSection;


