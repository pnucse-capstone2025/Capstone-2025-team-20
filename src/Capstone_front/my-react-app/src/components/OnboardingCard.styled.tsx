import styled from "styled-components";
import { colors } from "../style/themes";

export const Card = styled.div<{ isSelected: boolean; animationDelay: number }>`
  position: relative;
  width: 200px;
  height: 300px;
  background: #a2535370;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;

  /* 초기 상태 */
  opacity: 0;
  transform: translateY(30px) scale(0.8);

  /* 등장 애니메이션 */
  animation: cardSlideIn 0.8s ease-out forwards;
  animation-delay: ${props => props.animationDelay}s;

  /* 애니메이션 완료 후 선택 상태 적용 */
  &.animation-complete {
    transform: ${props => props.isSelected ? "scale(0.95)" : "scale(1)"};
    opacity: ${props => props.isSelected ? "0.8" : "1"};
  }

  &:hover {
    transform: ${props => 
      props.isSelected 
        ? "translateY(-6px) scale(0.95)" 
        : "translateY(-8px) scale(1.05)"
    };
    z-index: 10;
    opacity: 1;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: ${props => 
      props.isSelected 
        ? "translateY(-4px) scale(0.9)" 
        : "translateY(-4px) scale(0.95)"
    };
    transition: all 0.1s ease;
  }

  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-10px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

`;


export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const SelectedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 70, 229, 0.1);
  z-index: 1;
  animation: overlayFadeIn 0.3s ease-out;
  
  @keyframes overlayFadeIn {
    0% {
      opacity: 0;
      background: rgba(79, 70, 229, 0);
    }
    100% {
      opacity: 1;
      background: rgba(79, 70, 229, 0.1);
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: transparent;
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  transition: all 0.3s ease;

  ${Card}:hover & {
    background: linear-gradient(transparent, rgba(0, 132, 255, 0.6));
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

export const Quality = styled.span`
  font-size: 12px;
  color: #e5e7eb;
  font-weight: 500;
`;


export const Checkmark = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${colors.mainBlue};
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  animation: checkmarkAppear 0.3s ease-out;
  
  @keyframes checkmarkAppear {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(22deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
`;
