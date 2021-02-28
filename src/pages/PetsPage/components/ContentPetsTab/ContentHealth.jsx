import React from 'react';
import './ContentHealth.scss';

export default function ContentHealth() {
    return (
        
            <div className="p-detailhealth">
        <div className="p-detailhealth__list">
            <ul className="ul-item">
                <li className="ul-item__li">Vacunado</li>
                <li className="ul-item__li">Desparasitado</li>
                <li className="ul-item__li">Sano</li>
                <li className="ul-item__li">Esterilizado</li>
                <li className="ul-item__li">Identificado</li>
                <li className="ul-item__li">Microchip</li>
            </ul>
        </div>
        <div className="p-detailhealth__about">
        <h3 className="p-detailhealth__title">Tienes que saber que</h3>  
        <p className="p-detailhealth__abo"></p>
        </div>
        <div className="p-detailhealth__button">
            <button className="p-detailhealth__buttonh">Apadrinar</button>
            <button className="p-detailhealth__buttonha">Adoptar</button>

        </div>  
        </div>
        
    )
}
