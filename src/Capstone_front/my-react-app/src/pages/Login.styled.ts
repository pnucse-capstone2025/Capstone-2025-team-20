import styled from "styled-components";
import { colors } from "../style/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cfcfcfff;
  position: relative;
`;


export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
  background-color: #cfcfcfff;
  position: relative;
  top: 0;
`;

export const BackgroundImage = styled.div`
  background: url("/chair-blur.jpg") no-repeat center;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LoginBox = styled.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 45px;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid rgba(0, 60, 120, 0.3); /* 부드럽게 나타남 */
  }

  &:focus {
    outline: none; /* 포커스 기본 테두리 제거 */
    border-color: ${colors.mainDeepBlue}; /* 클릭/포커스 시 강조 */
    transform: scale(0.98);
  }
`;
export const Button = styled.button`
  height: 48px;
  background-color: ${colors.mainLightBlue};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0a77e5ff;
  }
`;

export const EasyLogin = styled.div`
  text-align: center;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const EasyLoginButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #dcdcdc;
`;

export const SmallText = styled.span`
  color: #aaa;
`;

export const BottomLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MeOutput = styled.pre`
  background: #f4f4f4;
  border: 1px dashed #bbb;
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: pre-wrap;
`;

export const LoginForm = styled.form`
  display: contents;
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  padding: 8px;
  background: #fef2f2;
  border-radius: 4px;
  border: 1px solid #fecaca;
`;