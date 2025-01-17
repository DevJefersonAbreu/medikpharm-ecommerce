"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/components/contexts/cartContext";


interface BannerItem {
  id: number;
  title: string;
  discount: string;
  description: string;
  image: string;
  alt: string;
  price: number;
}



const bannerData: BannerItem[] = [
  {
    id: 1001,
    title: "Máscaras de Proteção",
    discount: "15% Off",
    description: "Obtenha a melhor máscara de proteção Grau A para você e seus entes queridos.",
    image: "/assets/imagesBanner/mascara.png",
    alt: "Máscara de Proteção",
    price: 29.9,
  },
  {
    id: 1002,
    title: "Kit Gripe em Promoção",
    discount: "20% Off",
    description: "Prepare-se para a temporada de gripe com nosso kit completo em oferta especial.",
    image: "/assets/imagesBanner/gripe.png",
    alt: "Kit Gripe",
    price: 49.9,
  },
  {
    id: 1003,
    title: "Kit Higiene Pessoal",
    discount: "10% Off",
    description: "Cuide da sua higiene com nosso kit completo de produtos essenciais.",
    image: "/assets/imagesBanner/higiene.png",
    alt: "Kit Higiene Pessoal",
    price: 39.9,
  },
];


const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
  const handlePrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  
  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerData.length);
  };

 
  const currentItem = bannerData[currentBanner];
  const isInCart = cart.some((item) => item.id === currentItem.id);

  const handleButtonClick = () => {
    if (isInCart) {
      removeFromCart(currentItem.id);
    } else {
  
      addToCart({
        id: currentItem.id,
        name: currentItem.title, 
        price: currentItem.price,
        quantity: 1,
      });
    }
  };


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
