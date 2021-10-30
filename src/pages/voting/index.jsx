import React, { useEffect, useState, Fragment } from 'react';
import { CardRecipe } from '../../components/card';
import { baseUrl } from '../../services';
import { Loading } from '../../components/load';
import {
  Container,
  Title,
  ContainerCard,
  SubTitle,
  ContainerLoading,
} from './styles';

export function Voting() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [idRecipes, setIdRecipes] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [like, setLike] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [dislike, setDislike] = useState(0);
  const [recipesUpdate, setRecipesUpdate] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function getRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        setMounted(true);
      }
    }
    if (!mounted) {
      getRecipes();
    }
    return () => {
      controller.abort();
      setIsLoading(false);
      console.log('desmontou');
    };
  }, [recipes]);

  function handleAddLike(id, like, dislike) {
    const recipes = {
      id: id,
      like: (like += 1),
      dislike: dislike,
    };
    if (recipesUpdate.length !== 0) {
      const haveId = recipesUpdate.find((item) => item.id === id);
      if (haveId) {
        setRecipesUpdate(
          recipesUpdate.filter((item) => {
            if (item.id === id) {
              return (item.like += 1);
            }
            return item;
          }),
        );
        return;
      }
    }
    setRecipesUpdate((old) => [...old, recipes]);
  }
  function handleAddDislike(id, like, dislike) {
    const recipes = {
      id: id,
      like: like,
      dislike: (dislike += 1),
    };
    if (recipesUpdate.length !== 0) {
      const haveId = recipesUpdate.find((item) => item.id === id);
      if (haveId) {
        setRecipesUpdate(
          recipesUpdate.filter((it) => {
            if (it.id === id) {
              return (it.dislike += 1);
            }
            return it;
          }),
        );
        return;
      }
    }
    setRecipesUpdate((old) => [...old, recipes]);
  }

  return (
    <Fragment>
      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Container>
          <Title>Votação do cardápio</Title>
          <SubTitle>Clica no ícone de like e dislike para votar</SubTitle>
          <ContainerCard>
            {recipes.map((recipe) => (
              <CardRecipe
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                photo={recipe.link}
                date={recipe.date}
                hours={recipe.hours}
                like={
                  recipesUpdate.find((it) => it.id === recipe.id)
                    ? recipesUpdate.filter((it) => {
                        if (it.id === recipe.id) {
                          return it.like;
                        }
                      })[0].like
                    : recipe.like
                }
                dislike={
                  recipesUpdate.find((it) => it.id === recipe.id)
                    ? recipesUpdate.filter((it) => {
                        if (it.id === recipe.id) {
                          return it.dislike;
                        }
                      })[0].dislike
                    : recipe.dislike
                }
                haveButton={true}
                addLike={() =>
                  handleAddLike(recipe.id, recipe.like, recipe.dislike)
                }
                addDislike={() =>
                  handleAddDislike(recipe.id, recipe.like, recipe.dislike)
                }
              />
            ))}
          </ContainerCard>
        </Container>
      )}
    </Fragment>
  );
}
