import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle>
            <Title> Inicio </Title>
            <Home />
          </ContainerTitle>
        </Link>
        <Link
          to="/cadastro"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle>
            <Title>Cadastros</Title>
            <Cadastre />
          </ContainerTitle>
        </Link>
        <Link
          to="/votacao"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle>
            <Title> Votação cardápio </Title>
            <Vote />
          </ContainerTitle>
        </Link>
        <Link
          to="/editar"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle>
            <Title> Edição cardápio </Title>
            <Edit />
          </ContainerTitle>
        </Link>
      </ContainerBody>
    </Container>
  );
}
