import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from '../pages/home';
import { Register } from '../pages/register';
import { Voting } from '../pages/voting';
import { EditRecipe } from '../pages/edit_recipes';

export default function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/votacao" component={Voting} />
        <Route exact path="/editar" component={EditRecipe} />
      </Switch>
    </Layout>
  );
}
