"use client";

import React, { useState } from 'react';
import * as S from './styles';
import { Plus, Minus, Pill, Truck, CreditCard, Repeat, ShieldCheck, Clock, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqData = [
    {
      question: "Como faço para realizar um pedido?",
      answer: "Para realizar um pedido, basta navegar pelo nosso catálogo, selecionar os produtos desejados e adicioná-los ao carrinho. Em seguida, prossiga para o checkout, onde você poderá revisar seu pedido, escolher o método de entrega e finalizar a compra.",
      icon: Pill
    },
    {
      question: "Quais são as opções de entrega disponíveis?",
      answer: "Oferecemos entrega padrão, expressa e retirada na loja. Os prazos e custos variam de acordo com a sua localização e a opção escolhida. Detalhes específicos serão fornecidos durante o processo de checkout.",
      icon: Truck
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito e débito das principais bandeiras, transferência bancária, boleto e pagamento via PIX. Todas as transações são processadas de forma segura.",
      icon: CreditCard
    },
    {
      question: "Qual é a política de devolução?",
      answer: "Você pode devolver produtos não utilizados dentro de 30 dias após a compra. Para medicamentos, é necessário apresentar a receita médica original. Entre em contato com nosso atendimento ao cliente para iniciar o processo de devolução.",
      icon: Repeat
    },
    {
      question: "Como posso ter certeza de que meus dados estão seguros?",
      answer: "Utilizamos tecnologia de criptografia avançada para proteger suas informações pessoais e dados de pagamento. Além disso, seguimos rigorosos protocolos de segurança e privacidade em conformidade com as regulamentações do setor farmacêutico.",
      icon: ShieldCheck
    },
    {
      question: "Qual é o horário de funcionamento da farmácia?",
      answer: "Nossa farmácia física funciona de segunda a sábado, das 8h às 22h, e aos domingos e feriados, das 9h às 20h. O atendimento online através do site está disponível 24 horas por dia, 7 dias por semana.",
      icon: Clock
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <S.Container>
      <S.Title id="top">Perguntas Frequentes</S.Title>
      <S.FAQList>
        {faqData.map((item, index) => (
          <S.FAQItem key={index} $isActive={activeQuestion === index}>
            <S.QuestionHeader onClick={() => toggleQuestion(index)}>
              <S.IconWrapper>
                <item.icon size={24} />
              </S.IconWrapper>
              <S.Question>{item.question}</S.Question>
              <S.ToggleIcon>
                {activeQuestion === index ? <Minus size={24} /> : <Plus size={24} />}
              </S.ToggleIcon>
            </S.QuestionHeader>
            <S.Answer $isActive={activeQuestion === index}>{item.answer}</S.Answer>
          </S.FAQItem>
        ))}
      </S.FAQList>
      <S.HelpSection>
        <S.HelpTitle>Ainda tem dúvidas?</S.HelpTitle>
        <S.HelpText>Nossa equipe está pronta para ajudar você.</S.HelpText>
        <S.ContactButton href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          <HelpCircle size={20} />
          Entre em Contato
        </S.ContactButton>
      </S.HelpSection>
      <S.Background />
    </S.Container>
  );
};

export default FAQPage;

