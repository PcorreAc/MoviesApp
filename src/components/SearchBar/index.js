import React, { useState, useEffect, useRef } from "react";

//Imagen
import searchIcon from '../../images/search-icon.svg';

//Estilos
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);


    //efecto de demora al realizar una busqueda de peliculas
    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        //Detenemos el timer una vez se haga la busqueda para que no esté iterando el efecto en todo momento
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])



    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Buscar película'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;