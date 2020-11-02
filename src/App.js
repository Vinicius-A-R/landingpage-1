import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
