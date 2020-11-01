import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Navbar, Footer } from './components';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
