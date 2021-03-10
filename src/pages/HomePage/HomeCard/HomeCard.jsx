import React from 'react';

import '../../../shared/CardMenu/CardMenu.scss';
import './HomeCard.scss';
import ayuda from '../../../assets/img/ayuda.png';
import blogCopy from '../../../assets/img/blogCopy.png';
import confi from '../../../assets/img/confi.png';
import eventos from '../../../assets/img/eventos.png';
import protectora from '../../../assets/img/protectoraHome.png';
import salir from '../../../assets/img/salir.png';
import Footer from '../../../core/Footer/Footer';
import { CardMenu } from '../../../shared/CardMenu/CardMenu';
import { API } from '../../../shared/consts/api.consts';

export function HomeCard() {


    const logout = (event) => {
        event.preventDefault();
        API.get('logout').then((res)=>{
            if(res.data.logout){
                localStorage.clear();
                window.location.href = "/login-form";
            
            }

        });
     
    }
    const user = JSON.parse(localStorage.getItem('userData'));
    
    return (
        <div className="container flex flex-column align-items-center mt-5">
            <CardMenu icon={protectora} title='Asociaciones protectoras' link='/shelters'></CardMenu>
            <CardMenu icon={eventos} title='Eventos' link='/events'></CardMenu>
            <CardMenu icon={blogCopy} title='Curiosidades' link='/curiosities'></CardMenu>
            <div className="flex flex-column align-items-center full-width">
            <CardMenu icon={ayuda} title='Ayuda' link='/help'></CardMenu>
            {user && 
            <CardMenu icon={confi} title='Configuración' link='/config'></CardMenu>}
            </div>
            {user &&
            <div className="flex flex-column align-items-center session">
            <CardMenu icon={salir}  onClick={logout} title='Cerrar sesión' link=''></CardMenu>
            </div>
            }
            <Footer />

        </div>        
    )
}

export default HomeCard;

