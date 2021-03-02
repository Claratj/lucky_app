import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom'
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';

export function SplashPage() {

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3800);
        return () => {
            clearTimeout(timer);
        }
    }, [])



    return (
        <div className="base-c">
            <figure className="fig-c fade-appear">
                <img className="fig-c__img" src={img} alt=""></img>
                <h1 className="fig-c__title">LUCKY</h1>
            </figure>
            {redirect ? <Redirect to={"/boarding"} /> : null}
        </div>

    )
}