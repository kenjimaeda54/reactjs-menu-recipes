import React, { Fragment, useEffect, useState } from 'react';
import { baseUrl } from '../../services';
import { Loading } from '../../components/load';
import {
  ContainerLoading,
  Container,
  TitleCard,
  Card,
  ContainerOption,
  // ContainerSelect,
  // WrapSelect,
  // TextLetter,
  ButtonConfirmation,
  TextOption,
  Option,
  // Select,
  Title,
  SubTitle,
  Description,
  // Input,
  // InputDescription,
  ContainerBody,
  ContainerCard,
  ButtonSubmit,
} from './styles';

export function EditRecipe() {
  const descripitonNew =
    'Em uma batedeira, bata as claras em neveJunte as gemas, uma a uma, e acrescente o açúcar.Despeje o Leite NINHO aos poucos, sem parar de bater. Incorpore delicadamente a farinha peneirada com o Chocolate em Pó DOIS FRADES e o fermento.Despeje em uma forma redonda (28 cm de diâmetro) untada com manteiga e polvilhada com farinha de trigo e leve para assar em forno médio-alto (200ºC), preaquecido, por cerca de 40 minutos.Desenforme, deixe esfriar e corte-o ao meio.stante do brigadeiro com uma espátula ou faca nas laterais e superfície do bolo. Finalize com o chocolate granulado';
  const [editPhoto, setEdiPhoto] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [photo, setPhoto] = useState(
    'https://img.itdg.com.br/tdg/images/recipes/000/062/547/318292/318292_original.jpg?w=1200',
  );
  const [editTitle, setEdiTitle] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState('bolo de chocolate');
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [editDescription, setEditDescription] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState(descripitonNew);
  // eslint-disable-next-line no-unused-vars
  const [confirmation, setConfirmation] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const controle = new AbortController();
    async function load() {
      try {
        const url = baseUrl;
        const response = await fetch(url, { signal: controle.signal });
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
        alert('Problema com api');
      } finally {
        setIsLoading(false);
      }
    }
    load();

    return () => {
      controle.abort();
    };
  }, []);

  // function handleConfirm(id) {
  //   switch (id) {
  //     case 1:
  //       setEdiPhoto(false);
  //       break;
  //     case 2:
  //       setEdiTitle(false);
  //       break;
  //     case 3:
  //       setEditDescription(false);
  //       break;
  //     default:
  //       return;
  //   }
  // }

  function handleSubmit() {
    console.log(editPhoto, editTitle, editDescription);
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
    <Fragment>
      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Container>
          <Title>Cadastre a receita</Title>
          <SubTitle>
            Aqui fara o cadastro das receitas, cada campo, clica em confirmar
          </SubTitle>
          <ContainerBody>
            <ContainerCard>
              {recipes.map((recipe) => (
                <Card key={recipe.id}>
                  <img src={recipe.link} width={150} height={100} />
                  <ContainerOption>
                    <TextOption>Editar?</TextOption>
                    <ButtonConfirmation onClick={() => setEdiPhoto(true)}>
                      <Option select={false} />
                    </ButtonConfirmation>
                  </ContainerOption>
                  <TitleCard> {recipe.title}</TitleCard>
                  <ContainerOption>
                    <TextOption>Editar?</TextOption>
                    <ButtonConfirmation onClick={() => setEdiTitle(true)}>
                      <Option select={false} />
                    </ButtonConfirmation>
                  </ContainerOption>
                  <Description>{recipe.description}</Description>
                  <ContainerOption>
                    <TextOption>Editar?</TextOption>
                    <ButtonConfirmation
                      onClick={() => setEditDescription(true)}
                    >
                      <Option select={false} />
                    </ButtonConfirmation>
                  </ContainerOption>
                </Card>
              ))}
              <ButtonSubmit
                onClick={handleSubmit}
                disabled={
                  !editDescription && !editTitle && !editPhoto ? false : true
                }
                haveField={!editDescription && !editTitle && !editPhoto}
              >
                Salvar alterações
              </ButtonSubmit>
            </ContainerCard>
          </ContainerBody>
        </Container>
      )}
    </Fragment>
  );
}
