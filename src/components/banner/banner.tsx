"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/components/contexts/cartContext";

// Interface para os itens do banner
interface BannerItem {
  id: number;
  title: string;
  discount: string;
  description: string;
  image: string;
  alt: string;
  price: number;
}


// Dados do banner
const bannerData: BannerItem[] = [
  {
    id: 1001,
    title: "Máscaras de Proteção",
    discount: "15% Off",
    description: "Obtenha a melhor máscara de proteção Grau A para você e seus entes queridos.",
    image: "/placeholder.svg?height=400&width=400",
    alt: "Máscara de Proteção",
    price: 29.9,
  },
  {
    id: 1002,
    title: "Kit Gripe em Promoção",
    discount: "20% Off",
    description: "Prepare-se para a temporada de gripe com nosso kit completo em oferta especial.",
    image: "/placeholder.svg?height=400&width=400",
    alt: "Kit Gripe",
    price: 49.9,
  },
  {
    id: 1003,
    title: "Kit Higiene Pessoal",
    discount: "10% Off",
    description: "Cuide da sua higiene com nosso kit completo de produtos essenciais.",
    image: "/placeholder.svg?height=400&width=400",
    alt: "Kit Higiene Pessoal",
    price: 39.9,
  },
];

// Componente Banner
const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { cart, addToCart, removeFromCart } = useCart();

  // Alternar o banner automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Função para ir ao banner anterior
  const handlePrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  // Função para ir ao próximo banner
  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerData.length);
  };

  // Item atual do banner
  const currentItem = bannerData[currentBanner];
  const isInCart = cart.some((item) => item.id === currentItem.id);

  // Função para adicionar ou remover o item do carrinho
  const handleButtonClick = () => {
    if (isInCart) {
      removeFromCart(currentItem.id);
    } else {
      // Adicionar o item ao carrinho com o nome
      addToCart({
        id: currentItem.id,
        name: currentItem.title, // ✅ Adicionando a propriedade 'name'
        price: currentItem.price,
        quantity: 1,
      });
    }
  };

  // Renderização do componente
  return (
    <S.Container>
      <S.Content>
        <S.TextContent>
          <S.Title>{currentItem.title}</S.Title>
          <S.Discount>{currentItem.discount}</S.Discount>
          <S.Description>{currentItem.description}</S.Description>
          <S.Button onClick={handleButtonClick} $isCancel={isInCart}>
            {isInCart ? "Cancelar" : "Comprar Agora"}
          </S.Button>
        </S.TextContent>
        <S.ImageWrapper>
          <S.Image src={currentItem.image} alt={currentItem.alt} />
        </S.ImageWrapper>
      </S.Content>
      <S.NavigationButton onClick={handlePrevious} aria-label="Banner anterior" $left>
        <ChevronLeft size={24} />
      </S.NavigationButton>
      <S.NavigationButton onClick={handleNext} aria-label="Próximo banner" $right>
        <ChevronRight size={24} />
      </S.NavigationButton>
      <S.Indicators>
        {bannerData.map((_, index) => (
          <S.Indicator key={index} $active={index === currentBanner} />
        ))}
      </S.Indicators>
    </S.Container>
  );
};

export default Banner;
