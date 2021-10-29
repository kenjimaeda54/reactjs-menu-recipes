import React, { useState } from 'react';
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
  const [active, setActive] = useState(1);

  const handleActive = (id) => setActive(id);

  return (
    <Container>
      <ContainerBody>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle onClick={() => handleActive(1)}>
            <Title active={active === 1}> Inicio </Title>
            <Home active={active === 1} />
          </ContainerTitle>
        </Link>
        <Link
          to="/cadastro"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle onClick={() => handleActive(2)}>
            <Title active={active === 2}> Cadastro receita </Title>
            <Cadastre active={active === 2} aq />
          </ContainerTitle>
        </Link>
        <Link
          to="/votacao"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle onClick={() => handleActive(3)}>
            <Title active={active === 3}> Votação cardápio </Title>
            <Vote active={active === 3} />
          </ContainerTitle>
        </Link>
        <Link
          to="/editar"
          style={{
            textDecoration: 'none',
          }}
        >
          <ContainerTitle onClick={() => handleActive(4)}>
            <Title active={active === 4}> Edição cardápio </Title>
            <Edit active={active === 4} />
          </ContainerTitle>
        </Link>
      </ContainerBody>
    </Container>
  );
}
