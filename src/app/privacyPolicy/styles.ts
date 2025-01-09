import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1200px;
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
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #004c99;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;
`;

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  background-color: ${props => props.$active ? '#0066cc' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#0066cc'};
  border: 2px solid #0066cc;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$active ? '#0052a3' : '#e6f7ff'};
  }
`;

export const PolicyContent = styled.div`
  flex: 1;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #f0f9ff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #0066cc;
  margin-bottom: 15px;
`;

export const CardContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export const DefaultContent = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
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
    top: 10%;
    left: 5%;
    width: 100px;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H3'/%3E%3Cpath d='M12 3a9 9 0 0 1 9 9v7c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6'/%3E%3C/svg%3E");
    animation: ${float} 6s ease-in-out infinite;
  }

  &::after {
    bottom: 15%;
    right: 10%;
    width: 150px;
    height: 150px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230066cc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 8.5V5c0-1.1-.9-2-2-2h-7L8.5 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3.5'/%3E%3Cpath d='M14 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'/%3E%3C/svg%3E");
    animation: ${float} 8s ease-in-out infinite;
  }
`;

