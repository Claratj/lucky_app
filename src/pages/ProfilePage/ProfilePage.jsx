import React, { useEffect, useState } from 'react';

import { CardMenu } from '../../shared/CardMenu/CardMenu';
import Footer from '../../core/Footer/Footer';

import chica from '../../assets/img/chica-a.png';
import direccion from '../../assets/img/localization-a.svg';
import favorito from '../../assets/img/favoritos-a.png';
import notificacion from '../../assets/img/notification-a.svg';
import mascota from '../../assets/img/perro-a.svg';
import apadrina from '../../assets/img/apadrina-a.svg';
import donar from '../../assets/img/donar-a.svg';
import avatar from '../../assets/img/avatar-default.svg';

import './ProfilePage.scss';

export function ProfilePage() {
    const [user, setUser] = useState({});
    const getUser = () => {
        setUser(JSON.parse(localStorage.getItem('userData')));
    }

    useEffect(getUser, []);

    const cards = [
        {title: 'Mi perfil', img: chica, link: '/edit-profile'},
        {title: 'Direcciones', img: direccion, link: '/locations'},
        {title: 'Favoritos', img: favorito, link: '/favorites'},
        {title: 'Notificaciones', img: notificacion, link: '/notifications'},
        {title: 'Estado de la adopción', img: mascota, link: '/adoptions'}, 
        {title: 'Apadrinar', img: apadrina, link: '/godfather'},
        {title: 'Donar', img: donar, link: '/donate'}
    ];

    return(
        <div className="p-profile container flex flex-column align-items-center mt-5">
            {user == null?
                <img src={avatar} alt="" className="c-profile-photo"/>            
            :
                <img src={user.image} alt="" className="c-profile-photo"/>
            }            
            <div className="flex flex-column align-items-center full-width">
            {cards.map((obj, i)=>
                <CardMenu icon={obj.img} title={obj.title} link={obj.link}></CardMenu>
            )}
            </div>
            <Footer></Footer>
        </div>
    );
}
