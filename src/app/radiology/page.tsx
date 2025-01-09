"use client";

import React from "react";
import * as S from "./styles";
import { Phone, Mail, MapPin } from 'lucide-react';

const parceiros = [
  {
    nome: "Centro de Diagnóstico por Imagem",
    descricao: "Oferece uma ampla gama de exames de imagem, incluindo raios-X, tomografia computadorizada e ressonância magnética.",
    contato: {
      telefone: "(11) 2345-6789",
      email: "agendamento@cdi.com",
      endereco: "Av. da Saúde, 500 - São Paulo, SP"
    },
    especialidades: ["Raios-X", "Tomografia Computadorizada", "Ressonância Magnética"]
  },
  {
    nome: "Clínica RadiMed",
    descricao: "Especializada em radiologia odontológica e exames de ultrassonografia.",
    contato: {
      telefone: "(11) 3456-7890",
      email: "contato@radimed.com",
      endereco: "Rua dos Sorrisos, 123 - São Paulo, SP"
    },
    especialidades: ["Radiologia Odontológica", "Ultrassonografia"]
  },
  {
    nome: "Instituto de Radiologia Avançada",
    descricao: "Centro de excelência em radiologia intervencionista e exames de alta complexidade.",
    contato: {
      telefone: "(11) 4567-8901",
      email: "info@iradiologia.com",
      endereco: "Av. Tecnológica, 1000 - São Paulo, SP"
    },
    especialidades: ["Radiologia Intervencionista", "PET-CT", "Angiografia"]
  }
];

const RadiologiaPage: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Serviços de Radiologia</S.Title>
      <S.Description>
        Nossa farmácia tem o prazer de trabalhar em parceria com renomadas clínicas de radiologia, 
        oferecendo acesso facilitado a uma variedade de exames de imagem. Conheça nossos parceiros 
        e os serviços disponíveis:
      </S.Description>
      
      {parceiros.map((parceiro, index) => (
        <S.PartnerCard key={index}>
          <S.PartnerName>{parceiro.nome}</S.PartnerName>
          <S.PartnerDescription>{parceiro.descricao}</S.PartnerDescription>
          <S.SpecialtiesList>
            {parceiro.especialidades.map((esp, i) => (
              <S.SpecialtyItem key={i}>{esp}</S.SpecialtyItem>
            ))}
          </S.SpecialtiesList>
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
          1. Obtenha um pedido médico para o exame de imagem necessário.
          <br />
          2. Entre em contato com nossa farmácia ou diretamente com a clínica parceira de sua preferência.
          <br />
          3. Agende seu exame na data e horário mais convenientes.
          <br />
          4. Compareça à clínica na data agendada, levando o pedido médico e documentos pessoais.
          <br />
          5. Retire o resultado do exame na clínica ou, se disponível, acesse-o online.
        </S.InfoText>
      </S.InfoSection>

    </S.Container>
  );
};

export default RadiologiaPage;

