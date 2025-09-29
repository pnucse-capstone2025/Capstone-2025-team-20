import styled from "styled-components";

export const BasicBase = styled.div`
    margin: 0 auto;
    width: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    max-width: 1280px;
`
export const BackgroundPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(28, 118, 207, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(28, 118, 207, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
`;

export const MainSection = styled.div`
    width: 100%;
    padding: 20px;
`
export const LeftAlign = styled.div`
    display: flex;
    flex-direction: row;
`


export const EmptyBox = styled.div`
    height: 100px;
    width: 10px;
`

export const Spacer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['h', 'w'].includes(prop),
})<{ h?: number; w?: number }>`
  height: ${({ h }) => (h ? `${h}px` : "0")};
  width: ${({ w }) => (w ? `${w}px` : "0")};
`;

export const NoMenuBar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`


export const Footer = styled.footer`
  margin-top: 60px;
  padding: 32px 20px;
  color: #666;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`;