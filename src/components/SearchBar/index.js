import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

//Imagen
import searchIcon from "../../images/search-icon.svg";

//Estilos
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  //efecto de demora al realizar una busqueda de peliculas
  useEffect(() => {
    //Evita que el timeout se ejecute al iniciar la pagina y lo ejecuta cuando el estado de la busqueda cambie
    if (initial.current) {
      initial.current = false;
      return;
    }
    //Después de aprobar a validación se ejecuta este fragmento de código
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    //Detenemos el timer una vez se haga la busqueda para que no esté iterando el efecto en todo momento
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Buscar película"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
