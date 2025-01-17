"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const dispositivos = [
  {
    id: 301,
    image: "/assets/imagesDevices/devices.png",
    name: "Medidor de Pressão Digital",
    price: 129.90,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 302,
    image: "/assets/imagesDevices/devices.png",
    name: "Glicosímetro",
    price: 89.50,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 303,
    image: "/assets/imagesDevices/devices.png",
    name: "Termômetro Infravermelho",
    price: 159.75,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 304,
    image: "/assets/imagesDevices/devices.png",
    name: "Nebulizador",
    price: 199.90,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 305,
    image: "/assets/imagesDevices/devices.png",
    name: "Oxímetro de Pulso",
    price: 79.60,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 306,
    image: "/assets/imagesDevices/devices.png",
    name: "Aparelho de Pressão Manual",
    price: 69.30,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 307,
    image: "/assets/imagesDevices/devices.png",
    name: "Balança Digital",
    price: 85.90,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 308,
    image: "/assets/imagesDevices/devices.png",
    name: "Medidor de Pico de Fluxo",
    price: 112.80,
    rating: 4,
    category: "Dispositivos"
  },
  {
    id: 309,
    image: "/assets/imagesDevices/devices.png",
    name: "Tens Portátil",
    price: 248.50,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 310,
    image: "/assets/imagesDevices/devices.png",
    name: "Inalador Ultrassônico",
    price: 175.75,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 311,
    image: "/assets/imagesDevices/devices.png",
    name: "Tens Portátil",
    price: 248.50,
    rating: 5,
    category: "Dispositivos"
  },
  {
    id: 312,
    image: "/assets/imagesDevices/devices.png",
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

