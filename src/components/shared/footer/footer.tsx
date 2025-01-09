"use client";

import React from "react";
import * as S from "./styles";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <S.Title>Sobre Nós</S.Title>
          <S.Text>
            Somos uma farmácia comprometida com a saúde e bem-estar dos nossos clientes,
            oferecendo produtos de qualidade e atendimento especializado.
          </S.Text>
        </S.Section>

        <S.Section>
          <S.Title>Contato</S.Title>
          <S.ContactItem>
            <Phone size={16} />
            <span>(11) 1234-5678</span>
          </S.ContactItem>
          <S.ContactItem>
            <Mail size={16} />
            <span>contato@farmacia.com.br</span>
          </S.ContactItem>
          <S.ContactItem>
            <MapPin size={16} />
            <span>Rua da Saúde, 123 - São Paulo</span>
          </S.ContactItem>
        </S.Section>

        <S.Section>
          <S.Title>Links Úteis</S.Title>
          <Link href="/politica-de-privacidade#top" passHref>
            <S.Link>Política de Privacidade</S.Link>
          </Link>
          <Link href="/termos-de-uso#top" passHref>
            <S.Link>Termos de Uso</S.Link>
          </Link>
          <Link href="/faq#top" passHref>
            <S.Link>FAQ</S.Link>
          </Link>
        </S.Section>

        <S.Section>
          <S.Title>Redes Sociais</S.Title>
          <S.SocialLinks>
            <S.SocialLink href="https://www.facebook.com/medikpharm" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </S.SocialLink>
            <S.SocialLink href="https://www.instagram.com/medikpharm" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </S.SocialLink>
            <S.SocialLink href="https://www.twitter.com/medikpharm" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </S.SocialLink>
          </S.SocialLinks>
        </S.Section>
      </S.Content>

      <S.Bottom>
        <S.Copyright>
          © {new Date().getFullYear()} MedikPharm. Todos os direitos reservados.
        </S.Copyright>
      </S.Bottom>
    </S.Container>
  );
};

export default Footer;

