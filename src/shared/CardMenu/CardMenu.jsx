import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/img/arrow-r.png';

import './CardMenu.scss';

export function CardMenu(props) {
    return(
        <div className="c-card-menu">
            <img src={props.icon} alt="" className="c-card-menu__img"/>
            <p className="c-card-menu__title">{props.title}</p>
            <NavLink to={props.link} className="c-card-menu__link"><img src={arrow} alt=""/></NavLink>
        </div>
    );
}