import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../type/product";
import * as S from "./ProductCardSimple.styled";

export default function ProuductCardSimple({ product, recommendReason = null }: { product: Product; recommendReason?: string | null }) {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleCardClick = () => {
    navigate(`/static/DetailPage/${product.movieId}`, { state: { product } });
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    setShowTooltip(!showTooltip);
  };

  return (
    <S.Card 
      onClick={handleCardClick}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      style={{ position: 'relative' }}
    >
      <S.ImageWrapper>
        <S.Image src={product.imageLink ?? ""} alt={product.blurayTitle ?? ""} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>{product.blurayTitle}</S.Title>
        <S.PriceBox>
            <S.Price>{product.price?.toLocaleString()}원</S.Price>
            <S.Qualty> 해상도 : {product.quality}</S.Qualty>
        </S.PriceBox>
        {product.isLimitedEdition && (
          <S.Limited>한정판!</S.Limited>
        )}
        <S.Mall>{product.siteName}</S.Mall>
      </S.Info>
      
      {/* 호버 시 나타나는 추천 이유 버튼 */}
      {showButton && recommendReason && (
        <button
          onClick={handleButtonClick}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'rgba(255, 215, 0, 0.9)',
            color: '#000',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(4px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 215, 0, 1)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.9)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          💡
        </button>
      )}
      
      {/* 클릭 시 나타나는 툴팁 */}
      {showTooltip && recommendReason && (
        <div 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.95)',
            color: 'white',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '500',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            lineHeight: '1.4',
            backdropFilter: 'blur(4px)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{ 
            fontWeight: '700', 
            marginBottom: '8px',
            color: '#ffd700',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>💡</span>
            <span>추천 이유</span>
          </div>
          <div style={{
            fontSize: '12px',
            lineHeight: '1.3',
            color: '#f0f0f0'
          }}>
            {recommendReason}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>
      )}
    </S.Card>
  );
}
