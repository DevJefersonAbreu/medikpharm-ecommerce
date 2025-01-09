import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #e6f3ff;
  padding: 40px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    max-width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Discount = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #0066cc;
  display: block;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button<{ $isCancel: boolean }>`
  background-color: ${props => props.$isCancel ? '#cc0000' : '#0066cc'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.$isCancel ? '#a30000' : '#0052a3'};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 40%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
`;

export const Indicator = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#0066cc' : '#ccc'};
  margin: 0 5px;
  transition: background-color 0.3s ease;
`;

export const NavigationButton = styled.button<{ $left?: boolean; $right?: boolean }>`
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ${props => props.$left && css`
    left: 10px;
  `}

  ${props => props.$right && css`
    right: 10px;
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.5);
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

