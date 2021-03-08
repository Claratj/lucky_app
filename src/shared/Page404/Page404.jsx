import React from 'react';
import cat from '../../assets/img/gato404.png';
import logo from '../../assets/img/logo@3x.png'
import './Page404.scss';

export default function Page404() {
    return (
        <div className="p-error">
            <img className="p-error__img" src={cat} alt=""/>
            <h3 className="p-error__sorry">¡Lo sentimos!</h3>
            <h4 className="p-error__not">Página no encontrada</h4>
            <img className="p-error__logo" src={logo} alt=""/>
        </div>
    )
}
