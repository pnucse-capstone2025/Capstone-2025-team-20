import styled, { keyframes } from "styled-components";
import { colors } from "../style/themes";

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 100%;
  gap: 20px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Spinner = styled.div`
  border: 3px solid #f0f0f0;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingMessage = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`;

export const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  background-color: ${colors.mainBlue};
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

export const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg,${colors.mainBlue},${colors.mainDeepBlue},${colors.mainBlue});
  background-size: 200px 100%;
  animation: ${shimmer} 5s linear infinite;
  width: ${props => props.$progress}%;
  transition: width 0.3s ease;
`;

