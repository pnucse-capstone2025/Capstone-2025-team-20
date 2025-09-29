import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUserReviews } from "../hook/useUserReviews";
import StarRating from "../components/StarRating";
import {

  Section,
  SectionTitle,
  Row,
  Avatar,
  UserInfo,
  ButtonGroup,
  Button,

  SlidingCard,
  ButtonSlidingWrapper,
  ButtonSlidingContainer,
  SlidingButton,
  Panel,
  UserRole,
  LoadingMessage,
  CardImageContainer,
  CardImage,
  CardImageOverlay,
  CardContent,
  CardTitle,
  RatingContainer,
  RatingLabel,
  ReviewComment,
  ReviewDate,
} from "./My.styled";
import { BasicBase, Footer, MainSection, Spacer } from "../style/common.styled";

const My = () => {
  const { logOut, me, token } = useAuth();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // me와 token이 있을 때만 useUserReviews 호출
  const shouldFetchReviews = !!(me?.userId && token);
  const { data: userReviews, isLoading: reviewsLoading } = useUserReviews(
    me?.userId || 0, 
    token || ""
  );

  const handleLogOut = () => {
    logOut();
    navigate("/static/login");
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  // PrivateRoute에서 이미 인증을 체크하므로 중복 체크 제거

  return (
    <>
      <BasicBase>
        <Spacer h={48}/>
        <MainSection>
        {/* 프로필 */}
        <Section>
          <Row>
            <Avatar>
              {(me?.username || me?.usernameOrEmail || "사용자").charAt(0).toUpperCase()}
            </Avatar>
            <UserInfo>
              <h1>{me?.username || me?.usernameOrEmail || "사용자"}</h1>
              <div className="email">{me?.email || ""}</div>
              <UserRole>
                {me?.role || "일반 사용자"}
              </UserRole>
              <ButtonGroup>
                <Button onClick={handleLogOut}>로그아웃</Button>
              </ButtonGroup>
            </UserInfo>
          </Row>
        </Section>

        {/* 내가 리뷰한 상품 */}
        <Section>
          <SectionTitle>내가 리뷰한 상품</SectionTitle>
          {reviewsLoading ? (
            <Panel>
              <LoadingMessage>
                리뷰를 불러오는 중...
              </LoadingMessage>
            </Panel>
          ) : userReviews && userReviews.length > 0 ? (
            <ButtonSlidingWrapper>
              <SlidingButton left onClick={() => scroll("left")}>◀</SlidingButton>
              <ButtonSlidingContainer ref={scrollRef}>
                {userReviews.map((item, index) => (
                  <SlidingCard key={index} 
                    onClick={() => navigate(`/static/DetailPage/${item.product.id}`, { state: { product: item.product } })}
                  >
                    <CardImageContainer>
                      <CardImage 
                        src={item.product.imageLink || ""} 
                        alt={item.product.blurayTitle || ""}
                      />
                      <CardImageOverlay />
                    </CardImageContainer>
                    <CardContent>
                      <CardTitle>
                        {item.product.blurayTitle}
                      </CardTitle>
                      
                      <RatingContainer>
                        <RatingLabel>
                          내 평점:
                        </RatingLabel>
                        <StarRating 
                          rating={item.review.rating || 0} 
                          size="medium" 
                          showScore={true}
                        />
                      </RatingContainer>
                      
                      {item.review.reviewComment && (
                        <ReviewComment>
                          "{item.review.reviewComment}"
                        </ReviewComment>
                      )}
                      
                      <ReviewDate>
                        {item.review.createdAt ? new Date(item.review.createdAt).toLocaleDateString('ko-KR') : ''}
                      </ReviewDate>
                    </CardContent>
                  </SlidingCard>
                ))}
              </ButtonSlidingContainer>
              <SlidingButton onClick={() => scroll("right")}>▶</SlidingButton>
            </ButtonSlidingWrapper>
          ) : (
            <Panel>
              <h3>아직 리뷰한 상품이 없습니다</h3>
              <p>상품에 리뷰를 남기면 여기에 표시됩니다.</p>
            </Panel>
          )}
        </Section>


        </MainSection>
      </BasicBase>
      <Footer>
        © 2025 pusan national university capstone project Blu-ray Recommender
      </Footer>
    </>
  );
};

export default My;
