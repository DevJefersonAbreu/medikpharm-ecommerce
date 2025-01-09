import styled from "styled-components";
import { Badge } from "@/components/ui/badge";

export const Container = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 75%; // 4:3 aspect ratio
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

export const CategoryBadge = styled(Badge)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 102, 204, 0.8);
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const RatingText = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-left: 4px;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 16px;
`;

export const AddButton = styled.button`
  width: 100%;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: auto;

  &:hover {
    background-color: #0052a3;
  }
`;

export const CancelButton = styled(AddButton)`
  background-color: #cc0000;

  &:hover {
    background-color: #a30000;
  }
`;

