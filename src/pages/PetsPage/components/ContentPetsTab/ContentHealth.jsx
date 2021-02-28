import React, { useContext, useState } from 'react';
import { PopUpContext } from '../../../../shared/Context/PopUpContext';
import PopUpAdoption from '../PopUpAdoption/PopUpAdoption';
import './ContentHealth.scss';

export default function ContentHealth() {

    const {show, setShow} = useContext(PopUpContext);

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
            <button className="p-detailAdoption__buttonAdop" onClick={()=> setShow(true)}>Adoptar</button>
            <PopUpAdoption show={show}></PopUpAdoption>

        </div>  
        </div>
        
    )
}
