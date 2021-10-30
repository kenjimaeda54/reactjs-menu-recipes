/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
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
  photo,
  title,
  description,
  date,
  hours,
  like,
  dislike,
  haveButton,
  addLike,
  addDislike,
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
          <Button onClick={addLike}>
            <ContainerQuantityLike>
              <Fragment>
                <Quantity>{like}</Quantity>
                <Like />
              </Fragment>
            </ContainerQuantityLike>
          </Button>
          <Button onClick={addDislike}>
            <ContainerQuantityDislike>
              <Fragment>
                <Quantity>{dislike}</Quantity>
                <Dislike />
              </Fragment>
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
