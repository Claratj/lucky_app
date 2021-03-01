import React from 'react';

import '../../../shared/CardMenu/CardMenu.scss';
import ayuda from '../../../assets/img/imgHomeCard/ayuda.png';
import blogCopy from '../../../assets/img/imgHomeCard/blogCopy.png';
import confi from '../../../assets/img/imgHomeCard/confi.png';
import eventos from '../../../assets/img/imgHomeCard/eventos.png';
import protectora from '../../../assets/img/imgHomeCard/protectora.png';
import salir from '../../../assets/img/imgHomeCard/salir.png';
import Footer from '../../../core/Footer/Footer';

export function HomeCard() {

    

    return (
        <div className="container">
            <div className="container-img">
                
                <img src={protectora}></img>
                <p>
                    Asociaciones protectoras
                </p>
            </div>
            <div className="container-img">
                
                <img src={eventos}></img>
                <p>
                    Eventos
                </p>
            </div>
            <div className="container-img">
                
                <img src={blogCopy}></img>
                <p>
                    Curiosidades
                </p>
            </div>
            <div className="container-img">
                
                <img src={ayuda}></img>
                <p>
                    Ayuda
                </p>
            </div>
            <div className="container-img">
                
                <img src={confi}></img>
                <p>
                    Configuración 
                </p>
            </div>
            <div className="container-img session">
                
                <img src={salir}></img>
                <p>
                    Cerrar sesión
                </p>
            </div>

            <Footer />

        </div>
        
    )
}

export default HomeCard;

