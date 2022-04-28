import React from "react";
import PropTypes from 'prop-types';

//Helpers
import { calcTime, convertMoney } from '../../helpers';

//Estilos
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Duración: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Presupuesto: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Ingresos: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;