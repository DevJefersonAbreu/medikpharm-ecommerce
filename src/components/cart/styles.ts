import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 350px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: #666;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 12px;
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

export const ItemQuantity = styled.span``;

export const ItemPrice = styled.span``;

export const RemoveButton = styled.button`
  background-color: #cc0000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #a30000;
  }
`;

export const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  text-align: right;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #0052a3;
  }
`;

