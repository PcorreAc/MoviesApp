import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';

//Importar estilos globales
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />{/* trae los estilos del compónents/header/inedex.js */}
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
