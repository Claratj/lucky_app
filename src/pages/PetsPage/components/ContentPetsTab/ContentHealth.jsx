import React from 'react';

import './ContentHealth.scss';
import iconPaw from '../../../../assets/img/pawprint.png';
export default function ContentHealth(props) {


    return (
        
            <div className="p-detailhealth">
        <div className="p-detailhealth__list">
        <ul className="ul-item">
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Vacunado {props.pet.health.vaccine == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Desparasitado {props.pet.health.dewormed == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Sano {props.pet.health.healthful == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Esterilizado {props.pet.health.sterilized == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Identificado {props.pet.health.identified == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
                <li className="ul-item__li"><img className="ul-item__paw" src={iconPaw} alt=""/>Microchip {props.pet.health.chip == true ? <span className="ul-item__span">Si</span> : <span className="ul-item__span">No</span>}</li>
            </ul>
        </div>
        <div className="p-detailhealth__about">
        <h3 className="p-detailhealth__title">Tienes que saber que</h3>  
        <p className="p-detailhealth__abo"></p>
        </div>
         
        </div>
        
    )
}
