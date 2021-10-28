import React from 'react';
import { Aside } from '../aside';
import { Footer } from '../footer';
import { Section } from '../section';
import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  return (
    <Container>
      <Aside />
      <Section>{children}</Section>
      <Footer />
    </Container>
  );
}
