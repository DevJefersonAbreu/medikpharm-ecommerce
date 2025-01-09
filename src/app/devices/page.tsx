"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const dispositivos = [
  {
    id: 301,
    image: "/placeholder.svg?height=200&width=200",
    name: "Medidor de Pressão Digital",
    price: 129.90,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 302,
    image: "/placeholder.svg?height=200&width=200",
    name: "Glicosímetro",
    price: 89.50,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 303,
    image: "/placeholder.svg?height=200&width=200",
    name: "Termômetro Infravermelho",
    price: 159.75,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 304,
    image: "/placeholder.svg?height=200&width=200",
    name: "Nebulizador",
    price: 199.90,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 305,
    image: "/placeholder.svg?height=200&width=200",
    name: "Oxímetro de Pulso",
    price: 79.60,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 306,
    image: "/placeholder.svg?height=200&width=200",
    name: "Aparelho de Pressão Manual",
    price: 69.30,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 307,
    image: "/placeholder.svg?height=200&width=200",
    name: "Balança Digital",
    price: 85.90,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 308,
    image: "/placeholder.svg?height=200&width=200",
    name: "Medidor de Pico de Fluxo",
    price: 112.80,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 309,
    image: "/placeholder.svg?height=200&width=200",
    name: "Tens Portátil",
    price: 248.50,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 310,
    image: "/placeholder.svg?height=200&width=200",
    name: "Inalador Ultrassônico",
    price: 175.75,
    rating: 5,
    category: "Dispositivos"
  }
];

const DispositivosPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <S.Container>
      <S.Title>Dispositivos Médicos</S.Title>
      <S.ProductsGrid>
        {dispositivos.map((dispositivo) => (
          <ProductCard
            key={dispositivo.id}
            {...dispositivo}
            isInCart={cart.some(item => item.id === dispositivo.id)}
            onAddToCart={() => addToCart({ ...dispositivo, quantity: 1 })}
            onRemoveFromCart={() => removeFromCart(dispositivo.id)}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default DispositivosPage;

