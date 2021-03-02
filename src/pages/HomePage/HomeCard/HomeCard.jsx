import React from 'react';

import '../../../shared/CardMenu/CardMenu.scss';
import './HomeCard.scss';
import ayuda from '../../../assets/img/imgHomeCard/ayuda.png';
import blogCopy from '../../../assets/img/imgHomeCard/blogCopy.png';
import confi from '../../../assets/img/imgHomeCard/confi.png';
import eventos from '../../../assets/img/imgHomeCard/eventos.png';
import protectora from '../../../assets/img/imgHomeCard/protectora.png';
import salir from '../../../assets/img/imgHomeCard/salir.png';
import Footer from '../../../core/Footer/Footer';
import { CardMenu } from '../../../shared/CardMenu/CardMenu';

export function HomeCard() {

    return (
        <div className="container flex flex-column align-items-center mt-5">
            <CardMenu icon={protectora} title='Asociaciones protectoras' link='/'></CardMenu>
            <CardMenu icon={eventos} title='Eventos' link='/'></CardMenu>
            <CardMenu icon={blogCopy} title='Curiosidades' link='/'></CardMenu>
            <div className="flex flex-column align-items-center w-100">
            <CardMenu icon={ayuda} title='Ayuda' link='/'></CardMenu>
            <CardMenu icon={confi} title='Configuración' link='/'></CardMenu>
            </div>
            <div className="flex flex-column align-items-center session w-100">
            <CardMenu icon={salir} title='Cerrar sesión' link='/'></CardMenu>
            </div>
            <Footer />

        </div>        
    )
}

export default HomeCard;

