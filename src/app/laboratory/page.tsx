"use client";

import React from "react";
import * as S from "./styles";
import { Phone, Mail, MapPin } from 'lucide-react';

const parceiros = [
  {
    nome: "BioLab Manipulações",
    descricao: "Especializada em fórmulas personalizadas para tratamentos dermatológicos e hormonais.",
    contato: {
      telefone: "(11) 1234-5678",
      email: "contato@biolab.com",
      endereco: "Rua das Flores, 123 - São Paulo, SP"
    }
  },
  {
    nome: "PharmaTech",
    descricao: "Líder em medicamentos manipulados para pediatria e geriatria, com foco em fórmulas de fácil administração.",
    contato: {
      telefone: "(11) 2345-6789",
      email: "atendimento@pharmatech.com",
      endereco: "Av. Paulista, 1000 - São Paulo, SP"
    }
  },
  {
    nome: "NutriFormula",
    descricao: "Especializada em suplementos nutricionais personalizados e fórmulas para atletas de alto rendimento.",
    contato: {
      telefone: "(11) 3456-7890",
      email: "info@nutriformula.com",
      endereco: "Rua dos Esportes, 500 - São Paulo, SP"
    }
  }
];

const LaboratorioPage: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Laboratório de Manipulação</S.Title>
      <S.Description>
        Nossa farmácia tem orgulho de trabalhar em parceria com os melhores laboratórios de manipulação, 
        oferecendo medicamentos personalizados de alta qualidade para atender às necessidades específicas 
        de cada paciente. Conheça nossos parceiros:
      </S.Description>
      
      {parceiros.map((parceiro, index) => (
        <S.PartnerCard key={index}>
          <S.PartnerName>{parceiro.nome}</S.PartnerName>
          <S.PartnerDescription>{parceiro.descricao}</S.PartnerDescription>
          <S.ContactInfo>
            <S.ContactItem>
              <Phone size={16} />
              <span>{parceiro.contato.telefone}</span>
            </S.ContactItem>
            <S.ContactItem>
              <Mail size={16} />
              <span>{parceiro.contato.email}</span>
            </S.ContactItem>
            <S.ContactItem>
              <MapPin size={16} />
              <span>{parceiro.contato.endereco}</span>
            </S.ContactItem>
          </S.ContactInfo>
        </S.PartnerCard>
      ))}

      <S.InfoSection>
        <S.InfoTitle>Como funciona?</S.InfoTitle>
        <S.InfoText>
          1. Consulte seu médico e obtenha uma prescrição para medicamento manipulado.
          <br />
          2. Traga sua receita à nossa farmácia ou envie-a por e-mail.
          <br />
          3. Nossos farmacêuticos entrarão em contato com o laboratório parceiro mais adequado.
          <br />
          4. O medicamento será preparado e estará disponível para retirada em nossa farmácia em 2-5 dias úteis.
        </S.InfoText>
      </S.InfoSection>

    </S.Container>
  );
};

export default LaboratorioPage;

