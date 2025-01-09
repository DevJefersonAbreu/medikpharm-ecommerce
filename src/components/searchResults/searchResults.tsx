"use client";

import React from "react";
import * as S from "./styles";
import ProductCard from "@/components/productCard/productCard";
import { useCart } from "@/components/contexts/cartContext";

interface SearchResultsProps {
  products: Array<{
    id: number;
    image: string;
    name: string;
    price: number;
    rating: number;
  }>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <S.Container>
      {products.length === 0 ? (
        <S.NoResults>Nenhum produto encontrado</S.NoResults>
      ) : (
        products.map((product) => (
          <ProductCard
            category={""} key={product.id}
            {...product}
            isInCart={cart.some(item => item.id === product.id)}
            onAddToCart={() => addToCart({ ...product, quantity: 1 })}
            onRemoveFromCart={() => removeFromCart(product.id)}          />
        ))
      )}
    </S.Container>
  );
};

export default SearchResults;

