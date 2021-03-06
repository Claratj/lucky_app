import React from 'react';
import iconPaw from '../../../../assets/img/pawprint.png'

import './ContentDate.scss';

export default function ContentDate(props) {

    return (
         <div className="p-detailDate">
        <div className="p-detailDate__list">
            <ul className="ul-item">
                <li className="ul-item__li"><img src={iconPaw} alt=""/> Especie <span className="ul-item__span">{props.pet.species.species}</span></li>
                <li className="ul-item__li"><img src={iconPaw} alt=""/>Fecha de nacimiento <span>{props.pet.age}</span></li>
                <li className="ul-item__li"><img src={iconPaw} alt=""/>Sexo <span>{props.pet.gender}</span></li>
                <li className="ul-item__li"><img src={iconPaw} alt=""/>Tamaño <span>{props.pet.size}</span></li>
                <li className="ul-item__li"><img src={iconPaw} alt=""/>Peso <span>{props.pet.data.weight}</span></li>
            </ul>
        </div>
        <div className="p-detailDate__personality">
        <h3 className="p-detailDate__title">Personalidad</h3>
        <p className="p-detailDate__person">A veces maúllo</p>
        </div> 
        <div className="p-detailDate__history">
        <h3 className="p-detailDate__title">Historia</h3>  
        <p className="p-detailDate__histo"></p>
        </div>
          
        </div>
    )
}
