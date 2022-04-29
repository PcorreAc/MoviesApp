import React from "react";
import { Link } from "react-router-dom";

//Importamos imagenes
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

//Importamos componentes desde el Header.style.js
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header = () => (
  /* Clases importadas del Header.style.js */
  <Wrapper>
    <Content>
      <Link to="/">
        {" "}
        {/* Decimos que cuando se presione el logo nos llevará al HomePage */}
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>

      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
