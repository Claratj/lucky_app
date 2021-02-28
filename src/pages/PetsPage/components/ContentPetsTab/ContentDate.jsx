import React, { useContext, useState } from 'react';
import { PopUpContext } from '../../../../shared/Context/PopUpContext';
import PopUpAdoption from '../PopUpAdoption/PopUpAdoption';
import './ContentDate.scss';

export default function ContentDate() {

    const {show, setShow} = useContext(PopUpContext);

    return (
        <div className="p-detailDate">
        <div className="p-detailDate__list">
            <ul className="ul-item">
                <li className="ul-item__li">Especie</li>
                <li className="ul-item__li">Fecha de nacimiento</li>
                <li className="ul-item__li">Sexo</li>
                <li className="ul-item__li">Tamaño</li>
                <li className="ul-item__li">Peso</li>
            </ul>
        </div>
        <div className="p-detailDate__personality">
        <h3 className="p-detailDate__title">Personalidad</h3>
        <p className="p-detailDate__person">A veces maúllo</p>
        </div> 
        <div className="p-detailDate__history">
        <h3 className="p-detailDate__title">Historia</h3>  
        <p className="p-detailDate__histo">Me lllamo Blue, soy una chinchilla muy buena, pero vi cosas que no deberia haber visto,
        que no debia haber pasadp. Por eso llamaron a Lara y vino salvarnos la vida.</p>
        </div>
        <div className="p-detailDate__button">
            <button className="p-detailDate__buttonAp">Apadrinar</button>
            <button className="p-detailAdoption__buttonAdop" onClick={()=> setShow(true)}>Adoptar</button>
            <PopUpAdoption show={show}></PopUpAdoption>

        </div>  
        </div>
    )
}
