import styled from 'styled-components';
import { colors } from '../../style/themes';

export const MainTopBarSection = styled.div`
  position: relative;
  z-index: 10;
  height: 500px;
  width: 100vw;
  background-color: ${colors.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: clip-path 0.2s ease-out;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const NavBarInsideSectionL = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavBarInsideSectionR = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const HeaderMenu = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  font-weight: 900;
  margin: 0;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const LeftAlignBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 48px;
  margin-top: 24px;
`;

export const SearchDiv = styled.div`
  width: 100%;
  color: white;
`;

export const TextBig = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0 0 8px 0;
  line-height: 1.1;
`;

export const TextSmall = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin: 0 0 16px 0;
`;

export const LeftAlign = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchImgDiv = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  z-index: 1000;
  min-width: 180px;
  margin-top: 8px;
  animation: dropdownFadeIn 0.2s ease-out;
  
  @keyframes dropdownFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f8f9fa;
    color: ${colors.mainBlue};
  }
  
  &:active {
    background-color: #e9ecef;
  }
`;