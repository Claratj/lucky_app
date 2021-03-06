import React, { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';
import iconFilter from '../../assets/img/filtros.png';
import iconBack from '../../assets/img/atras.png';
import iconSearch from '../../assets/img/buscar.png';
import './SearchBar.scss';
import { PopUpContext } from '../Context/PopUpContext';

export default function SearchBar(props) {
    /* const {pop, setPop} = useContext(PopUpContext);
    console.log(pop); */

    return (
        <div className="c-searchBar">
           <div className="c-searchBar__back"></div>
           <NavLink to="/home"><img src={iconBack} className="c-search__imgBack" alt=""/></NavLink> 
           <div className="c-searchBar__form">
               <input type="text" placeholder="Buscar" className="c-searchBar__input"></input>
               <button className="c-searchBar__button"  onClick={()=>{
                   const input = document.querySelector('input');
                   props.handleChange(input)}}><img src={iconSearch} alt=""/></button>
           </div> 
           <div className="c-searchBar__filter">
            <img src={iconFilter} className="c-search__imgFilter" alt="" onClick={props.click}/></div>
        </div>
    )
}
