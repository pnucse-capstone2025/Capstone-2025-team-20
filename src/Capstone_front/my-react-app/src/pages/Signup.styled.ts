// src/style/SignupStyles.ts
import styled from "styled-components";
import { colors } from "../style/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.secondary};
  position: relative;
`;

export const Logo = styled.h1`
  position: absolute;
  top: 0px;
  left: 30px;
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${colors.mainLightBlue};
  font-size: 32px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`;

export const Input = styled.input`
  margin-top: 6px;
  min-width: 350px;
  height: 45px;
  padding: 0 12px;
  font-size: 14px;
  background-color: #e7e7e7ff;
  border: 2px solid rgba(0, 60, 120, 0); /* 기본은 투명 */
  border-radius: 4px;
  margin-bottom: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 60, 120, 0.3);
  }

  &:focus {
    outline: none;
    border-color: ${colors.mainDeepBlue}; /* 포커스 시 강조 */
  }

  &:active {
    transform: scale(0.98); /* 클릭 감각 */
  }
`;



export const Button = styled.button`
  margin-top: 25px;
  background: ${colors.mainBlue};
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #2675d0ff;
  }
`;

export const Message = styled.div<{ $type: "success" | "error" | "" }>`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ $type }) =>
    $type === "success" ? "green" : $type === "error" ? "red" : "black"};
`;
