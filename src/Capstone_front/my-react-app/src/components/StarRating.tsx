import React from 'react';

interface StarRatingProps {
  rating: number;
  size?: 'small' | 'medium' | 'large';
  showScore?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 'medium', 
  showScore = true 
}) => {
  const sizeMap = {
    small: '14px',
    medium: '16px',
    large: '18px'
  };

  const fontSize = sizeMap[size];

  const renderStar = (star: number) => {
    if (rating >= star) {
      // 완전히 채워진 별
      return (
        <span key={star} style={{ color: '#fbbf24', fontSize }}>
          ★
        </span>
      );
    } else if (rating >= star - 0.5) {
      // 반별점
      return (
        <span key={star} style={{ 
          color: '#e2e8f0', 
          fontSize, 
          position: 'relative',
          display: 'inline-block'
        }}>
          ★
          <span style={{ 
            position: 'absolute', 
            left: '0', 
            top: '0',
            width: '50%', 
            overflow: 'hidden',
            color: '#fbbf24'
          }}>
            ★
          </span>
        </span>
      );
    } else {
      // 빈 별
      return (
        <span key={star} style={{ color: '#e2e8f0', fontSize }}>
          ★
        </span>
      );
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map(renderStar)}
      </div>
      {showScore && (
        <span style={{ 
          fontSize: '11px', 
          color: '#64748b',
          fontWeight: '600',
          background: '#f1f5f9',
          padding: '2px 6px',
          borderRadius: '6px'
        }}>
          {rating.toFixed(1)}점
        </span>
      )}
    </div>
  );
};

export default StarRating;
