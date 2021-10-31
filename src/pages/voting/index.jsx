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
  Button,
  ContainerFooter,
} from './styles';

export function Voting() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recipesUpdate, setRecipesUpdate] = useState([]);
  let repeated = 0;

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
        alert('Erro no servidor');
      } finally {
        setIsLoading(false);
      }
    }

    getRecipes();

    return () => {
      controller.abort();
    };
  }, []);

  function handleAddLike(id, like, dislike, title, description, link) {
    const recipes = {
      id,
      like: (like += 1),
      dislike,
      title,
      description,
      link,
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

  function handleAddDislike(id, like, dislike, title, description, link) {
    const recipes = {
      id,
      like,
      dislike: (dislike += 1),
      title,
      description,
      link,
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

  function handleConfirmation() {
    setIsLoading(true);
    async function updateRecipes(recipe) {
      repeated += 1;
      try {
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
                  recipesUpdate.length > 0 &&
                  recipesUpdate.find((item) => item.id === recipe.id)
                    ? recipesUpdate.find((item) => item.id === recipe.id).like
                    : recipe.like
                }
                dislike={
                  recipesUpdate.length > 0 &&
                  recipesUpdate.find((item) => item.id === recipe.id)
                    ? recipesUpdate.find((item) => item.id === recipe.id)
                        .dislike
                    : recipe.dislike
                }
                haveButton={true}
                addLike={() =>
                  handleAddLike(
                    recipe.id,
                    recipe.like,
                    recipe.dislike,
                    recipe.title,
                    recipe.description,
                    recipe.link,
                  )
                }
                addDislike={() =>
                  handleAddDislike(
                    recipe.id,
                    recipe.like,
                    recipe.dislike,
                    recipe.title,
                    recipe.description,
                    recipe.link,
                  )
                }
              />
            ))}
          </ContainerCard>
          <ContainerFooter>
            <Button
              onClick={handleConfirmation}
              disabled={recipesUpdate.length > 0 ? false : true}
              haveField={recipesUpdate.length > 0}
            >
              Confirmar votação
            </Button>
          </ContainerFooter>
        </Container>
      )}
    </Fragment>
  );
}
