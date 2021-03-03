import React from 'react';
import './Footer.scss';
import home from '../../assets/img/img-footer/home.svg';
import mapa from '../../assets/img/img-footer/mapa.svg';
import mascota from '../../assets/img/img-footer/mascota.svg';
import perfil from '../../assets/img/img-footer/perfil.svg';
import mS from '../../assets/img/img-footer/mS.svg';
import '../../pages/HomePage/HomeCard/HomeCard';
import {Link } from "react-router-dom";


export function Footer() {


    return (
        <div className="c-footer">
            <Link to="/"><img src={home} alt={"Home"}/></Link>
            <Link to="#"><img src={mapa} alt={"Mapa"}/></Link>
            <Link to="/pets"><img src={mascota} alt={"Mascota"}/></Link>
            <Link to="/profile"><img src={perfil} alt={"Perfil"}/></Link>
            <Link to='/menu'><img src={mS} alt={"mS"}/></Link>
        </div>
    )
}

export default Footer;
