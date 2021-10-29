import React, { Fragment, useState } from 'react';
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
} from './styles';

export function Register() {
  const [havePhoto, setHavePhoto] = useState(false);
  const [photo, setPhoto] = useState('');
  const [haveTitle, setHaveTitle] = useState(false);
  const [title, setTitle] = useState('');
  const [haveDescription, setHaveDescription] = useState(false);
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [confirmation, setConfirmation] = useState(false);

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
                <TextLetter>Faltam:{200 - title.length}</TextLetter>
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
                <TextLetter>Faltam:{50 - title.length}</TextLetter>
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
                <TextLetter>Faltam:{700 - title.length}</TextLetter>
              </WrapSelect>
            </Fragment>
          )}
          <ButtonSubmit
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
        </ContainerCard>
      </ContainerBody>
    </Container>
  );
}
