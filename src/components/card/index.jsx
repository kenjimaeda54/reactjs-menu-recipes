/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Title,
  Description,
  ContainerDate,
  Date,
  Hours,
  ContainerVoting,
  ContainerQuantityLike,
  Quantity,
  Like,
  ContainerQuantityDislike,
  Dislike,
  Button,
} from './styles';

export function CardRecipe(props) {
  return (
    <Container>
      <img src={props.photo} width={150} height={100} />
      <Title> {props.title}</Title>
      <Description>{props.description}</Description>
      <ContainerDate>
        <Date>{props.date}</Date>
        <Hours>{props.hours}</Hours>
      </ContainerDate>
      {props.haveButton ? (
        <ContainerVoting>
          <Button>
            <ContainerQuantityLike>
              <Quantity>{props.like}</Quantity>
              <Like />
            </ContainerQuantityLike>
          </Button>
          <Button>
            <ContainerQuantityDislike>
              <Quantity>{props.dislike}</Quantity>
              <Dislike />
            </ContainerQuantityDislike>
          </Button>
        </ContainerVoting>
      ) : (
        <ContainerVoting>
          <ContainerQuantityLike>
            <Quantity>{props.like}</Quantity>
            <Like />
          </ContainerQuantityLike>
          <ContainerQuantityDislike>
            <Quantity>{props.dislike}</Quantity>
            <Dislike />
          </ContainerQuantityDislike>
        </ContainerVoting>
      )}
    </Container>
  );
}
