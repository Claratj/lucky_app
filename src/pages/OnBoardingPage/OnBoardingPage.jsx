import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import imgSitios from '../../assets/img/boarding-sitios.svg';
import imgAdopt from '../../assets/img/boarding-adoptar.svg';
import imgAso from '../../assets/img/boarding-asociaciones.svg';
import './OnBoardingPage.scss';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export function OnBoardingPage() {


  return (
    <div className="base-c">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}>

        <SwiperSlide>
          <figure className="fig-c">
            <img className="fig-c__img" src={imgSitios}></img>
            <p className="fig-c__text">Adopta desde tu móvil</p>
            <p className="fig-c__sub-text">Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="fig-c">
            <img className="fig-c__img" src={imgAdopt}></img>
            <p className="fig-c__text">Encuentra todo tipo de servicios que tienes cerca de ti</p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="fig-c">
            <img className="fig-c__img" src={imgAso}></img>
            <p className="fig-c__text">Si eres una asociación sube a tus peludos para darles más difusión</p>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}