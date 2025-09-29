import React, { useEffect, useRef } from "react";
import { Product } from "../type/product";
import * as S from "./OnboardingCard.styled";

interface OnboardingCardProps {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
  animationDelay?: number;
}

const OnboardingCard = React.memo(({ product, isSelected, onClick, animationDelay = 0 }: OnboardingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('animation-complete');
      }
    }, animationDelay * 1000 + 600); // 애니메이션 딜레이 + 0.6초 애니메이션 시간

    return () => clearTimeout(timer);
  }, [animationDelay]);


  return (
    <S.Card 
      ref={cardRef}
      isSelected={isSelected}
      onClick={onClick}
      animationDelay={animationDelay}
    >
      <S.ImageWrapper>
        <S.Image src={product.imageLink ?? ""} alt={product.blurayTitle ?? ""} />
        {isSelected && <S.SelectedOverlay />}
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.blurayTitle}</S.Title>
        <S.PriceBox>
          <S.Price>{product.price?.toLocaleString()}원</S.Price>
          <S.Quality>해상도: {product.quality}</S.Quality>
        </S.PriceBox>
      </S.Info>
      {isSelected && <S.Checkmark>✓</S.Checkmark>}
    </S.Card>
  );
});

OnboardingCard.displayName = 'OnboardingCard';

export default OnboardingCard;
