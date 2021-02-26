import React from 'react';
import './ContentDate.scss';

export default function ContentDate() {
    return (
        <div className="p-detailItem">
        <div className="p-detailItem__list">
            <ul className="ul-item">
                <li className="ul-item__li">Especie</li>
                <li className="ul-item__li">Fecha de nacimiento</li>
                <li className="ul-item__li">Sexo</li>
                <li className="ul-item__li">Tamaño</li>
                <li className="ul-item__li">Peso</li>
            </ul>
        </div>
        <div className="p-detailItem__personality">
        <h3 className="p-detailItem__title">Personalidad</h3>
        <p className="p-detailItem__person">A veces maúllo</p>
        </div> 
        <div className="p-detailItem__history">
        <h3 className="p-detailItem__title">Historia</h3>  
        <p className="p-detailItem__histo">Me lllamo Blue, soy una chinchilla muy buena, pero vi cosas que no deberia haber visto,
        que no debia haber pasadp. Por eso llamaron a Lara y vino salvarnos la vida.</p>
        </div>
        <div className="p-detailItem__button">
            <button className="p-detailItem__buttonAp">Apadrinar</button>
            <button className="p-detailItem__buttonAdop">Adoptar</button>

        </div>  
        </div>
    )
}
