import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SplashPage.scss';
import img from '../../../assets/img/splash.svg';



export function SplashPage() {

    const duration = 200;

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('This will run after 2 seconds!')
    //     }, 2000)
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [])


    return (


        <div className="base-c">
            <figure className="fig-c">
                <img className="fig-c__img" src={img}></img>
                <h1 className="fig-c__title">LUCKY</h1>
            </figure>
        </div>
    )
}