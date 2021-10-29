import React from 'react';
import { CardRecipe } from '../../components/card';
import { Container, Title, ContainerCard } from './styles';

export function Home() {
  return (
    <Container>
      <Title>Cardapios do dia</Title>
      <ContainerCard>
        <CardRecipe
          title="Salada de feijão branco e atum com vinagrete de manjericão"
          description="Leve uma panela grande de água para ferver. Adicione 1 colher de sopa de sal e feijão verde e cozinhe até ficar macio, de 3 a 4 minutos. Escorra e enxágue com água fria para esfriar.
	
          Enquanto isso, no liquidificador, bata a chalota, o manjericão, o óleo, o vinagre e 1/2 colher de chá de sal e pimenta até ficar homogêneo.
            
         Transfira metade do molho para uma tigela grande e misture com o feijão verde. Acrescente a alface, o feijão branco e o atum e sirva com o restante do molho e os ovos"
          photo="https://coolicias.ao/wp-content/uploads/2019/10/5.-Salada-de-feij%C3%A3o-branco-e-atum-com-vinagrete-de-manjeric%C3%A3o.jpg"
          date="12/10/2021"
          hours="12:00"
          like={3}
          dislike={2}
          haveButton={false}
        />
      </ContainerCard>
      <Title>Cardapios por ordem crescente</Title>
      <ContainerCard>
        <CardRecipe
          title="Salada de feijão branco e atum com vinagrete de manjericão"
          description="Leve uma panela grande de água para ferver. Adicione 1 colher de sopa de sal e feijão verde e cozinhe até ficar macio, de 3 a 4 minutos. Escorra e enxágue com água fria para esfriar.
	
          Enquanto isso, no liquidificador, bata a chalota, o manjericão, o óleo, o vinagre e 1/2 colher de chá de sal e pimenta até ficar homogêneo.
            
         Transfira metade do molho para uma tigela grande e misture com o feijão verde. Acrescente a alface, o feijão branco e o atum e sirva com o restante do molho e os ovos"
          photo="https://coolicias.ao/wp-content/uploads/2019/10/5.-Salada-de-feij%C3%A3o-branco-e-atum-com-vinagrete-de-manjeric%C3%A3o.jpg"
          date="12/10/2021"
          hours="12:00"
          like={3}
          dislike={2}
          haveButton={false}
        />
      </ContainerCard>
    </Container>
  );
}
