import React, { useEffect, useState } from 'react';
import { CardMenu } from '../../shared/CardMenu/CardMenu';
import chica from '../../assets/img/chica-a.png';
// import chico from '../../assets/img/chico-r.svg';
import direccion from '../../assets/img/localization-a.svg';
import favorito from '../../assets/img/favoritos-a.png';
import notificacion from '../../assets/img/notification-a.svg';
import mascota from '../../assets/img/perro-a.svg';
import apadrina from '../../assets/img/apadrina-a.svg';
import donar from '../../assets/img/donar-a.svg';
import photo from '../../assets/img/profile-photo.png';

import Footer from '../../core/Footer/Footer';

import './ProfilePage.scss';

export function ProfilePage() {
    const [user, setUser] = useState({});
    const getUser = () => {
        setUser(JSON.parse(localStorage.getItem('userData')));
    }

    useEffect(getUser, []);

    const cards = [
        {title: 'Mi perfil', img: chica, link: '/'},
        {title: 'Direcciones', img: direccion, link: '/'},
        {title: 'Favoritos', img: favorito, link: '/'},
        {title: 'Notificaciones', img: notificacion, link: '/'},
        {title: 'Estado de la adopción', img: mascota, link: '/adoptions'}, // aquí vamos a necesitar el user del id para pasárselo!!!!
        {title: 'Apadrinar', img: apadrina, link: '/'},
        {title: 'Donar', img: donar, link: '/'}
    ];

    return(
        <div className="p-profile">
            {user.image ?
            <img src={user.image} alt="" className="p-profile__photo p-profile__photo--original"/>
            :
            <img src={photo} alt="" className="p-profile__photo"/>
            }
            
            <div className="p-profile__details">
            {cards.map((obj, i)=>
            <CardMenu icon={obj.img} title={obj.title} link={obj.link}></CardMenu>
            )}
            </div>
            <Footer></Footer>
        </div>
    );
}
