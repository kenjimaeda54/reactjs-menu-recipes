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
  // eslint-disable-next-line no-unused-vars
  const [idRecipes, setIdRecipes] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [like, setLike] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipes();
  }, [recipes]);

  async function handleAddLike(id) {
    try {
      setIsLoading(true);
      setRecipes(
        recipes.forEach((item) => {
          if (item.id === id) {
            item.like += 1;
          }
        }),
      );
      const filterRecipes = recipes.filter((item) => item.id === id);
      console.log(filterRecipes);
      const url = `${baseUrl}/${id}`;
      console.log(filterRecipes);
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          filterRecipes.map((item) => {
            return {
              dislike: item.dislike,
              like: item.like,
              link: item.link,
              title: item.title,
              description: item.description,
            };
          })[0],
        ),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  function handleAddDislike(id) {
    setRecipes(
      recipes.forEach((item) => {
        if (item.id === id) {
          item.like -= 1;
        }
      }),
    );
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
                like={recipe.like}
                dislike={recipe.dislike}
                haveButton={true}
                addLike={() => handleAddLike(recipe.id)}
                addDislike={() => handleAddDislike(recipe.id)}
              />
            ))}
          </ContainerCard>
        </Container>
      )}
    </Fragment>
  );
}
