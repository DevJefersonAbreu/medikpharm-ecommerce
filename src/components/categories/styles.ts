import styled from "styled-components";
import Link from 'next/link';

export const Container = styled.section`
  padding: 40px 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 24px;
`;

export const CategoryCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div`
  color: #0066cc;
  margin-bottom: 16px;
`;

export const CategoryName = styled.span`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

