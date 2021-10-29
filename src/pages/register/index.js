import React, { useState } from 'react';
import {
  Container,
  Photo,
  TitleCard,
  ContainerSelect,
  Select,
  Title,
  SubTitle,
  Description,
  Input,
  InputDescription,
  ContainerBody,
  ContainerCard,
} from './styles';

export function Register() {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [havePhoto, setHavePhoto] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [haveTitle, setHaveTitle] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [haveDescription, setHaveDescription] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [haveDate, setHaveDate] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [haveHours, setHaveHours] = useState(false);
  // eslint-disable-next-line no-unused-vars

  return (
    <Container>
      <Title>Cardapios do dia</Title>
      <SubTitle>
        Aqui fara o cadastro das receitas,cada campo clica em confirmar
      </SubTitle>
      <ContainerBody>
        <ContainerCard>
          {havePhoto ? (
            <Photo src="" width={150} height={100} />
          ) : (
            <Input placeholder="Coloque o link da foto" />
          )}
          <ContainerSelect>
            <Select />
          </ContainerSelect>
          {haveTitle ? (
            <TitleCard> Pudim</TitleCard>
          ) : (
            <Input placeholder="Coloque o título" />
          )}
          <ContainerSelect>
            <Select />
          </ContainerSelect>
          {haveDescription ? (
            <Description>Pudim com leite condessado</Description>
          ) : (
            <InputDescription placeholder="Coloque a descrição" rows={5} />
          )}
          <ContainerSelect>
            <Select />
          </ContainerSelect>
        </ContainerCard>
      </ContainerBody>
    </Container>
  );
}
