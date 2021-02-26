import React from 'react';

import '../../../shared/CardMenu/CardMenu.scss';
import ayuda from '../../../assets/img/imgHomeCard/ayuda.png';
import blogCopy from '../../../assets/img/imgHomeCard/blogCopy.png';
import confi from '../../../assets/img/imgHomeCard/confi.png';
import eventos from '../../../assets/img/imgHomeCard/eventos.png';
import protectora from '../../../assets/img/imgHomeCard/protectora.png';
import salir from '../../../assets/img/imgHomeCard/salir.png';

export function HomeCard() {

    

    return (
        <div>
            <div>
                <p>
                    Asociaciones protectoras
                </p>
                <img src={protectora}></img>
            </div>
            <div>
                <p>
                    Eventos
                </p>
                <img src={eventos}></img>
            </div>
            <div>
                <p>
                    Curiosidades
                </p>
                <img src={blogCopy}></img>
            </div>
            <div>
                <p>
                    Ayuda
                </p>
                <img src={ayuda}></img>
            </div>
            <div>
                <p>
                    Configuración 
                </p>
                <img src={confi}></img>
            </div>
            <div>
                <p>
                    Cerrar sesión
                </p>
                <img src={salir}></img>
            </div>

        </div>
        
    )
}

export default HomeCard;

