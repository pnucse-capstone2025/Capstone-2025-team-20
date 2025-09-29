import React, { useState, useRef, useEffect, useMemo, useCallback, Suspense } from "react";
import * as S from "./Onboarding.styled";
import { usePopularSales, useSearchSale } from "../hook/useSales";
import { useNavigate, useLocation } from "react-router-dom";
import OnboardingCard from "../components/OnboardingCard";
import ProductCard from "../components/ProductCard";
import { Footer, NoMenuBar } from "../style/common.styled";
import { Product } from "../type/product";
// import searchIcon from "../resource/img/search.svg";
import Loading from "../components/Loading";
import { useAuth } from "../context/AuthContext";
import { useSubmitReview } from "../hook/useReviews";
import { useToast } from "../context/ToastContext";

const OnboardingContent = () => {
  const { data: products } = usePopularSales(60);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const { token, me } = useAuth();
  const submitReviewMutation = useSubmitReview();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  // 검색 관련 상태
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // 디바운싱을 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchKeyword(searchKeyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchKeyword]);

  // 검색어가 있을 때만 검색 실행
  const { data: searchResults } = useSearchSale(
    debouncedSearchKeyword && isSearching ? debouncedSearchKeyword : ''
  );

  // 카드를 6개씩 그룹으로 나누고 화면을 꽉 채우도록 무한 순환
  const flowingProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    // 6개씩 그룹으로 나누기
    const groups: Product[][] = [];
    for (let i = 0; i < products.length; i += 6) {
      groups.push(products.slice(i, i + 6));
    }

    // 각 그룹을 충분히 반복해서 화면을 꽉 채우도록 (8번 반복)
    // 하지만 첫 번째 반복은 화면 밖에서 시작하도록 조정
    return groups.map((group, groupIndex) => ({
      products: [...group, ...group, ...group, ...group, ...group, ...group, ...group, ...group], // 8번 반복
      direction: (groupIndex % 2 === 0 ? 'right' : 'left') as 'right' | 'left' // 짝수 줄은 오->왼, 홀수 줄은 왼->오
    }));
  }, [products]);

  const toggleSelect = useCallback((id: number) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id)
          ? prev.filter((pid) => pid !== id)
          : prev.length < 5
            ? [...prev, id]
            : prev // 5개까지만 선택 가능
    );
  }, []);



  // 검색 핸들러
  const handleSearch = useCallback(() => {
    if (!searchKeyword.trim()) {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
  }, [searchKeyword]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    // 입력이 비어있으면 검색 상태 해제
    if (!e.target.value.trim()) {
      setIsSearching(false);
    }
  }, []);

  const handleComplete = async () => {
    if (!token || !me) {
      showToast("로그인이 필요합니다.", "error");
      navigate("/static/Login", { state: { from: location.pathname } });
      return;
    }

    if (selectedIds.length < 5) {
      showToast("최소 5개의 영화를 선택해주세요.", "warning");
      return;
    }

    setIsSubmitting(true);

    try {
      // 선택한 각 영화에 대해 리뷰 생성 (5점으로 자동 설정)
      const reviewPromises = selectedIds.map(salesId =>
        submitReviewMutation.mutateAsync({
          review: {
            salesId: salesId,
            rating: 5,
            reviewComment: null
          },
          token: token
        })
      );

      await Promise.all(reviewPromises);


      showToast("선호 영화가 등록되었습니다! 이제 맞춤 추천을 받아보세요.", "success");
      navigate("/static");
    } catch (error) {

      showToast("리뷰 생성 중 오류가 발생했습니다. 다시 시도해주세요.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NoMenuBar>
      <S.OnboardingWrapper>

        <S.Title>좋아하는 영화를 선택해주세요 (최소 5개)</S.Title>
        <S.SelectedCount>
          {selectedIds.length}/5 선택됨
        </S.SelectedCount>

        {/* 검색 섹션 */}
        <S.SearchContainer>
          <S.SearchSection>
            <S.SearchTitle>원하는 영화를 검색해보세요</S.SearchTitle>
            <S.SearchSubtitle>당신의 인생영화를 찾아보세요!</S.SearchSubtitle>
            <S.SearchBoxWrapper>
              <S.SearchInput
                type="text"
                value={searchKeyword}
                onChange={handleInputChange}
                placeholder="영화 제목을 입력하세요"
                onKeyDown={handleKeyPress}
              />
              <S.SearchButton onClick={handleSearch}>

              </S.SearchButton>
            </S.SearchBoxWrapper>
          </S.SearchSection>

          {isSearching && (
            <S.SearchResults>
              <S.SearchResultsTitle>검색 결과</S.SearchResultsTitle>
              {!searchResults ? (
                <S.NoResults>검색 중...</S.NoResults>
              ) : (searchResults as Product[]).length === 0 ? (
                <S.NoResults>검색 결과가 없습니다</S.NoResults>
              ) : (
                <S.SearchGrid>
                  {(searchResults as Product[]).map((product) => (
                    <OnboardingCard
                      key={product.id}
                      product={product}
                      isSelected={selectedIds.includes(product.id)}
                      onClick={() => toggleSelect(product.id)}
                    />
                  ))}
                </S.SearchGrid>
              )}
            </S.SearchResults>
          )}
        </S.SearchContainer>



        <S.FlowingContainer>
          {flowingProducts.map((group, groupIndex) => (
            <S.FlowingRow
              key={groupIndex}
              direction={group.direction}
              rowIndex={groupIndex}
            >
              {group.products.map((p, index) => (
                <OnboardingCard
                  key={`${p.id}-${index}`}
                  product={p}
                  isSelected={selectedIds.includes(p.id)}
                  onClick={() => toggleSelect(p.id)}
                  animationDelay={groupIndex * 0.6 + (index % 6) * 0.1}
                />
              ))}
            </S.FlowingRow>
          ))}
        </S.FlowingContainer>


        <S.CompleteButton
          disabled={selectedIds.length < 5 || isSubmitting}
          onClick={handleComplete}
        >
          {isSubmitting ? "리뷰 생성 중..." : `완료 (${selectedIds.length}/5)`}
        </S.CompleteButton>
      </S.OnboardingWrapper>
      <Footer>
        © 2025 pusan national university capstone project Blu-ray Recommender
      </Footer>
    </NoMenuBar>
  );
};

export default function Onboarding() {
  return (
    <Suspense fallback={
      <NoMenuBar>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#fafafa'
        }}>
          <Loading
            type="enhanced"
            message="온보딩을 준비하고 있어요..."
            showProgress={true}
          />
        </div>
      </NoMenuBar>
    }>
      <OnboardingContent />
    </Suspense>
  );
}