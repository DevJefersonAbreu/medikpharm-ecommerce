import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

