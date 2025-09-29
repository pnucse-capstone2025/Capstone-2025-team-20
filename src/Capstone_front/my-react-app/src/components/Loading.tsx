import React, { useState, useEffect } from 'react';
import { 
  Spinner, 
  SpinnerWrapper, 
  LoadingMessage, 
  LoadingDots, 
  Dot, 
  ProgressBar, 
  ProgressFill
} from "./Loading.styled"

interface LoadingProps {
  loading?: boolean;
  message?: string;
  showProgress?: boolean;
  type?: 'default' | 'enhanced';
}

const Loading = ({ 
  loading = true, 
  message = "로딩 중...", 
  showProgress = false,
  type = 'default'
}: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(message);

  useEffect(() => {
    if (!loading) return;

    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev; // 90%에서 멈춤
          return prev + Math.random() * 10;
        });
      }, 200);

      return () => clearInterval(interval);
    }

    // 메시지 변경 효과 (더 간단하게)
    if (showProgress) {
      const messages = [
        "데이터를 분석하고 있어요...",
        "맞춤 추천을 찾고 있어요...",
        "최적의 상품을 선별하고 있어요..."
      ];

      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        setCurrentMessage(messages[messageIndex % messages.length]);
        messageIndex++;
      }, 3000);

      return () => clearInterval(messageInterval);
    }
  }, [loading, showProgress]);

  if (!loading) return null;


  if (type === 'enhanced') {
    return (
      <SpinnerWrapper>
        <LoadingMessage>{currentMessage}</LoadingMessage>
        {showProgress && (
          <ProgressBar>
            <ProgressFill $progress={progress} />
          </ProgressBar>
        )}
        <LoadingDots>
          <Dot $delay={0} />
          <Dot $delay={0.2} />
          <Dot $delay={0.4} />
        </LoadingDots>
      </SpinnerWrapper>
    );
  }

  // 기본 로딩
  return (
    <SpinnerWrapper>
      {/*<Spinner />*/}
      <LoadingMessage>{message}</LoadingMessage>
      <LoadingDots>
        <Dot $delay={0} />
        <Dot $delay={0.2} />
        <Dot $delay={0.4} />
      </LoadingDots>
    </SpinnerWrapper>
  );
}

export default Loading