"use client";

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useCart } from "@/components/contexts/cartContext";
import { useRouter } from 'next/navigation';
import { CreditCard, QrCode } from 'lucide-react';


const CheckoutPage: React.FC = () => {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'debit' | 'pix'>('credit');

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/');
    }
  }, [cart, router]);

  const handlePaymentMethodChange = (method: 'credit' | 'debit' | 'pix') => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    clearCart();
    router.push(`/track-order?orderId=${orderId}`);
  };

  

  return (
    <S.Container>
      <S.Title>Finalizar Compra</S.Title>
      <S.Content>
        <S.Summary>
          <S.SummaryTitle>Resumo do Pedido</S.SummaryTitle>
          <S.ItemList>
           
          </S.ItemList>
          <S.Total>Total: R$ {total.toFixed(2)}</S.Total>
        </S.Summary>
        <S.PaymentForm onSubmit={handleSubmit}>
          <S.PaymentMethods>
            <S.PaymentMethodButton
              type="button"
              selected={paymentMethod === 'credit'}
              onClick={() => handlePaymentMethodChange('credit')}
            >
              <CreditCard size={24} />
              Cartão de Crédito
            </S.PaymentMethodButton>
            <S.PaymentMethodButton
              type="button"
              selected={paymentMethod === 'debit'}
              onClick={() => handlePaymentMethodChange('debit')}
            >
              <CreditCard size={24} />
              Cartão de Débito
            </S.PaymentMethodButton>
            <S.PaymentMethodButton
              type="button"
              selected={paymentMethod === 'pix'}
              onClick={() => handlePaymentMethodChange('pix')}
            >
              <QrCode size={24} />
              PIX
            </S.PaymentMethodButton>
          </S.PaymentMethods>
          {paymentMethod === 'pix' ? (
            <S.PixInstructions>
              <p>Use o QR Code abaixo para pagar com PIX:</p>
              <S.PixQRCode src="/placeholder.svg?height=200&width=200" alt="PIX QR Code" />
            </S.PixInstructions>
          ) : (
            <S.CardForm>
              <S.InputGroup>
                <S.Label htmlFor="cardNumber">Número do Cartão</S.Label>
                <S.Input type="text" id="cardNumber" required placeholder="1234 5678 9012 3456" />
              </S.InputGroup>
              <S.InputGroup>
                <S.Label htmlFor="cardName">Nome no Cartão</S.Label>
                <S.Input type="text" id="cardName" required placeholder="Nome completo" />
              </S.InputGroup>
              <S.InputRow>
                <S.InputGroup>
                  <S.Label htmlFor="expiryDate">Data de Expiração</S.Label>
                  <S.Input type="text" id="expiryDate" placeholder="MM/AA" required />
                </S.InputGroup>
                <S.InputGroup>
                  <S.Label htmlFor="cvv">CVV</S.Label>
                  <S.Input type="text" id="cvv" required placeholder="123" />
                </S.InputGroup>
              </S.InputRow>
            </S.CardForm>
          )}
          <S.SubmitButton type="submit">Finalizar Pagamento</S.SubmitButton>
        </S.PaymentForm>
      </S.Content>
    </S.Container>
  );
};

export default CheckoutPage;
