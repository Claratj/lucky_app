import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';

import iconBack from '../../../../assets/img/atras.png';

import './AdoptionsDetailPage.scss';
import '../../../../styles/elements/_tab.elements.scss';
import { ResumenTab } from './components/ResumenTab';
import { InfoTab } from './components/InfoTab';
import { AdoptionTab } from './components/AdoptionTab';
import { API } from '../../../../shared/consts/api.consts';


export function AdoptionsDeatilPage() {

    const history = useHistory(); // para volver atrás
    // aquí recogemos por param el id de la mascota y mostramos sus datos de adopción

    const [pet, setPet] = useState({
        images:[],
        shelter: {}
    });
        
    const param = useParams();
    const petId = param.id;  
  
    const getPet = () =>{
        API.get('/pet/' + petId).then((results)=> {
        setPet(results.data.result);
        console.log(results.data.result);
        });
    }

    useEffect(getPet, []);

    console.log(pet);

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
                <img src={iconBack} alt="" className="p-adoptions-detail__title-div__img" onClick={() => history.goBack()}/>
                <h1 className="p-adoptions-detail__title-div__title">Adopción de {pet.name}</h1>
            </div>

            <div className="detail-tab">
                <div className="detail-tab__link activeTab" onClick={(e) => handleClick(e, 'resumen')}>Resumen</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'info')}>Info Adicional</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'adoption')}>Adopción</div>
            </div>
            <div id="resumen" className="p-adoptions-detail__main flex">
                <ResumenTab name={pet.name} city={pet.city} gender={pet.gender} img={pet.images[0]} id={pet._id} organization={pet.shelter.name} address={pet.shelter.address} email={pet.shelter.email}></ResumenTab>
            </div>
            <div id="info" className="p-adoptions-detail__main">
                <InfoTab></InfoTab>
            </div>
            <div id="adoption" className="p-adoptions-detail__main">
                <AdoptionTab organization={pet.shelter.name} address={pet.shelter.address}></AdoptionTab>
            </div>
        </div>
    );
}