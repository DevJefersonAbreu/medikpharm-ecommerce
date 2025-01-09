import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1200px;
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

export const Content = styled.div`
  display: flex;
  gap: 40px;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Summary = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, #0066cc, #00ccff);
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #0066cc;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '🛒';
    font-size: 28px;
  }
`;

export const ItemList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #0066cc;
    border-radius: 3px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ItemIcon = styled.div`
  margin-right: 15px;
  color: #0066cc;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
  color: #333;
`;

export const ItemQuantity = styled.span`
  font-size: 14px;
  color: #666;
`;

export const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #0066cc;
`;

export const Total = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  text-align: right;
  color: #0066cc;
  padding-top: 20px;
  border-top: 2px dashed #e0e0e0;
`;

export const PaymentForm = styled.form`
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, #00ccff, #0066cc);
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`;

export const PaymentMethodButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 16px;
  border: 2px solid ${(props) => (props.selected ? "#0066cc" : "#ddd")};
  border-radius: 12px;
  background-color: ${(props) => (props.selected ? "#e6f2ff" : "white")};
  color: ${(props) => (props.selected ? "#0066cc" : "#333")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: #0066cc;
    background-color: #f0f8ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 102, 204, 0.1);
  }
`;

export const CardForm = styled.div`
  animation: ${fadeIn} 0.3s ease-out;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
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

export const InputRow = styled.div`
  display: flex;
  gap: 16px;

  ${InputGroup} {
    flex: 1;
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
  margin-top: 24px;
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

export const PixInstructions = styled.div`
  text-align: center;
  margin-bottom: 24px;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const PixQRCode = styled.img`
  max-width: 200px;
  margin: 16px auto;
  display: block;
  border: 2px solid #0066cc;
  border-radius: 10px;
  padding: 10px;
  background-color: #f0f8ff;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.2);
  }
`;

