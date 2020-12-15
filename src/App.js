
import React from 'react';
import Layout from './home/containers/layout';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './sass/index.scss';

function App() {
  return (
    <BrowserRouter basename={"/advisor"}>
      <div className="abc-container">
        <Header />
        <Layout />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
