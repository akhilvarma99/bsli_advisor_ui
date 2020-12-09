
import React from 'react';
import Layout from './home/containers/layout';
import { BrowserRouter } from 'react-router-dom';

import Footer from './footer';
import './sass/index.scss';

// import '../../assets/css/main.scss';




function App() {
  return (
    <BrowserRouter>

      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
