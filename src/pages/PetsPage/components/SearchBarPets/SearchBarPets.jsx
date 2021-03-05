import React from 'react'
import iconSearch from '../../../../assets/img/buscar.png';
import './SearchBarPets.scss';
export default function SearchBarPets() {
    return (
        <div className="c-search-pets">
        <div className="c-search-pets__form">
           <form>
               <input type="text" placeholder="Buscar" className="c-search-pets__input"></input>
               <button className="c-search-pets__button"><img src={iconSearch}></img></button>
            </form>  
        </div>    
        </div>
    )
}
