import React, { Fragment, useEffect, useRef, useState } from 'react';
import { baseUrl } from '../../services';
import { Loading } from '../../components/load';
import {
  ContainerLoading,
  Container,
  TitleCard,
  Card,
  ContainerOption,
  ContainerSelect,
  WrapSelect,
  TextLetter,
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
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const refPhoto = useRef(null);
  const [editPhoto, setEdiPhoto] = useState(false);
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editTitle, setEdiTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editDescription, setEditDescription] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectId, setSelectId] = useState(0);
  const [recipesUpdate, setRecipesUpdate] = useState([]);
  let repeated = 0;

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

  function handleConfirm(state) {
    switch (state) {
      case 1:
        setEdiPhoto(false);
        refPhoto.current?.focus();
        break;
      case 2:
        setEdiTitle(false);
        refTitle.current?.focus();
        break;
      case 3:
        setEditDescription(false);
        refDescription.current?.focus();
        break;
      default:
        return;
    }
  }

  function handleStatus(state, id) {
    setSelectId(id);
    switch (state) {
      case 'photo':
        setEdiPhoto(true);
        break;
      case 'title':
        setEdiTitle(true);
        break;
      case 'description':
        setEditDescription(true);
        break;
      default:
        return;
    }
  }

  //field PHoto
  function handleChangePhoto(text) {
    setPhoto(text.target.value);
  }

  const handleFocusPhoto = (value) => {
    const getPhoto = recipesUpdate.find((it) => it.id === selectId);
    if (photo.length === 0) {
      setPhoto(value);
    } else if (getPhoto) {
      const { link } = getPhoto;
      setPhoto(link);
    } else {
      setPhoto(value);
    }
  };

  function handleBlurPhoto() {
    const fieldPhoto = recipes.find((item) => item.id === selectId).link;
    if (fieldPhoto !== photo) {
      const getRecipes = recipes.filter((item) => {
        if (item.id === selectId) {
          return (item.link = photo);
        }
      });
      setRecipesUpdate((old) => [...old, ...getRecipes]);
    }
  }

  //--------------
  //filed title
  function handleFocusTitle(text) {
    const getTitle = recipesUpdate.find((it) => it.id === selectId);
    if (title.length === 0) {
      setTitle(text);
    } else if (getTitle) {
      const { title } = getTitle;
      setTitle(title);
    } else {
      setTitle(text);
    }
  }

  function handleBlurTitle() {
    const fieldTitle = recipes.find((item) => item.id === selectId).title;
    if (fieldTitle !== title) {
      const getRecipes = recipes.filter((item) => {
        if (item.id === selectId) {
          return (item.title = title);
        }
      });
      setRecipesUpdate((old) => [...old, ...getRecipes]);
    }
  }

  function handleTitle(text) {
    setTitle(text.target.value);
  }

  //-----------------
  //field description

  function handleFocusDescription(value) {
    const getDescription = recipesUpdate.find((it) => it.id === selectId);
    if (description.length === 0) {
      setDescription(value);
    } else if (getDescription) {
      const { description } = getDescription;
      setDescription(description);
    } else {
      setDescription(value);
    }
  }

  function handleDescription(text) {
    setDescription(text.target.value);
  }

  function handleBlurDescription() {
    const fieldDescription = recipes.find(
      (item) => item.id === selectId,
    ).description;
    if (description !== fieldDescription) {
      const getRecipes = recipes.filter((item) => {
        if (item.id === selectId) {
          return (item.description = description);
        }
      });
      setRecipesUpdate((old) => [...old, ...getRecipes]);
    }
  }

  function handleSubmit() {
    setIsLoading(true);
    async function updateRecipes(recipe) {
      try {
        repeated += 1;
        await fetch(`${baseUrl}/${recipe.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipe),
        });
      } catch (error) {
        console.log(error);
      }
    }

    const timer = setInterval(() => {
      if (repeated === recipesUpdate.length) {
        window.location = '/';
        setIsLoading(false);
        setRecipesUpdate([]);
        setRecipes([]);
        clearInterval(timer);
        repeated = 0;
        return;
      }
      recipesUpdate.map((item) => {
        const recipes = {
          like: item.like,
          dislike: item.dislike,
          id: item.id,
          title: item.title,
          description: item.description,
          link: item.link,
        };
        updateRecipes(recipes);
      });
    }, 1000);
  }

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
                  {editPhoto && recipe.id === selectId ? (
                    <Fragment>
                      <Input
                        ref={refPhoto}
                        autoFocus
                        value={selectId === recipe.id ? photo : recipe.link}
                        placeholder="Coloque o link da foto"
                        onChange={(e) => handleChangePhoto(e)}
                        onFocus={() => handleFocusPhoto(recipe.link)}
                        onBlur={() => handleBlurPhoto()}
                        maxLength={200}
                      />
                      <WrapSelect>
                        <ContainerSelect onClick={() => handleConfirm(1)}>
                          <Select />
                        </ContainerSelect>
                        <TextLetter>Faltam:{200}</TextLetter>
                      </WrapSelect>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <img
                        src={
                          recipe.id === selectId && photo.length > 0
                            ? photo
                            : recipe.link
                        }
                        width={150}
                        height={100}
                      />
                      <ContainerOption>
                        <TextOption>Editar?</TextOption>
                        <ButtonConfirmation
                          onClick={() => handleStatus('photo', recipe.id)}
                        >
                          <Option select={false} />
                        </ButtonConfirmation>
                      </ContainerOption>
                    </Fragment>
                  )}
                  {editTitle && selectId === recipe.id ? (
                    <Fragment>
                      <Input
                        autoFocus
                        value={recipe.id === selectId ? title : recipe.title}
                        placeholder={recipe.title}
                        onChange={(e) => handleTitle(e)}
                        onBlur={() => handleBlurTitle()}
                        onFocus={() => handleFocusTitle(recipe.title)}
                        ref={refTitle}
                        maxLength={60}
                      />
                      <WrapSelect>
                        <ContainerSelect onClick={() => handleConfirm(2)}>
                          <Select />
                        </ContainerSelect>
                        <TextLetter>Faltam:{60 - title.length}</TextLetter>
                      </WrapSelect>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <TitleCard>
                        {recipe.id === selectId && title.length > 0
                          ? title
                          : recipe.title}
                      </TitleCard>
                      <ContainerOption>
                        <TextOption>Editar?</TextOption>
                        <ButtonConfirmation
                          onClick={() => handleStatus('title', recipe.id)}
                        >
                          <Option select={false} />
                        </ButtonConfirmation>
                      </ContainerOption>
                    </Fragment>
                  )}
                  {editDescription && selectId === recipe.id ? (
                    <Fragment>
                      <InputDescription
                        ref={refDescription}
                        autoFocus
                        placeholder={recipes.description}
                        value={
                          recipe.id === selectId
                            ? description
                            : recipe.description
                        }
                        rows={7}
                        onChange={(e) => handleDescription(e)}
                        onBlur={() => handleBlurDescription()}
                        onFocus={() =>
                          handleFocusDescription(recipe.description)
                        }
                        maxLength={700}
                      />
                      <WrapSelect>
                        <ContainerSelect onClick={() => handleConfirm(3)}>
                          <Select />
                        </ContainerSelect>
                        <TextLetter>
                          Faltam:{700 - description.length}
                        </TextLetter>
                      </WrapSelect>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Description>
                        {recipe.id === selectId && description.length > 0
                          ? description
                          : recipe.description}
                      </Description>
                      <ContainerOption>
                        <TextOption>Editar?</TextOption>
                        <ButtonConfirmation
                          onClick={() => handleStatus('description', recipe.id)}
                        >
                          <Option select={false} />
                        </ButtonConfirmation>
                      </ContainerOption>
                    </Fragment>
                  )}
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
