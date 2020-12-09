
import React from 'react';
import Layout from './home/containers/layout';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './sass/index.scss';

// import '../../assets/css/main.scss';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
