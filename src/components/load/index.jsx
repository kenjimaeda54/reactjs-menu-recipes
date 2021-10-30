/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Spinner } from './styles';

export function Loading(props) {
  return (
    <Container>
      <Spinner height={props.height} />
    </Container>
  );
}
