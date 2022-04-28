import React from "react";
import PropTypes from 'prop-types';

//Estilos 
import { Wrapper } from "./Button.styles";

const Button = ({text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string, //Tipo de dato es string
    callback: PropTypes.func //Tipo de dato es function
}

export default Button;