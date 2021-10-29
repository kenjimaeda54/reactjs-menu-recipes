import React, { Fragment, useState } from 'react';
import {
  Container,
  TitleCard,
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

export function EditRecipe() {
  const descripitonNew =
    'Em uma batedeira, bata as claras em neveJunte as gemas, uma a uma, e acrescente o açúcar.Despeje o Leite NINHO aos poucos, sem parar de bater. Incorpore delicadamente a farinha peneirada com o Chocolate em Pó DOIS FRADES e o fermento.Despeje em uma forma redonda (28 cm de diâmetro) untada com manteiga e polvilhada com farinha de trigo e leve para assar em forno médio-alto (200ºC), preaquecido, por cerca de 40 minutos.Desenforme, deixe esfriar e corte-o ao meio.stante do brigadeiro com uma espátula ou faca nas laterais e superfície do bolo. Finalize com o chocolate granulado';
  const [havePhoto, setHavePhoto] = useState(false);
  const [photo, setPhoto] = useState(
    'https://img.itdg.com.br/tdg/images/recipes/000/062/547/318292/318292_original.jpg?w=1200',
  );
  const [haveTitle, setHaveTitle] = useState(false);
  const [title, setTitle] = useState('bolo de cholate');
  const [haveDescription, setHaveDescription] = useState(false);
  const [description, setDescription] = useState(descripitonNew);
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

  // function handleConfirmation(state) {
  //   if (state) {
  //     setConfirmation(true);
  //     setHavePhoto(true);
  //     return;
  //   }
  //   setConfirmation(false);
  //   setHavePhoto(false);
  // }

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
              <Input
                value={photo}
                placeholder="Coloque o link da foto"
                onChange={(e) => setPhoto(e.target.value)}
              />
              <ContainerSelect
                disabled={photo.length > 5 ? false : true}
                onClick={() => handleConfirm(1)}
                disable={photo.length > 5}
              >
                <Select />
              </ContainerSelect>
            </Fragment>
          ) : (
            <Fragment>
              <img src={photo} width={150} height={100} />
              <ContainerOption>
                <TextOption>Editar?</TextOption>
                <ButtonConfirmation onClick={() => setHavePhoto(false)}>
                  <Option select={false} />
                </ButtonConfirmation>
              </ContainerOption>
            </Fragment>
          )}
          {haveTitle ? (
            <Fragment>
              <Input
                value={title}
                placeholder="Coloque o título"
                onChange={(e) => setTitle(e.target.value)}
              />
              <ContainerSelect
                disabled={title.length > 3 ? false : true}
                disable={title.length > 3}
                onClick={() => handleConfirm(2)}
              >
                <Select />
              </ContainerSelect>
            </Fragment>
          ) : (
            <Fragment>
              <TitleCard> {title}</TitleCard>
              <ContainerOption>
                <TextOption>Editar?</TextOption>
                <ButtonConfirmation onClick={() => setHaveTitle(false)}>
                  <Option select={false} />
                </ButtonConfirmation>
              </ContainerOption>
            </Fragment>
          )}
          {haveDescription ? (
            <Fragment>
              <InputDescription
                placeholder="Coloque a descrição"
                value={description}
                rows={7}
                onChange={(e) => setDescription(e.target.value)}
              />
              <ContainerSelect
                disabled={description.length > 7 ? false : true}
                disable={description.length > 7}
                onClick={() => handleConfirm(3)}
              >
                <Select />
              </ContainerSelect>
            </Fragment>
          ) : (
            <Fragment>
              <Description>{description}</Description>
              <ContainerOption>
                <TextOption>Editar?</TextOption>
                <ButtonConfirmation onClick={() => setHaveDescription(false)}>
                  <Option select={false} />
                </ButtonConfirmation>
              </ContainerOption>
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
            Salvar alterações
          </ButtonSubmit>
        </ContainerCard>
      </ContainerBody>
    </Container>
  );
}
