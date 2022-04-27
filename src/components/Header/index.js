
import React from "react";

//Importamos imagenes
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

//Importamos componentes desde el Header.style.js
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";

const Header = () => (
    /* Clases importadas del Header.style.js */
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
);

export default Header;