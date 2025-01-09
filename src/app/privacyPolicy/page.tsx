"use client";

import React, { useState } from 'react';
import * as S from './styles';
import { Pill, VolumeIcon as Vial, Shield, Eye, UserCheck, Server, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'coleta', title: 'Coleta de Dados', icon: Vial },
    { id: 'uso', title: 'Uso de Informações', icon: Pill },
    { id: 'protecao', title: 'Proteção de Dados', icon: Shield },
    { id: 'cookies', title: 'Política de Cookies', icon: Eye },
    { id: 'direitos', title: 'Seus Direitos', icon: UserCheck },
    { id: 'armazenamento', title: 'Armazenamento', icon: Server },
    { id: 'atualizacoes', title: 'Atualizações', icon: AlertTriangle },
  ];

  const content = {
    coleta: "Coletamos informações pessoais como nome, endereço, e-mail e histórico de compras para melhorar nossos serviços e sua experiência de compra.",
    uso: "Utilizamos suas informações para processar pedidos, personalizar ofertas e melhorar nossos produtos e serviços farmacêuticos.",
    protecao: "Implementamos medidas de segurança avançadas para proteger suas informações pessoais e dados de saúde contra acesso não autorizado.",
    cookies: "Usamos cookies para melhorar a navegação, personalizar conteúdo e analisar o tráfego do site. Você pode gerenciar as preferências de cookies nas configurações do seu navegador.",
    direitos: "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.",
    armazenamento: "Seus dados são armazenados em servidores seguros e são mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados.",
    atualizacoes: "Esta política pode ser atualizada periodicamente. Recomendamos que você revise regularmente para se manter informado sobre como protegemos suas informações.",
  };

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <S.Container>
      <S.Title id="top">Política de Privacidade</S.Title>
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
        <S.PolicyContent>
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
              Selecione uma seção para ver mais detalhes sobre nossa política de privacidade.
            </S.DefaultContent>
          )}
        </S.PolicyContent>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default PrivacyPolicyPage;

