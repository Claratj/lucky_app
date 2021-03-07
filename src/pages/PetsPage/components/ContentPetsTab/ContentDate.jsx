import moment from 'moment';
import React from 'react';
import iconPaw from '../../../../assets/img/pawprint.png';
import localization from 'moment/locale/es'

import './ContentDate.scss';

export default function ContentDate(props) {

    const personality = props.pet.data.personality;
    const birth = moment(props.pet.birthDate);
    moment.locale('es', localization);
    
    

    return (
        <div className="p-detailDate">
        <div className="p-detailDate__list">
            <ul className="ul-item">
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Especie <span className="ul-item__span">{props.pet.species.species}</span></li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Fecha de nacimiento <span className="ul-item__span">{birth.format('d-M-y')}</span></li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Sexo <span className="ul-item__span">{props.pet.gender}</span></li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Tamaño <span className="ul-item__span">{props.pet.size}</span></li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Peso <span className="ul-item__span">{props.pet.data.weight}</span></li>
            </ul>
        </div>
        <div className="p-detailDate__personality">
        <h3 className="p-detailDate__title">Personalidad</h3>
        { personality && personality.map((item)=><p className="p-detailDate__person">{item}</p> )}
        </div> 
        <div className="p-detailDate__history">
        <h3 className="p-detailDate__title">Historia</h3>  
        <p className="p-detailDate__histo">{props.pet.data.history}</p>
        </div>
          
        </div>
    )
}
