import React from 'react';
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';



export function SplashPage() {
    return (
        <div className="splash-c">
            <img className="splash-c__img" src={img}></img>
            <h1 className="splash-c__title">LUCKY</h1>
        </div>
    )
}