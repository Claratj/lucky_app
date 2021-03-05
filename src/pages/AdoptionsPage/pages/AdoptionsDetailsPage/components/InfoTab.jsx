import React from 'react';

import arrow from '../../../../../assets/img/arrow-r.png';
import './InfoTab.scss';

export function InfoTab(){
    return(
        <div className="flex flex-column align-items-center">
            <div className="copy">
                <p className="copy__title s-body-2">Subir imágenes</p>
                <p className="s-detail-1">Necesitamos que nos subas algunas fotos de dónde va vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información</p>
            </div>

            <div className="copy">
                <p className="copy__title s-body-2">¿Cómo quieres pagar las tasas?</p>
                <p className="s-detail-1">Para pagar las tasas de adopción puedes elegir o pagarlo mediante la app con un pago único o poniéndose en contacto con la protectora para fraccionar el pago</p>
            </div>

            <button className="btn s-body-2">
                <span className="btn__span">125€</span>
                <p className="btn__copy">Desglosar las tasas</p>
                <img src={arrow} alt="" className="btn__img"/>
            </button>

            <button className="c-button c-button__red">Enviar</button>

        </div>
    );
}