import React from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { Banner } from './components/Banner';
import { CardProvider } from './Context';

export function App() {

  return (
    <React.Fragment>
      <CardProvider>
        <BrowserRouter>
          <Header />
          <Banner />
          <Routes />
          <Footer />
          <GlobalStyle />
        </BrowserRouter>
      </CardProvider>
    </React.Fragment>
  );
}