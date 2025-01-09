import React from "react";
import * as S from "./styles";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <S.Badge className={className}>
      {children}
    </S.Badge>
  );
};

