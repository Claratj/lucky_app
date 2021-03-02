import React from 'react';
import './Footer.scss';
import home from '../../assets/img/img-footer/home.svg';
import mapa from '../../assets/img/img-footer/mapa.svg';
import mascota from '../../assets/img/img-footer/mascota.svg';
import perfil from '../../assets/img/img-footer/perfil.svg';
import mS from '../../assets/img/img-footer/mS.svg';
import '../../pages/HomePage/HomeCard/HomeCard';
import {NavLink} from 'react-router-dom';
import {Link, Route, Switch, withRouter} from "react-router-dom";


export function Footer() {


    return (
        <div className="container-footer">
            <a href="#"><img src={home} alt={"Home"}/></a>
            <a href="#"><img src={mapa} alt={"Mapa"}/></a>
            <a href="#"><img src={mascota} alt={"Mascota"}/></a>
            <a href="#"><img src={perfil} alt={"Perfil"}/></a>
            <NavLink to='/HomeCard'>
                <img src={mS} alt={"mS"}/>
            </NavLink>


        </div>

    )
}

export default Footer;
