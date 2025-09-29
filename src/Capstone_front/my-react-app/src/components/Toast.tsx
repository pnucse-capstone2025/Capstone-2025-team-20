import React, { useEffect } from 'react';
import * as S from './Toast.styled';

export interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <S.ToastContainer $type={type}>
      <S.ToastIcon $type={type}>
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'warning' && '⚠'}
        {type === 'info' && 'ℹ'}
      </S.ToastIcon>
      <S.ToastMessage>{message}</S.ToastMessage>
      <S.CloseButton onClick={() => onClose(id)}>×</S.CloseButton>
    </S.ToastContainer>
  );
};

export default Toast;

