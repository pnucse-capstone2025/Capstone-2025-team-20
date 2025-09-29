import styled from "styled-components";
import { colors } from "../style/themes";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const Grid = styled.div`
  display: flex;               /* 한 줄로 나열 */
  gap: 32px;                   /* 카드 사이 간격 */
  overflow-x: auto;            /* 가로 스크롤 */
  scroll-behavior: smooth;     /* 부드럽게 이동 */
  flex-direction: row; /* 기본값 */
  align-items: center;     /* 세로 가운데 */
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['left', 'disabled'].includes(prop),
})<{ left?: boolean; disabled?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  width: 50px;
  background: linear-gradient(90deg, ${props => props.left ? 'rgba(28, 118, 207, 0.1)' : 'transparent'}, ${props => props.left ? 'transparent' : 'rgba(28, 118, 207, 0.1)'});
  border: none;
  cursor: ${props => props.disabled ? 'wait' : 'pointer'};
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.disabled ? '0.5' : '0'};
  color: ${colors.mainBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${props => props.disabled 
      ? 'linear-gradient(90deg, rgba(28, 118, 207, 0.1), transparent)' 
      : `linear-gradient(90deg, ${props.left ? 'rgba(28, 118, 207, 0.2)' : 'transparent'}, ${props.left ? 'transparent' : 'rgba(28, 118, 207, 0.2)'})`};
    opacity: ${props => props.disabled ? '0.5' : '1'};
    transform: ${props => props.disabled ? 'none' : 'scale(1.1)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 4px 12px rgba(28, 118, 207, 0.3)'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
`;
export const ProductWrapper = styled.div`
  padding : 0px 5px;

`


export const LoginButton = styled.button`
  background: white;
  color: ${colors.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2.5px solid ${colors.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;



export const WhiteContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`;

export const ListWrapper = styled.div`
  background-color: white;
  margin-bottom: 24px;
  width: 100%;
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
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
    height: 432px;
    box-shadow: 10px 10px 40px rgba(28, 118, 207, 0.09);
    transform: translateY(-4px);
    
    &::before {
      left: 100%;
    }
  }
`;