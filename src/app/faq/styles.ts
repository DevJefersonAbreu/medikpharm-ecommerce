import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #0066cc;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #0066cc, #00ccff);
    margin: 10px auto 0;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

export const FAQItem = styled.div<{ $isActive: boolean }>`
  background-color: ${props => props.$isActive ? '#f0f9ff' : 'white'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  background-color: #e6f7ff;
  border-radius: 50%;
  padding: 10px;
  margin-right: 15px;

  svg {
    color: #0066cc;
  }
`;

export const Question = styled.h3`
  font-size: 18px;
  color: #333;
  flex-grow: 1;
`;

export const ToggleIcon = styled.div`
  color: #0066cc;
`;

export const Answer = styled.div<{ $isActive: boolean }>`
  padding: ${props => props.$isActive ? '0 20px 20px' : '0 20px'};
  max-height: ${props => props.$isActive ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.$isActive ? '1' : '0'};
`;

export const HelpSection = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 30px;
  background-color: #f0f9ff;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

export const HelpTitle = styled.h2`
  font-size: 24px;
  color: #0066cc;
  margin-bottom: 10px;
`;

export const HelpText = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #0052a3;
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.1;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &::before {
    top: 5%;
    left: -5%;
    width: 150px;
    height: 150px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'%3E%3C/path%3E%3Cline x1='12' y1='17' x2='12' y2='17'%3E%3C/line%3E%3C/svg%3E");
    animation: ${float} 6s ease-in-out infinite;
  }

  &::after {
    bottom: 5%;
    right: -5%;
    width: 120px;
    height: 120px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'%3E%3C/path%3E%3C/svg%3E");
    animation: ${float} 8s ease-in-out infinite reverse;
  }
`;

