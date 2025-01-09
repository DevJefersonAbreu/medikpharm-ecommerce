"use client";

import React from "react";
import * as S from "./styles";
import { useCart } from "@/components/contexts/cartContext";
import { X } from 'lucide-react';

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, total, removeFromCart, checkout } = useCart();

  const handleCheckout = () => {
    checkout();
    onClose();
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Carrinho</S.Title>
        <S.CloseButton onClick={onClose}>
          <X size={24} />
        </S.CloseButton>
      </S.Header>
      {cart.length === 0 ? (
        <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
      ) : (
        <>
          {cart.map((item) => (
            <S.CartItem key={item.id}>
              <S.ItemImage src={`/placeholder.svg?height=50&width=50`} alt={item.name} />
              <S.ItemInfo>
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemDetails>
                  <S.ItemQuantity>Quantidade: {item.quantity}</S.ItemQuantity>
                  <S.ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</S.ItemPrice>
                </S.ItemDetails>
              </S.ItemInfo>
              <S.RemoveButton onClick={() => removeFromCart(item.id)}>Remover</S.RemoveButton>
            </S.CartItem>
          ))}
          <S.Total>Total: R$ {total.toFixed(2)}</S.Total>
          <S.CheckoutButton onClick={handleCheckout}>Finalizar Compra</S.CheckoutButton>
        </>
      )}
    </S.Container>
  );
};

export default Cart;

