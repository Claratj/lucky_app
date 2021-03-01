import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';



export function SplashPage() {

    // const duration = 200;

    // const transitionStyles = {
    //     entering: { opacity: 1 },
    //     entered: { opacity: 1 },
    //     exiting: { opacity: 0 },
    //     exited: { opacity: 0 },
    // };


    useEffect(() => {
        const timer = setTimeout(() => {
            <Redirect to="/boarding" />
        }, 5000)
        return () => {
            clearTimeout(timer);
        }
    }, [])


    // const [redirectNow, setRedirectNow] = useState(false);

    // if (redirectNow) {
    //     return <Redirect to='/boarding' />
    // }





    return (


        <div className="base-c">
            <figure className="fig-c">
                <img className="fig-c__img" src={img}></img>
                <h1 className="fig-c__title">LUCKY</h1>
            </figure>
        </div>
    )
}