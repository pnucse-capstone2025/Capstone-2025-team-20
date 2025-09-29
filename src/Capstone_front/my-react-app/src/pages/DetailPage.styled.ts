// DetailPage.styled.ts
import styled from "styled-components";
import { colors } from "../style/themes";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
`;


export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 60px;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1a202c;
  line-height: 1.3;
`;

export const Prices = styled.div`
  display: flex;
  align-items: baseline;

`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.mainBlue};
`;

export const Mall = styled.span`
  font-size: 14px;
  color: #64748b;
  background: #f1f5f9;
  padding: 6px 12px;
  border-radius: 12px;
  cursor: pointer;
`;

export const Section = styled.section`
  padding: 40px 0;
  border-top: 1px solid #e2e8f0;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #1a202c;
    letter-spacing: 0.2px;
    padding-left: 20px;
  }
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;

  th {
    width: 140px;
    text-align:center;
    padding: 16px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #374151;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
  }

  td {
    padding: 16px 20px;
    font-size: 14px;
    color: #4a5568;
    border-bottom: 1px solid #f1f5f9;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

export const ReviewInput = styled.textarea`
  resize: none;
  min-height: 100px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  line-height: 1.6;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${colors.mainBlue};
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const SubmitButton = styled.button`
  background: white;
  color: ${colors.mainBlue};
  border: none;
  padding: 10px;
  border-radius: 39% 20px 30% 36%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.mainBlue};
    color: white;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ReviewItem = styled.div`
  margin-bottom: 12px;
  padding: 8px;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const ReviewUsername = styled.span`
  font-weight: bold;
`;

export const ReviewComment = styled.div`
  margin-bottom: 4px;
`;

export const ReviewDate = styled.div`
  font-size: 12px;
  color: #999;
`;

export const LoginRequiredMessage = styled.div`
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  color: #666;
`;

export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Star = styled.span<{ filled: boolean }>`
  font-size: 20px;
  color: ${props => props.filled ? '#fbbf24' : '#e2e8f0'};
  cursor: pointer;
  transition: color 0.2s ease;
`;

export const RatingText = styled.span`
  font-size: 12px;
  color: #64748b;
`;

