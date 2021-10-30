import React, { Fragment, useState } from 'react';
import { Loading } from '../../components/load';
import { baseUrl } from '../../services';
import {
  Container,
  TitleCard,
  TextConfirmation,
  WrapSelect,
  TextLetter,
  ContainerTextConfirmation,
  ContainerOption,
  ContainerSelect,
  ButtonConfirmation,
  TextOption,
  Option,
  Select,
  Title,
  SubTitle,
  Description,
  Input,
  InputDescription,
  ContainerBody,
  ContainerCard,
  ButtonSubmit,
  ContainerLoading,
} from './styles';

export function Register() {
  const [havePhoto, setHavePhoto] = useState(false);
  const [photo, setPhoto] = useState('');
  const [haveTitle, setHaveTitle] = useState(false);
  const [title, setTitle] = useState('');
  const [haveDescription, setHaveDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleConfirm(id) {
    switch (id) {
      case 1:
        setHavePhoto(true);
        break;
      case 2:
        setHaveTitle(true);
        break;
      case 3:
        setHaveDescription(true);
        break;
      default:
        return;
    }
  }

  function handleConfirmation(state) {
    if (state) {
      setConfirmation(true);
      setHavePhoto(true);
      return;
    }
    setConfirmation(false);
    setHavePhoto(false);
  }

  async function handleNavigation() {
    try {
      setIsLoading(true);
      const url = baseUrl;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          link: photo,
          like: 0,
          dislike: 0,
          title: title,
          description: description,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setHavePhoto(false);
      setHaveTitle(false);
      setHaveDescription(false);
      setConfirmation(false);
      setPhoto('');
      setTitle('');
      setDescription('');
      setIsLoading(false);
      window.location.href = '/';
    }
  }

  return (
    <Container>
      <Title>Cadastre a receita</Title>
      <SubTitle>
        Aqui fara o cadastro das receitas, cada campo, clica em confirmar
      </SubTitle>
      <ContainerBody>
        <ContainerCard>
          {havePhoto ? (
            <Fragment>
              <img src={photo} width={150} height={100} />
              <TextConfirmation>A foto apareceu?</TextConfirmation>
              <ContainerTextConfirmation>
                <ContainerOption>
                  <TextOption>Nao</TextOption>
                  <ButtonConfirmation onClick={() => handleConfirmation(false)}>
                    <Option select={false} />
                  </ButtonConfirmation>
                </ContainerOption>
                <ContainerOption>
                  <TextOption>Sim</TextOption>
                  <ButtonConfirmation onClick={() => handleConfirmation(true)}>
                    <Option select={confirmation} />
                  </ButtonConfirmation>
                </ContainerOption>
              </ContainerTextConfirmation>
            </Fragment>
          ) : (
            <Fragment>
              <Input
                value={photo}
                placeholder="Coloque o link da foto"
                onChange={(e) => setPhoto(e.target.value)}
                maxLength={200}
              />
              <WrapSelect>
                <ContainerSelect
                  disabled={photo.length > 5 ? false : true}
                  onClick={() => handleConfirm(1)}
                  disable={photo.length > 5}
                >
                  <Select />
                </ContainerSelect>
                <TextLetter>Limite:{200 - photo.length}</TextLetter>
              </WrapSelect>
            </Fragment>
          )}
          {haveTitle ? (
            <Fragment>
              <TitleCard> {title}</TitleCard>
              <ContainerOption>
                <TextOption>Editar?</TextOption>
                <ButtonConfirmation onClick={() => setHaveTitle(false)}>
                  <Option select={false} />
                </ButtonConfirmation>
              </ContainerOption>
            </Fragment>
          ) : (
            <Fragment>
              <Input
                value={title}
                placeholder="Coloque o título"
                onChange={(e) => setTitle(e.target.value)}
                maxLength={50}
              />
              <WrapSelect>
                <ContainerSelect
                  disabled={title.length > 3 ? false : true}
                  disable={title.length > 3}
                  onClick={() => handleConfirm(2)}
                >
                  <Select />
                </ContainerSelect>
                <TextLetter>Limite:{50 - title.length}</TextLetter>
              </WrapSelect>
            </Fragment>
          )}
          {haveDescription ? (
            <Fragment>
              <Description>{description}</Description>
              <ContainerOption>
                <TextOption>Editar?</TextOption>
                <ButtonConfirmation onClick={() => setHaveDescription(false)}>
                  <Option select={false} />
                </ButtonConfirmation>
              </ContainerOption>
            </Fragment>
          ) : (
            <Fragment>
              <InputDescription
                placeholder="Coloque a descrição"
                value={description}
                rows={7}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={700}
              />
              <WrapSelect>
                <ContainerSelect
                  disabled={description.length > 7 ? false : true}
                  disable={description.length > 7}
                  onClick={() => handleConfirm(3)}
                >
                  <Select />
                </ContainerSelect>
                <TextLetter>Limite:{700 - description.length}</TextLetter>
              </WrapSelect>
            </Fragment>
          )}
          {isLoading ? (
            <ContainerLoading>
              <Loading height={50} />
            </ContainerLoading>
          ) : (
            <ButtonSubmit
              onClick={handleNavigation}
              disabled={
                havePhoto && haveTitle && haveDescription && confirmation
                  ? false
                  : true
              }
              haveField={
                havePhoto && haveTitle && haveDescription && confirmation
              }
            >
              Cadastrar
            </ButtonSubmit>
          )}
        </ContainerCard>
      </ContainerBody>
    </Container>
  );
}
