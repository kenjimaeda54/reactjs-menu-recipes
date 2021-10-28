import React from 'react';
import { Home } from './pages/home';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Home />
    </Layout>
  );
}

export default App;
