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

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;
`;

export const PartnerCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PartnerName = styled.h2`
  font-size: 24px;
  color: #0066cc;
  margin-bottom: 16px;
`;

export const PartnerDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-size: 14px;
`;

export const InfoSection = styled.section`
  margin-top: 40px;
  background-color: #e6f3ff;
  padding: 24px;
  border-radius: 8px;
`;

export const InfoTitle = styled.h3`
  font-size: 24px;
  color: #0066cc;
  margin-bottom: 16px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.8;
`;

export const CTASection = styled.section`
  margin-top: 40px;
  text-align: center;
`;

export const CTATitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

export const CTAButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052a3;
  }
`;

