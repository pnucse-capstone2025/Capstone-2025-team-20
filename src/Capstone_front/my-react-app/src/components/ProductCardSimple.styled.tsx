import styled from "styled-components";

 

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 132, 255, 0.6);
  color: #fff;
  padding: 20px 12px 12px 12px;
  box-sizing: border-box;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;

  mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
`;



export const Card = styled.div`
  flex: 0 0 220px;            /* 기본 너비 */
  height: 300px;              /* 기본 높이 */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  user-select: none;          /* 드래그 시 텍스트 선택 방지 */

  &:hover {
    flex: 0 0 300px;          /* hover 시 너비 증가 */
    height: 390px;            /* hover 시 높이 증가 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${Info} {
    transform: translateY(0);
    opacity: 1;
  }

`;


export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`;


export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Qualty = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const Limited = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #ffd903;
`;

export const Mall = styled.span`
  font-size: 12px;
  color: #ddd;
`;



export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;

export const Tooltip = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.64);
  color: #333;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  z-index: 10;
  max-width: 250px;
  white-space: normal;
  word-wrap: break-word;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.14);
  pointer-events: none;
`;

