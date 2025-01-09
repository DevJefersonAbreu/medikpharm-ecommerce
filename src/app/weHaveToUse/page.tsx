"use client";

import React, { useState } from 'react';
import * as S from './styles';
import { Book, ShieldCheck, UserCheck, Scale, AlertTriangle, HelpCircle, RefreshCw } from 'lucide-react';

const TermsOfUsePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'aceitacao', title: 'Aceitação dos Termos', icon: Book },
    { id: 'uso', title: 'Uso do Serviço', icon: ShieldCheck },
    { id: 'conta', title: 'Sua Conta', icon: UserCheck },
    { id: 'conteudo', title: 'Conteúdo do Usuário', icon: Scale },
    { id: 'propriedade', title: 'Propriedade Intelectual', icon: AlertTriangle },
    { id: 'responsabilidade', title: 'Limitação de Responsabilidade', icon: HelpCircle },
    { id: 'modificacoes', title: 'Modificações nos Termos', icon: RefreshCw },
  ];

  const content = {
    aceitacao: "Ao usar nossos serviços, você concorda com estes termos. Por favor, leia-os cuidadosamente.",
    uso: "Nossos serviços devem ser usados apenas para fins legais e de acordo com estes termos.",
    conta: "Você é responsável por manter a segurança de sua conta e senha.",
    conteudo: "Você mantém os direitos sobre qualquer conteúdo que enviar, postar ou exibir em nossos serviços.",
    propriedade: "Nosso conteúdo e marcas são protegidos por direitos autorais e outras leis de propriedade intelectual.",
    responsabilidade: "Não somos responsáveis por quaisquer danos indiretos, incidentais ou consequentes.",
    modificacoes: "Podemos modificar estes termos ou quaisquer termos adicionais que se apliquem a um serviço.",
  };

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <S.Container>
      <S.Title id="top">Termos de Uso</S.Title>
      <S.Content>
        <S.Navigation>
          {sections.map((section) => (
            <S.NavItem
              key={section.id}
              onClick={() => toggleSection(section.id)}
              $active={activeSection === section.id}
            >
              <section.icon size={24} />
              {section.title}
            </S.NavItem>
          ))}
        </S.Navigation>
        <S.TermsContent>
          {activeSection ? (
            <S.Card>
              <S.CardTitle>
                {sections.find(s => s.id === activeSection)?.title}
              </S.CardTitle>
              <S.CardContent>
                {content[activeSection as keyof typeof content]}
              </S.CardContent>
            </S.Card>
          ) : (
            <S.DefaultContent>
              Selecione uma seção para ver mais detalhes sobre nossos termos de uso.
            </S.DefaultContent>
          )}
        </S.TermsContent>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default TermsOfUsePage;

