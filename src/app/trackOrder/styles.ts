import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 32px;
  text-align: center;
  color: #0066cc;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #0066cc;
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-out;
`;

export const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(to right, #0066cc, #00ccff);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(to right, #0066cc, #00ccff);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #e0e0e0;
    z-index: -1;
  }
`;

export const StatusItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${props => props.$active && css`
    transform: scale(1.1);
  `}
`;

export const StatusIcon = styled.div<{ $active: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#0066cc' : '#ffffff'};
  color: ${props => props.$active ? '#ffffff' : '#0066cc'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${props => props.$active && css`
    animation: ${fadeIn} 0.5s ease-out;
  `}
`;

export const StatusText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const DeliveryInfo = styled.div`
  background-color: #f0f8ff;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-out;
`;

export const DeliveryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #0066cc;
`;

export const DeliveryDate = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  svg {
    animation: ${spin} 1s linear infinite;
    color: #0066cc;
  }
`;

