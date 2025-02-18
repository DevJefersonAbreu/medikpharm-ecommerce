"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const injecoes = [
  {
    id: 201,
    image: "/assets/imagesInjections/injecao.png",
    name: "Insulina Regular",
    price: 45.90,
    rating: 5,
    category: "Injeções"
  },
  {
    id: 202,
    image: "/assets/imagesInjections/injecao.png",
    name: "Vitamina B12",
    price: 30.50,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 203,
    image: "/assets/imagesInjections/injecao.png",
    name: "Penicilina Benzatina",
    price: 35.75,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 204,
    image: "/assets/imagesInjections/injecao.png",
    name: "Dexametasona",
    price: 28.90,
    rating: 5,
    category: "Injeções"
  },
  {
    id: 205,
    image: "/assets/imagesInjections/injecao.png",
    name: "Heparina",
    price: 52.60,
    rating: 5,
    category: "Injeções"
  },
  {
    id: 206,
    image: "/assets/imagesInjections/injecao.png",
    name: "Adrenalina",
    price: 40.30,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 207,
    image: "/assets/imagesInjections/injecao.png",
    name: "Morfina",
    price: 65.90,
    rating: 5,
    category: "Injeções"
  },
  {
    id: 208,
    image: "/assets/imagesInjections/injecao.png",
    name: "Diclofenaco",
    price: 22.80,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 209,
    image: "/assets/imagesInjections/injecao.png",
    name: "Dipirona",
    price: 18.50,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 210,
    image: "/assets/imagesInjections/injecao.png",
    name: "Complexo B",
    price: 25.75,
    rating: 5,
    category: "Injeções"
  },
  {
    id: 211,
    image: "/assets/imagesInjections/injecao.png",
    name: "Dipirona",
    price: 18.50,
    rating: 4,
    category: "Injeções"
  },
  {
    id: 212,
    image: "/assets/imagesInjections/injecao.png",
    name: "Complexo B",
    price: 25.75,
    rating: 5,
    category: "Injeções"
  }
];

const InjecoesPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <S.Container>
      <S.Title>Injeções</S.Title>
      <S.ProductsGrid>
        {injecoes.map((injecao) => (
          <ProductCard
            key={injecao.id}
            {...injecao}
            isInCart={cart.some(item => item.id === injecao.id)}
            onAddToCart={() => addToCart({ ...injecao, quantity: 1 })}
            onRemoveFromCart={() => removeFromCart(injecao.id)}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default InjecoesPage;

