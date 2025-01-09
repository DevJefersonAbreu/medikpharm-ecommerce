"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const equipamentos = [
  {
    id: 401,
    image: "/placeholder.svg?height=200&width=200",
    name: "Estetoscópio",
    price: 189.90,
    rating: 5,
    category: "Equipamentos"
  },
  {
    id: 402,
    image: "/placeholder.svg?height=200&width=200",
    name: "Otoscópio",
    price: 259.50,
    rating: 4,
    category: "Equipamentos"
  },
  {
    id: 403,
    image: "/placeholder.svg?height=200&width=200",
    name: "Esfigmomanômetro",
    price: 129.75,
    rating: 5,
    category: "Equipamentos"
  },
  {
    id: 404,
    image: "/placeholder.svg?height=200&width=200",
    name: "Oxímetro de Dedo",
    price: 99.90,
    rating: 4,
    category: "Equipamentos"
  },
  {
    id: 405,
    image: "/placeholder.svg?height=200&width=200",
    name: "Termômetro Digital",
    price: 39.60,
    rating: 5,
    category: "Equipamentos"
  },
  {
    id: 406,
    image: "/placeholder.svg?height=200&width=200",
    name: "Balança Digital",
    price: 89.30,
    rating: 4,
    category: "Equipamentos"
  },
  {
    id: 407,
    image: "/placeholder.svg?height=200&width=200",
    name: "Lanterna Clínica",
    price: 45.90,
    rating: 4,
    category: "Equipamentos"
  },
  {
    id: 408,
    image: "/placeholder.svg?height=200&width=200",
    name: "Martelo de Reflexo",
    price: 32.80,
    rating: 4,
    category: "Equipamentos"
  },
  {
    id: 409,
    image: "/placeholder.svg?height=200&width=200",
    name: "Adipômetro",
    price: 148.50,
    rating: 5,
    category: "Equipamentos"
  },
  {
    id: 410,
    image: "/placeholder.svg?height=200&width=200",
    name: "Fita Métrica",
    price: 15.75,
    rating: 5,
    category: "Equipamentos"
  }
];

const EquipamentosPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <S.Container>
      <S.Title>Equipamentos Médicos</S.Title>
      <S.ProductsGrid>
        {equipamentos.map((equipamento) => (
          <ProductCard
            key={equipamento.id}
            {...equipamento}
            isInCart={cart.some(item => item.id === equipamento.id)}
            onAddToCart={() => addToCart({ ...equipamento, quantity: 1 })}
            onRemoveFromCart={() => removeFromCart(equipamento.id)}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default EquipamentosPage;

