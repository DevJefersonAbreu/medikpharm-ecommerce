"use client";

import React from "react";
import * as S from "./styles";
import { Pill, FlaskRoundIcon as Flask, Stethoscope, Syringe, Activity, Thermometer } from 'lucide-react';
import Link from 'next/link';

const Categories: React.FC = () => {
const categories = [
  { icon: <Pill size={32} />, name: "Medicamentos", link: "/medicines" },
  { icon: <Flask size={32} />, name: "Laboratório", link: "/laboratory" },
  { icon: <Stethoscope size={32} />, name: "Equipamentos", link: "/equipment" },
  { icon: <Syringe size={32} />, name: "Injeções", link: "/injections" },
  { icon: <Activity size={32} />, name: "Radiologia", link: "/radiology" },
  { icon: <Thermometer size={32} />, name: "Dispositivos", link: "/devices" },
];

return (
  <S.Container>
    <S.Title>Nossas Categorias</S.Title>
    <S.Grid>
      {categories.map((category, index) => (
        <Link href={category.link} key={index} passHref>
          <S.CategoryCard>
            <S.IconWrapper>{category.icon}</S.IconWrapper>
            <S.CategoryName>{category.name}</S.CategoryName>
          </S.CategoryCard>
        </Link>
      ))}
    </S.Grid>
  </S.Container>
);
};

export default Categories;

