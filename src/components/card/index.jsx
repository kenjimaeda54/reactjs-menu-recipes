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

export function CardRecipe({
  title,
  photo,
  description,
  date,
  hours,
  like,
  dislike,
  haveButton,
}) {
  return (
    <Container>
      <img src={photo} width={150} height={100} />
      <Title> {title}</Title>
      <Description>{description}</Description>
      <ContainerDate>
        <Date>{date}</Date>
        <Hours>{hours}</Hours>
      </ContainerDate>
      {haveButton ? (
        <ContainerVoting>
          <Button>
            <ContainerQuantityLike>
              <Quantity>{like}</Quantity>
              <Like />
            </ContainerQuantityLike>
          </Button>
          <Button>
            <ContainerQuantityDislike>
              <Quantity>{dislike}</Quantity>
              <Dislike />
            </ContainerQuantityDislike>
          </Button>
        </ContainerVoting>
      ) : (
        <ContainerVoting>
          <ContainerQuantityLike>
            <Quantity>{like}</Quantity>
            <Like />
          </ContainerQuantityLike>
          <ContainerQuantityDislike>
            <Quantity>{dislike}</Quantity>
            <Dislike />
          </ContainerQuantityDislike>
        </ContainerVoting>
      )}
    </Container>
  );
}
