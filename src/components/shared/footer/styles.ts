import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(to right, #f0f9ff, #e6f7ff);
  padding: 48px 0 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #0066cc;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Text = styled.p`
  color: #333;
  line-height: 1.5;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;

  svg {
    color: #0066cc;
  }
`;

export const Link = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #0066cc;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled.a`
  color: #0066cc;
  transition: color 0.2s;

  &:hover {
    color: #004c99;
  }
`;

export const Bottom = styled.div`
  margin-top: 48px;
  padding: 24px 16px;
  background-color: #0066cc;
`;

export const Copyright = styled.p`
  text-align: center;
  color: white;
  font-size: 14px;
`;

