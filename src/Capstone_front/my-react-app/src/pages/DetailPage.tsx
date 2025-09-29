import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./DetailPage.styled";
import { Product } from "../type/product";
import { usegetMovie } from "../hook/useMovie";
import { BasicBase, Footer, Spacer } from "../style/common.styled";
import { useAuth } from "../context/AuthContext";
import { useReviewsBySalesId, useSubmitReview } from "../hook/useReviews";
import StarRating from "../components/StarRating";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product: Product = location.state?.product;
  const { parm } = useParams<{ parm: string }>();
  const { token, me } = useAuth();

  if (!product) {
    return <div>상품 정보를 불러올 수 없습니다.</div>;
  }

  const { data: movie } = usegetMovie(product.movieId ?? 0);
  
  // 리뷰 관련 훅
  const { data: reviews, isLoading: reviewsLoading } = useReviewsBySalesId(product.id);
  const submitReviewMutation = useSubmitReview();

  // ⭐ 리뷰 작성 상태
  const [rating, setRating] = useState<number>(0);
  const [reviewMsg, setReviewMsg] = useState<string>("");

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (rating === 0) {
      alert("별점을 선택해주세요.");
      return;
    }

    try {
      await submitReviewMutation.mutateAsync({
        review: {
          salesId: product.id,
          rating: rating,
          reviewComment: reviewMsg || null
        },
        token: token
      });
      
      alert("리뷰가 등록되었습니다!");
      setRating(0);
      setReviewMsg("");
    } catch (error) {
      let errorMessage = "리뷰 등록에 실패했습니다.";
      if (error instanceof Error) {
        errorMessage += `\n에러: ${error.message}`;
      }
      
      alert(errorMessage);
    }
  };

  return (
    <>
      <BasicBase>
        <Spacer h={70} />
      <S.Container>

        <S.TopSection>
          <S.ImageContainer>
            <S.Image src={product.imageLink ?? ""} />
          </S.ImageContainer>
          <S.Info>
            <S.Title>{product.blurayTitle}</S.Title>
            <S.Title>{movie.title}</S.Title>
            <S.Prices>
              <S.Price>{product.price}원</S.Price>
            </S.Prices>
            <Spacer h={4}/>
            <S.Mall onClick={() => window.open(String(product.siteUrl), "_blank")}>{product.siteName}</S.Mall>
          </S.Info>
        </S.TopSection>

        <S.Section>
          <h2>작품 상세정보</h2>
          <S.Table>
            <tbody>
              <tr>
                <th>러닝타임</th>
                <td>{movie.runningTime || "-"}</td>
              </tr>
              <tr>
                <th>감독</th>
                <td>{movie.director || "-"}</td>
              </tr>
              <tr>
                <th>해상도</th>
                <td>{product.quality || "-"}</td>
              </tr>
              <tr>
                <th>지역코드</th>
                <td>{product.regionCode || "-"}</td>
              </tr>
            </tbody>
          </S.Table>
        </S.Section>

        <S.Section>
          <h2>리뷰</h2>

                    {/* ⭐ 리뷰 작성 Form */}
          {token ? (
            <S.ReviewForm onSubmit={handleReviewSubmit}>
              <S.StarRatingContainer>
                <label style={{ fontSize: '14px', fontWeight: '600' }}>별점:</label>
                <S.StarRatingWrapper>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => {
                        if (rating === star) {
                          setRating(star - 0.5);
                        } else if (rating === star - 0.5) {
                          setRating(star);
                        } else {
                          setRating(star);
                        }
                      }}
                      style={{
                        fontSize: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        position: 'relative',
                        display: 'inline-block'
                      }}
                    >
                      {/* 배경 별 (회색) */}
                      <span style={{ color: '#e2e8f0' }}>★</span>
                      
                      {/* 채워진 부분 */}
                      {rating >= star ? (
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          top: '0',
                          color: '#fbbf24'
                        }}>
                          ★
                        </span>
                      ) : rating >= star - 0.5 ? (
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          top: '0',
                          width: '50%', 
                          overflow: 'hidden',
                          color: '#fbbf24'
                        }}>
                          ★
                        </span>
                      ) : null}
                    </span>
                  ))}
                </S.StarRatingWrapper>
                <S.RatingText>
                  {rating > 0 ? `${rating}점` : '별점을 선택해주세요'}
                </S.RatingText>
              </S.StarRatingContainer>

              <S.ReviewInput
                placeholder="리뷰를 작성해주세요..."
                value={reviewMsg}
                onChange={(e) => setReviewMsg(e.target.value)}
              />

              <S.SubmitButton 
                type="submit" 
                disabled={submitReviewMutation.isPending}
              >
                {submitReviewMutation.isPending ? '등록 중...' : '리뷰 등록'}
              </S.SubmitButton>
            </S.ReviewForm>
          ) : (
            <S.LoginRequiredMessage>
              리뷰를 작성하려면 로그인이 필요합니다.
            </S.LoginRequiredMessage>
          )}

          <Spacer h={20}/>
          
          <S.Meta>
            {reviewsLoading ? (
              <div>리뷰를 불러오는 중...</div>
            ) : reviews && reviews.length > 0 ? (
              <div>
                {reviews.map((review, idx) => (
                  <S.ReviewItem key={idx}>
                    <S.ReviewHeader>
                      <S.ReviewUsername>
                        {review.username || `사용자${review.userId}`}
                      </S.ReviewUsername>
                      <StarRating 
                        rating={review.rating || 0} 
                        size="small" 
                        showScore={true}
                      />
                    </S.ReviewHeader>
                    {review.reviewComment && (
                      <S.ReviewComment>{review.reviewComment}</S.ReviewComment>
                    )}
                    <S.ReviewDate>
                      {review.createdAt ? new Date(review.createdAt).toLocaleString('ko-KR') : ''}
                    </S.ReviewDate>
                  </S.ReviewItem>
                ))}
              </div>
            ) : (
              "아직 등록된 리뷰가 없습니다."
            )}
          </S.Meta>

        </S.Section>

        {/* 외부 링크 */}
        <S.Section>
          <h2>외부 링크</h2>
          <S.Meta>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                YES24
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                Aladin
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                Amazon JP
              </a>
              <a className="button" href="#" target="_blank" rel="noopener noreferrer">
                공식 사이트
              </a>
            </div>
          </S.Meta>
        </S.Section>

        </S.Container>
      </BasicBase>
      <Footer>
        © 2025 pusan national university capstone project Blu-ray Recommender
      </Footer>
    </>
  );
}
