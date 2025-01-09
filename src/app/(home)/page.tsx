"use client";
import React from "react";
import * as S from "./styles";
import Banner from "@/components/banner/banner";
import Categories from "@/components/categories/categories";
import ProductCard, { products } from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

const Home: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <S.Container>
      <Banner />
      <Categories />
      <S.ProductsSection>
        <S.ProductsTitle>Produtos em Destaque</S.ProductsTitle>
        <S.ProductsGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isInCart={cart.some(item => item.id === product.id)}
              onAddToCart={() => addToCart({ ...product, quantity: 1 })}
              onRemoveFromCart={() => removeFromCart(product.id)}
            />
          ))}
        </S.ProductsGrid>
      </S.ProductsSection>
    </S.Container>
  );
};

export default Home;

