import styled from "styled-components";

// Estilos para o Badge
export const Badge = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // Adiciona uma classe personalizada, caso a className seja fornecida
  &.custom {
    background-color: #28a745;
    color: #ffffff;
  }
`;
