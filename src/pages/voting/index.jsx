import React, { useEffect, useState } from 'react';
import { CardRecipe } from '../../components/card';
import { baseUrl } from '../../services';
import { Container, Title, ContainerCard, SubTitle } from './styles';

export function Voting() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipes() {
      try {
        const url = baseUrl;
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
      }
    }
    getRecipes();
  }, []);

  return (
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
          />
        ))}
      </ContainerCard>
    </Container>
  );
}
