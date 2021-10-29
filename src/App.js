import React from 'react';
// import { Home } from './pages/home';
// import { Register } from './pages/register';
// import { Voting } from './pages/voting';
import { EditRecipe } from './pages/edit_recipes';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <EditRecipe />
    </Layout>
  );
}

export default App;
