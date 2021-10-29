import React, { useEffect, useState, Fragment } from 'react';
import { CardRecipe } from '../../components/card';
import { Container, Title, ContainerCard } from './styles';
import { baseUrl } from '../../services';
import { Loading } from '../../components/load';

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipesSort, setRecipesSort] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url);
        const fetchData = await response.json();
        setRecipes(fetchData);
        const dataSort = fetchData.sort(function (x, y) {
          return y.like - x.like;
        });
        setRecipesSort(dataSort);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert('Erro no servidor');
      } finally {
        setIsLoading(false);
      }
    }
    loadRecipes();
  }, []);
  console.log(recipesSort);
  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Title>Cardapios do dia</Title>
          <ContainerCard>
            {recipes.map((recipes) => (
              <CardRecipe
                key={recipes.id}
                title={recipes.title}
                description={recipes.description}
                photo={recipes.link}
                date={recipes.date}
                hours={recipes.hours}
                like={recipes.like}
                dislike={recipes.dislike}
                haveButton={false}
              />
            ))}
          </ContainerCard>
          <Title>Cardapios ordenados por numeros de like</Title>
          <ContainerCard>
            {recipesSort.map((recipes) => (
              <CardRecipe
                key={recipes.id}
                title={recipes.title}
                description={recipes.description}
                photo={recipes.link}
                date={recipes.date}
                hours={recipes.hours}
                like={recipes.like}
                dislike={recipes.dislike}
                haveButton={false}
              />
            ))}
          </ContainerCard>
        </Container>
      )}
    </Fragment>
  );
}
