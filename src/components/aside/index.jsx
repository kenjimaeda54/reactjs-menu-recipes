import React from 'react';
import {
  Container,
  ContainerBody,
  ContainerTitle,
  Title,
  Home,
  Cadastre,
  Vote,
  Edit,
} from './styles';

export function Aside() {
  return (
    <Container>
      <ContainerBody>
        <ContainerTitle>
          <Title> Inicio </Title>
          <Home />
        </ContainerTitle>
        <ContainerTitle>
          <Title> Cadastro receita </Title>
          <Cadastre />
        </ContainerTitle>
        <ContainerTitle>
          <Title> Votação cardápio </Title>
          <Vote />
        </ContainerTitle>
        <ContainerTitle>
          <Title> Edição cardápio </Title>
          <Edit />
        </ContainerTitle>
      </ContainerBody>
    </Container>
  );
}
