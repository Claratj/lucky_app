import React, { useContext, useEffect, useState } from 'react'
import favIcon from '../../../assets/img/favoritos.png';
import maleIcon from '../../../assets/img/male.png';
import sharedIcon from '../../../assets/img/compartir.png';
import iconBack from '../../../assets/img/atras.png';
import './PetsDetailPage.scss';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import ContentDate from '../components/ContentPetsTab/ContentDate';
import ContentHealth from '../components/ContentPetsTab/ContentHealth';
import ContentAdoption from '../components/ContentPetsTab/ContentAdoption';
import { Link, useParams } from 'react-router-dom';
import { PopUpContext } from '../../../shared/Context/PopUpContext';
import PopUpAdoption from '../components/PopUpAdoption/PopUpAdoption';
import { API } from '../../../shared/consts/api.consts';
import { LoadingContext } from '../../../core/Loading/contexts/LoadingContext';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function PetsDetailPage() {
    
    const [show, setShow] = useState(false);
    const [pet, setPet] = useState({images: [], species: [], data: [] });
    const  param  = useParams();
    const petId = param.id;

    const {setIsLoading} = useContext(LoadingContext);

    const getPets = ()=>{
        setIsLoading(true);
        API.get('/pet/' + petId).then((res)=>{
            setIsLoading(false);
            setPet(res.data.result);
            
        })
    }

    useEffect(getPets, []);
    

    function handleClick(e, text){
        
          const tabs = document.getElementsByClassName('p-pets-detail__main');
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

    
    return (
        <div className="c-petsDetailPage">
        
        <Link to="/pets"><img src={iconBack} alt="" className="c-petsDetailPage__back"/></Link>
        <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true, clickableClass:'swiper-pagination-clickable pets', bulletClass: 'swiper-pagination-bullet pets'}}>
        <SwiperSlide><img src={pet.images[0]} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
        <SwiperSlide><img src={pet.images[0]} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
        <SwiperSlide><img src={pet.images[0]} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
        </Swiper>

        <div className="mini-tab">
          <img src={maleIcon} alt="" className="mini-tab__gender"></img>
          <div className="mini-tab__date">
            <h5 className="mini-tab__name">{pet.name}</h5>
            <p>{pet.city}</p>
          </div>
          <div className="mini-tab__img">
          <img src={favIcon} alt="" className="mini-tab__fav" />
          <img src={sharedIcon} alt="" className="mini-tab__share"/>
          </div>
        </div>
            

            <div className="detail-tab">
                <div className="detail-tab__link activeTab" onClick={(e) => handleClick(e, 'datos')}>Datos</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'salud')}>Salud</div>
                <div className="detail-tab__link" onClick={(e) => handleClick(e, 'adoption')}>Adopción</div>
      
            </div>
            
            <div id="datos" className="p-pets-detail__main flex">
                <ContentDate pet={pet}></ContentDate>
            </div>
            <div id="salud" className="p-pets-detail__main">
                <ContentHealth pet={pet}></ContentHealth>
            </div>
            <div id="adoption" className="p-pets-detail__main">
                <ContentAdoption pet={pet}></ContentAdoption>
            </div>
            

        <PopUpContext.Provider value={{show, setShow}}>
        <div className="c-petsDetailPage__button">
        <button className="c-petsDetailPage__buttonAp">Apadrinar</button>
        <button className="c-petsDetailPage__buttonAdop" onClick={()=> setShow(true)}>Adoptar</button>
        <PopUpAdoption show={show}></PopUpAdoption>

        </div> 
        </PopUpContext.Provider>
        </div>   
        
    )
}
