import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { AdoptionCard } from '../../components/AdoptionCard';
import iconBack from '../../../../assets/img/atras.png';

import './AdoptionsDetailPage.scss';
import '../../../../styles/elements/_tab.elements.scss';
import { ResumenTab } from './components/ResumenTab';


export function AdoptionsDeatilPage() {
        // aquí le pasamos el id de la mascota por params y recogemos todos sus datos a través de la API
    
    const param = useParams();
    const petId = param.id; 

    const pet = {   
        id: 1,
        name: 'Blue',
        city: 'Madrid',
        gender: 'Macho',
        img: 'data:image/jpeg;base64,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',
        status: 'red',
        asociation: 'Asociación Protectora Lara',
        asAddress: 'Calle de Eraso 14, Madrid'
    }

    function handleClick(e, text){
        console.log(text);
        const tabs = document.getElementsByClassName('p-adoptions-detail__main');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].className = tabs[i].className.replace(" flex", "");
            };
        const tablinks = document.getElementsByClassName('detail-tab__link');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
            };
        document.getElementById(text).className += " flex";
        e.currentTarget.className += " activeTab";
    };

    return(
        <div className="p-adoptions-detail">
            <div className="p-adoptions-detail__title-div">    
                <Link to="/adoptions"><img src={iconBack} alt="" className="p-adoptions-detail__title-div__img"/></Link>
                <h1 className="p-adoptions-detail__title-div__title">Adopción de {pet.name}</h1>
            </div>

            <div className="detail-tab">
                <div className="detail-tab__link activeTab" onClick={(e) => handleClick(e, 'resumen')}>Resumen</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'info')}>Info Adicional</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'adoption')}>Adopción</div>
            </div>

            <div id="resumen" className="p-adoptions-detail__main flex">
                <ResumenTab name={pet.name} city={pet.city} gender={pet.gender} img={pet.img} id={pet.id} asociation={pet.asociation} address={pet.asAddress}></ResumenTab>
            </div>
            <div id="info" className="p-adoptions-detail__main">
                INFO
            </div>
            <div id="adoption" className="p-adoptions-detail__main">
                ADOPCION
            </div>
        </div>
    );
}