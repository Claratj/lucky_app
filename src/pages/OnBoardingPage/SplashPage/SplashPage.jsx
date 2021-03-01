import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';

export function SplashPage() {

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <div className="base-c">
            <figure className="fig-c">
                <img className="fig-c__img" src={img}></img>
                <h1 className="fig-c__title">LUCKY</h1>
            </figure>
            {redirect ? <Redirect to={"/boarding"} /> : null}
        </div>
    )
}