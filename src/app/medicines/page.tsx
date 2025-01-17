"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const medicamentos = [
  {
    id: 101,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Paracetamol 500mg",
    price: 15.90,
    rating: 4,
    category: "Analgésicos"
  },
  {
    id: 102,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Ibuprofeno 400mg",
    price: 18.50,
    rating: 5,
    category: "Anti-inflamatórios"
  },
  {
    id: 103,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Omeprazol 20mg",
    price: 25.90,
    rating: 4,
    category: "Antiácidos"
  },
  {
    id: 104,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Dipirona 500mg",
    price: 12.75,
    rating: 4,
    category: "Analgésicos"
  },
  {
    id: 105,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Amoxicilina 500mg",
    price: 35.60,
    rating: 5,
    category: "Antibióticos"
  },
  {
    id: 106,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Loratadina 10mg",
    price: 22.30,
    rating: 4,
    category: "Antialérgicos"
  },
  {
    id: 107,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Dorflex 36 comprimidos",
    price: 19.90,
    rating: 5,
    category: "Relaxantes Musculares"
  },
  {
    id: 108,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Buscopan 10mg",
    price: 16.80,
    rating: 4,
    category: "Antiespasmódicos"
  },
  {
    id: 109,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Rivotril 2mg",
    price: 28.50,
    rating: 4,
    category: "Ansiolíticos"
  },
  {
    id: 110,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Neosaldina 30 drágeas",
    price: 20.75,
    rating: 5,
    category: "Analgésicos"
  },
  {
    id: 111,
    image: "/assets/imagesMedicines/medicamento.png",
    name: "Neosaldina 30 drágeas",
    price: 20.75,
    rating: 5,
    category: "Analgésicos"
  }
];

const MedicamentosPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <S.Container>
      <S.Title>Medicamentos</S.Title>
      <S.ProductsGrid>
        {medicamentos.map((medicamento) => (
          <ProductCard
            key={medicamento.id}
            {...medicamento}
            isInCart={cart.some(item => item.id === medicamento.id)}
            onAddToCart={() => addToCart({ ...medicamento, quantity: 1 })}
            onRemoveFromCart={() => removeFromCart(medicamento.id)}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
};

export default MedicamentosPage;

