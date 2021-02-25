import React from 'react';
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';



export function SplashPage() {
    return (
        <div className="splash-c">
            <figure className="fig-c">
                <img className="fig-c__img" src={img}></img>
                <h1 className="fig-c__title">LUCKY</h1>
            </figure>
        </div>
    )
}