import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ResumenTab } from './components/ResumenTab';
import { InfoTab } from './components/InfoTab';
import { AdoptionTab } from './components/AdoptionTab';

import { LoadingContext } from '../../../../core/Loading/contexts/LoadingContext';

import { API } from '../../../../shared/consts/api.consts';

import iconBack from '../../../../assets/img/atras.png';

import './AdoptionsDetailPage.scss';
import '../../../../styles/elements/_tab.elements.scss';

export function AdoptionsDeatilPage() {

    const [pet, setPet] = useState({
        images:[],
        adoption: {},
        shelter: {}
    });
    
    const {setIsLoading} = useContext(LoadingContext);

    const history = useHistory(); 
        
    const param = useParams();
    const petId = param.id;  
  
    const getPet = () =>{
        setIsLoading(true);
        API.get('/pet/' + petId).then((results)=> {
            setIsLoading(false);
            setPet(results.data.result);
            console.log(results.data.result);
        });
    }

    useEffect(getPet, []);

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
                <ResumenTab name={pet.name} city={pet.city} gender={pet.gender} img={pet.images[0]} id={pet._id} organization={pet.shelter.name} address={pet.shelter.address} email={pet.shelter.email} phone={pet.shelter.phone} lat={pet.shelter.lat} long={pet.shelter.long}/>
            </div>
            <div id="info" className="p-adoptions-detail__main">
                <InfoTab price={pet.adoption.rates}/>
            </div>
            <div id="adoption" className="p-adoptions-detail__main">
                <AdoptionTab organization={pet.shelter.name} address={pet.shelter.address} lat={pet.shelter.lat} long={pet.shelter.long}/>
            </div>
        </div>
    );
}