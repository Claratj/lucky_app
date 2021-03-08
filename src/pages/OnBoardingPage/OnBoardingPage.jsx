import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import imgSitios from '../../assets/img/boarding-sitios.svg';
import imgAdopt from '../../assets/img/boarding-adoptar.svg';
import imgAso from '../../assets/img/boarding-asociaciones.svg';
import './OnBoardingPage.scss';
import { NavLink } from 'react-router-dom';
import { SplashContext } from './SplashContext/SplashContext';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export function OnBoardingPage() {
const {isSplash, setSplash} = useContext(SplashContext);

  const setSplashPage = ()=>{
    setSplash(true);
    setTimeout(() => {
      setSplash(false)
    }, 3800);
  }
  useEffect(setSplashPage, [])

  return (
    isSplash == false && <div className="base-c">
      <NavLink to={"/login"}>
        <div className="close">x</div>
      </NavLink>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        <SwiperSlide>
          <figure className="fig-c">
            <img className="fig-c__img" src={imgSitios} alt="Adopta desde tu móvil" />
            <p className="fig-c__text">Adopta desde tu móvil</p>
            <p className="fig-c__sub-text">Puedes acceder al perfil de muchos animales que están en adopción y filtrarlos para encontrar el que mejor se adapte a ti</p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="fig-c">
            <img className="fig-c__img" src={imgAdopt} alt="Encuentra" />
            <p className="fig-c__text">Encuentra todo tipo de servicios que tienes cerca de ti</p>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/login"} style={{ textDecoration: 'none' }}>
            <figure className="fig-c">
              <img className="fig-c__img" src={imgAso} alt="Asociaciones" />
              <p className="fig-c__text">Si eres una asociación sube a tus peludos para darles más difusión</p>
            </figure>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>

  )
}
