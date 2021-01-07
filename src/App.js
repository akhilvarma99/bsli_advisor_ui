import React from "react";
import Layout from "./home/containers/layout";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./sass/index.scss";

function App() {
  return (
    <HashRouter basename={"."}>
      <div className="abc-container">
        <Layout />
      </div>
    </HashRouter>
  );
}

export default App;
