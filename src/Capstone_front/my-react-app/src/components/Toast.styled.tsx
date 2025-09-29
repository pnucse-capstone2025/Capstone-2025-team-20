import styled, { keyframes } from 'styled-components';
import { colors } from '../style/themes';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<{ $type: 'success' | 'error' | 'info' | 'warning' }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  animation: ${slideIn} 0.3s ease-out;
  min-width: 300px;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  ${({ $type }) => {
    switch ($type) {
      case 'success':
        return `
          background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          color: white;
          border-left: 4px solid #2E7D32;
        `;
      case 'error':
        return `
          background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
          color: white;
          border-left: 4px solid #c62828;
        `;
      case 'warning':
        return `
          background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
          color: white;
          border-left: 4px solid #ef6c00;
        `;
      case 'info':
        return `
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          color: white;
          border-left: 4px solid #1565C0;
        `;
      default:
        return `
          background: linear-gradient(135deg, #666 0%, #555 100%);
          color: white;
          border-left: 4px solid #444;
        `;
    }
  }}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ToastIcon = styled.div<{ $type: 'success' | 'error' | 'info' | 'warning' }>`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
`;

export const ToastMessage = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  word-break: break-word;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

