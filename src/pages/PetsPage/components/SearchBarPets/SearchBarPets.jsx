import React from 'react'
import iconSearch from '../../../../assets/img/buscar.png';
import './SearchBarPets.scss';
export default function SearchBarPets(props) {
    return (
        <div className="c-search-pets">
        <div className="c-search-pets__form">
               <input type="text" placeholder="Buscar" className="c-search-pets__input"></input>
               <button className="c-search-pets__button" onClick={()=>{
                   const input = document.querySelector('input');
                   props.handleChange(input)}}><img src={iconSearch}></img></button>
  
        </div>    
        </div>
    )
}
