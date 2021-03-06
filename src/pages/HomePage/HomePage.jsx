import React, { useEffect, useState } from 'react';
import '../../core/Footer/Footer';
import './HomePage.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../../core/Footer/Footer';
import { API } from '../../shared/consts/api.consts';
import Pet from '../../assets/img/mascota@2x.png';
import Apadrina from '../../assets/img/apadrina@2x.png';
import Donar from '../../assets/img/donar@2x.png';

export function HomePage() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [news, setNews] = useState([]);
  
  const getNews = () =>{
    API.get('/news').then((results)=> {
    setNews(results.data.results);
    });
  } 

  useEffect(getNews, []);
  console.log(news);
    return (
        <div className="container flex flex-column align-items-center home-page">
          <div className="welcome">
            <h3 className="welcome__title s-text-style-5">¡Hola Celia!</h3> 
          </div>
            <div className="c-home-page">
            <Swiper className="home"  
            spaceBetween={-10} 
            initialSlide={1} 
            slidesPerView={3} 
            centeredSlides={true} 
            pagination={{ clickable: true, clickableClass:'swiper-pagination-clickable home-page', bulletClass: 'swiper-pagination-bullet home-page'}}>
            
            <SwiperSlide className="home">
            <div className="c-home-page__item">
            <div><img src={Donar} alt="" className="c-home-page__imgswiper"></img></div>
            <div className="c-home-page__figcap"><h4>Donar a una protectora</h4><p className="c-home-page__par">Conoce que cosas puedes donar a una protectora</p> </div></div> 
            </SwiperSlide>
            
            <SwiperSlide className="home">
            <div className="c-home-page__item">
            <div><img src={Pet} alt="" className="c-home-page__imgswiper"></img></div>
            <div className="c-home-page__figcap"><h4>Estado de la adopcion</h4><p className="c-home-page__par">Revisa el proceso de tus adpciones en curso</p> </div></div> 
            </SwiperSlide>
            
            <SwiperSlide className="home">
            <div className="c-home-page__item">
            <div><img src={Apadrina} alt="" className="c-home-page__imgswiper"></img></div>
            <div className="c-home-page__figcap"><h4>Apadrina una mascota</h4><p className="c-home-page__par">Siempre puedes ayudar apadrinando una mascota </p> </div></div> 
            </SwiperSlide>

        </Swiper>
        </div>
          <div className="main">
            <p className="main__title s-body-2">Novedades</p>
            {news.map((obj) =>
            <article className="main__article">
              <img className="main__article__img" src={obj.img} alt=""/>
              <p className="main__article__title">{obj.title}</p>    
            </article>
            )}
          </div>
          <Footer></Footer>
      </div>
    )
}

export default HomePage;