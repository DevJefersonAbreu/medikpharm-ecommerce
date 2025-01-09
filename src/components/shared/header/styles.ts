import styled, { css, keyframes } from "styled-components";
import { Search, MapPin, ShoppingCart, Clock } from 'lucide-react';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const rotatePill = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #39ff14;
  }
  50% {
    box-shadow: 0 0 20px #39ff14;
  }
  100% {
    box-shadow: 0 0 5px #39ff14;
  }
`;

export const PillIcon = styled.div`
  width: 40px;
  height: 20px;
  background: linear-gradient(135deg, #0066cc, #00ccff);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transform: rotate(-45deg);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    right: 0;
  }

  &::after {
    content: '+';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  background: linear-gradient(to right, #f0f9ff, #e6f7ff);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TopBanner = styled.div`
  background: linear-gradient(90deg, #0066cc, #0099ff);
  color: white;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
`;

export const OpenHours = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
`;

export const GlowingDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #39ff14;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  animation: ${glowingAnimation} 1.5s infinite;
`;

export const FreeShippingMessage = styled.div`
  font-weight: bold;
  animation: ${pulse} 2s infinite;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 32px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover ${PillIcon} {
    animation: ${rotatePill} 0.5s ease-in-out;
    transform: rotate(0deg) scale(1.1);
  }
`;

export const LogoText = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: #0066cc;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #0066cc, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    order: 3;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:focus {
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #0066cc;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #004c99;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #333;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 20px;
  white-space: normal;
  text-align: center;
  width: 80px;
  height: 80px;
  position: relative;

  span {
    display: block;
    line-height: 1.2;
    margin-top: 4px;
  }

  &:hover {
    color: #0066cc;
    background: rgba(0, 102, 204, 0.1);
    transform: translateY(-2px);
  }
`;

export const CartCount = styled.span`
  background: linear-gradient(135deg, #0066cc, #00ccff);
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const CartDropdown = styled.div`
  position: absolute;
  right: 16px;
  top: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #0066cc;
  font-size: 24px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ $show: boolean }>`
  display: none;
  flex-direction: column;
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    display: ${props => props.$show ? 'flex' : 'none'};
  }
`;

export const MobileMenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f9ff;
    color: #0066cc;
  }

  svg {
    color: #0066cc;
  }
`;

