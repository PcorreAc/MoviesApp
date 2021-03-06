import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Importar estilos globales
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    {/* trae los estilos del compónents/header/inedex.js */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Esta es la ruta para el HomePage */}
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
