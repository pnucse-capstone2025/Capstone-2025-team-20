import styled from "styled-components";
import { colors } from "../style/themes";

export const CardSection = styled.div`
  margin: 5px;
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 16px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f8fafc;
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Describe = styled.div`
  font-size: 14px;
  color: #555;
`;

export const Limited = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #fae20a;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.mainDeepBlue};
`;

export const Aside = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: calc(100% - 40px);
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mall = styled.span`
  font-size: 13px;
  color: #555;
`;

export const Ad = styled.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const EasyPay = styled.span`
  img {
    height: 16px;
  }
`;
