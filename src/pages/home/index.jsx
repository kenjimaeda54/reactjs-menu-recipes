import React, { useEffect, useState, Fragment } from 'react';
import { CardRecipe } from '../../components/card';
import {
  Container,
  Title,
  ContainerCard,
  ContainerTitleHeader,
  SubTitleHeader,
} from './styles';
import { baseUrl } from '../../services';
import { Loading } from '../../components/load';
import { getDayFormat } from '../../util';

export function Home() {
  const [recipesDay, setRecipesDay] = useState([]);
  const [recipesSort, setRecipesSort] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function loadRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url, { controller: controller.signal });
        const fetchData = await response.json();
        setRecipesDay(
          fetchData
            .filter((recipe) => recipe.date === getDayFormat())
            .sort(function (x, y) {
              if (x.hours > y.hours) {
                return -1;
              }
              if (x.hours < y.hours) {
                return 1;
              }
            }),
        );
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
    return () => {
      controller.abort();
    };
  }, []);

  console.log(getDayFormat());

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ContainerTitleHeader>
            <Title>Cardapios do dia</Title>
            <SubTitleHeader> Quantidade: {recipesDay.length} </SubTitleHeader>
          </ContainerTitleHeader>
          <ContainerCard>
            {recipesDay.map((recipes) => (
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
          <ContainerTitleHeader>
            <Title>Cardápios ordenados por números de like</Title>
            <SubTitleHeader> Quantidade: {recipesSort.length} </SubTitleHeader>
          </ContainerTitleHeader>

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
