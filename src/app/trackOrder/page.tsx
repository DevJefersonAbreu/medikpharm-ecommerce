"use client";

import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { useSearchParams } from 'next/navigation';
import { Truck, Package, CheckCircle, Loader } from 'lucide-react';

interface OrderStatus {
  status: 'processing' | 'shipped' | 'delivered';
  estimatedDelivery: Date;
}

const TrackOrderPage: React.FC = () => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    const fetchOrderStatus = () => {
      const now = new Date();
      const estimatedDelivery = new Date(now.getTime() + 20 * 60000); // 20 minutes from now
      const mockStatus: OrderStatus = {
        status: 'shipped',
        estimatedDelivery: estimatedDelivery,
      };
      setOrderStatus(mockStatus);
    };

    if (orderId) {
      fetchOrderStatus();
    }
  }, [orderId]);

  useEffect(() => {
    if (orderStatus) {
      const checkDeliveryStatus = () => {
        const now = new Date();
        if (now >= orderStatus.estimatedDelivery && orderStatus.status !== 'delivered') {
          setOrderStatus(prevStatus => ({
            ...prevStatus!,
            status: 'delivered'
          }));
        }
      };

      const intervalId = setInterval(checkDeliveryStatus, 1000); // Check every second

      return () => clearInterval(intervalId);
    }
  }, [orderStatus]);

  if (!orderId) {
    return (
      <S.Container>
        <S.Title>Acompanhar Pedido</S.Title>
        <S.Form>
          <S.Label htmlFor="orderId">Número do Pedido:</S.Label>
          <S.Input type="text" id="orderId" placeholder="Digite o número do seu pedido" />
          <S.SubmitButton type="submit">Buscar Pedido</S.SubmitButton>
        </S.Form>
      </S.Container>
    );
  }

  if (!orderStatus) {
    return <S.Container><S.LoadingSpinner><Loader size={40} /></S.LoadingSpinner></S.Container>;
  }

  return (
    <S.Container>
      <S.Title>Status do Pedido #{orderId}</S.Title>
      <S.StatusContainer>
        <S.StatusItem $active={orderStatus.status === 'processing' || orderStatus.status === 'shipped' || orderStatus.status === 'delivered'}>
          <S.StatusIcon $active={orderStatus.status === 'processing' || orderStatus.status === 'shipped' || orderStatus.status === 'delivered'}><Package size={24} /></S.StatusIcon>
          <S.StatusText>Processando</S.StatusText>
        </S.StatusItem>
        <S.StatusItem $active={orderStatus.status === 'shipped' || orderStatus.status === 'delivered'}>
          <S.StatusIcon $active={orderStatus.status === 'shipped' || orderStatus.status === 'delivered'}><Truck size={24} /></S.StatusIcon>
          <S.StatusText>Enviado</S.StatusText>
        </S.StatusItem>
        <S.StatusItem $active={orderStatus.status === 'delivered'}>
          <S.StatusIcon $active={orderStatus.status === 'delivered'}><CheckCircle size={24} /></S.StatusIcon>
          <S.StatusText>Entregue</S.StatusText>
        </S.StatusItem>
      </S.StatusContainer>
      <S.DeliveryInfo>
        <S.DeliveryTitle>
          {orderStatus.status === 'delivered' ? 'Entregue em:' : 'Previsão de Entrega:'}
        </S.DeliveryTitle>
        <S.DeliveryDate>
          {orderStatus.estimatedDelivery.toLocaleDateString('pt-BR')} às {orderStatus.estimatedDelivery.toLocaleTimeString('pt-BR')}
        </S.DeliveryDate>
      </S.DeliveryInfo>
    </S.Container>
  );
};

export default TrackOrderPage;

