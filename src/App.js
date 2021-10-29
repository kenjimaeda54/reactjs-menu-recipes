import React from 'react';
// import { Home } from './pages/home';
import { Register } from './pages/register';
import GlobalStyle from './GlobalStyle';
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Register />
    </Layout>
  );
}

export default App;
