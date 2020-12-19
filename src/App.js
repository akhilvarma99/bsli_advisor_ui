
import React from 'react';
import Layout from './home/containers/layout';
import { BrowserRouter } from 'react-router-dom';
import Header from './h&F/header';
import Footer from './h&F/footer';
import './sass/index.scss';

function App() {
  return (
    <BrowserRouter basename={"/advisor"}>

      <Header />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
