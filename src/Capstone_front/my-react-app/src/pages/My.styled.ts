import styled from "styled-components";
import { colors } from "../style/themes";

export const Header = styled.header`
  padding: 20px 0;
  background: #fafafa;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLink = styled.a`
  color: ${colors.mainDeepBlue};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.mainBlue};
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  margin: 32px 0;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.mainDeepBlue};
  margin: 0 0 16px 0;
  line-height: 1.5;
  letter-spacing: 0.2px;
  padding-left: 20px;
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background: #fafafa;
    border-color: ${colors.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${colors.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  border: 2px solid ${colors.mainBlue}20;
  box-shadow: 0 2px 4px rgba(28, 118, 207, 0.15);

  &:hover {
    background: ${colors.mainDeepBlue};
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: ${colors.mainDeepBlue};
    margin: 0 0 8px 0;
    line-height: 1.3;
  }
  
  .email {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: 2px solid ${colors.mainBlue};
  background: ${colors.mainBlue};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: ${colors.mainBlue};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px;

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    border-color: ${colors.mainBlue}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${colors.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

export const Panel = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  color: #666;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #fafafa;
    border-color: ${colors.mainBlue}40;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  h3 {
    color: ${colors.mainDeepBlue};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }
`;


// 버튼 방식 슬라이딩 컨테이너
export const ButtonSlidingWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
`;

export const ButtonSlidingContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /* 작은 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 2px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${colors.mainBlue};
    border-radius: 2px;
    transition: background 0.2s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.mainDeepBlue};
  }

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const SlidingButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['left'].includes(prop),
})<{ left?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  width: 50px;
  background: linear-gradient(90deg, ${props => props.left ? 'rgba(28, 118, 207, 0.1)' : 'transparent'}, ${props => props.left ? 'transparent' : 'rgba(28, 118, 207, 0.1)'});
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: ${colors.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: linear-gradient(90deg, ${props => props.left ? 'rgba(28, 118, 207, 0.2)' : 'transparent'}, ${props => props.left ? 'transparent' : 'rgba(28, 118, 207, 0.2)'});
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(28, 118, 207, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// 카드 이미지 영역
export const CardImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.3s ease;
`;

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  border-radius: 12px 12px 0 0;
`;

// 카드 콘텐츠 영역
export const CardContent = styled.div`
  padding: 16px;
  flex: 1;
`;

export const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1a202c;
  line-height: 1.3;
`;

// 평점 표시 영역
export const RatingContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RatingLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
`;

// 리뷰 댓글 영역
export const ReviewComment = styled.div`
  font-size: 13px;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 날짜 표시 영역
export const ReviewDate = styled.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: right;
  font-weight: 500;
  margin-top: auto;
`;

// 슬라이딩 카드
export const SlidingCard = styled.div`
  background: #fff;
  border-radius: 12px;
  height: 360px;
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: #666;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.mainBlue}40;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    
    &::before {
      left: 100%;
    }
    
    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    flex-shrink: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .card-icon {
    font-size: 32px;
    margin-bottom: 8px;
    color: ${colors.mainBlue};
  }

  .card-text {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 320px;
    
    .card-image {
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
    
    .card-image {
      height: 140px;
    }
  }
`;

// 로그인 필요 메시지 영역
export const LoginRequiredContainer = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

export const LoginRequiredTitle = styled.h2`
  color: #64748b;
  margin-bottom: 16px;
`;

export const LoginRequiredMessage = styled.p`
  color: #94a3b8;
  margin-bottom: 24px;
`;

// 사용자 역할 표시
export const UserRole = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
`;

// 로딩 메시지
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #64748b;
`;
