import React, { useEffect, useState } from 'react';
import './Footer.scss';
import home from '../../assets/img/casa.svg';
import mapa from '../../assets/img/mapa.svg';
import mascota from '../../assets/img/mascota.svg';
import perfil from '../../assets/img/perfil.svg';
import mS from '../../assets/img/mS.svg';
import '../../pages/HomePage/HomeCard/HomeCard';
import {NavLink} from "react-router-dom";


export function Footer() {
    const [user, setUser] = useState({});
    const getUser = () => {
        setUser(JSON.parse(localStorage.getItem('userData')));
    }

    useEffect(getUser, []);

    return (
        <div className="c-footer">
            <NavLink to="/home" className="c-footer__link" activeClassName="active"><img src={home} alt={"Home"}/></NavLink>
            <NavLink to="/maps" className="c-footer__link" activeClassName="active"><img src={mapa} alt={"Mapa"}/></NavLink>
            <NavLink to="/pets" className="c-footer__link" activeClassName="active"><img src={mascota} alt={"Mascota"}/></NavLink>
            <NavLink to="/profile">
            {user.image ? 
            <img src={user.image} alt={"Perfil"} className="c-footer__img"/>
            :
            <img src={perfil} alt={"Perfil"}/>
            }</NavLink>
            <NavLink to='/menu'><img src={mS} alt={"mS"}/></NavLink>
        </div>
    )
}

export default Footer;
