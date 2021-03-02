import React, { useState } from 'react'
import image1 from '../../../assets/img/chinchilla.jpg';
import image2 from '../../../assets/img/chinchilla.jpg';
import image3 from '../../../assets/img/chinchilla.jpg';
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
import { Link } from 'react-router-dom';
import { PopUpContext } from '../../../shared/Context/PopUpContext';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function PetsDetailPage() {
    const pets = 
        {name: 'Kiwi', img1: image1, img2: image2, img3: image3, location: 'Madrid', km: '1.3km', like: false};
    
    const [show, setShow] = useState(false);
    

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
          <SwiperSlide><img src={image1} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
          <SwiperSlide><img src={image1} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
          <SwiperSlide><img src={image1} alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
        </Swiper>

        <div className="mini-tab">
          <img src={maleIcon} alt="" className="mini-tab__gender"></img>
          <div className="mini-tab__date">
            <h5 className="mini-tab__name">{pets.name}</h5>
            <p>{pets.location}</p>
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
            <PopUpContext.Provider value={{show, setShow}}>
            <div id="datos" className="p-pets-detail__main flex">
                <ContentDate></ContentDate>
            </div>
            <div id="salud" className="p-pets-detail__main">
                <ContentHealth></ContentHealth>
            </div>
            <div id="adoption" className="p-pets-detail__main">
                <ContentAdoption></ContentAdoption>
            </div>
            </PopUpContext.Provider>
        </div>
            
        
    )
}
