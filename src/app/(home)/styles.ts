import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const ProductsSection = styled.section`
  padding: 40px 0;
  background-color: #f5f5f5;
`;

export const ProductsTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 32px;
`;

