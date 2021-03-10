import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconFilter from '../../../../assets/img/filtros.png';
import iconBack from '../../../../assets/img/atras.png';
import iconSearch from '../../../../assets/img/buscar.png';
import './SearchBarFilter.scss';
import { Badge } from '@material-ui/core';


export default function SearchBar(props) {


    return (
        <div className="c-searchBarFilter">
            <div className="c-searchBarFilter__back"></div>
            <NavLink to="/pets"><img src={iconBack} className="c-search__imgBack" alt="" /></NavLink>
            <div className="c-searchBarFilter__form">
                <input type="text" placeholder="Buscar" className="c-searchBarFilter__input"></input>
                <button className="c-searchBarFilter__button" onClick={() => {
                    const input = document.querySelector('input');
                    props.handleChange(input)
                }}><img src={iconSearch} alt="" /></button>
            </div>
            <Badge badgeContent={props.count} color="primary">
                <div className="c-searchBarFilter__filter">
                    <img src={iconFilter} className="c-search__imgFilter" alt="" /></div>
            </Badge>
        </div>
    )
}
