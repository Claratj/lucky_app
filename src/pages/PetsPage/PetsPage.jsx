import React from 'react';
import PetsGallery from './components/PetsGallery/PetsGallery';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../assets/img/arrow-r.png';
import more from '../../assets/img/more.png';
import dog from '../../assets/img/perrop.png';
import bird from '../../assets/img/ave.png';
import iconFilter from '../../assets/img/filtros.png';
import SearchBarPets from './components/SearchBarPets/SearchBarPets';
import './PetsPage.scss';
import Footer from '../../core/Footer/Footer';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function PetsPage(props) {
    return (
        <div className="c-pets-page">
            <SearchBarPets></SearchBarPets>
            <Link to="" className="c-pets-page__link"><div className="c-pets-page__mypets"><h4>Mis mascotas</h4><img src={more} className="c-pets-page__more" alt="" /></div>  </Link>
            <p className="c-pets-page__par">Accede al perfil de tus mascotas</p>
            
            <Swiper className="pets"  
            spaceBetween={-100} 
            initialSlide={1} 
            slidesPerView={3} 
            centeredSlides={true} 
            pagination={{ clickable: true, clickableClass:'swiper-pagination-clickable pets-page', bulletClass: 'swiper-pagination-bullet pets-page'}}>
            
            <SwiperSlide className="pets">
            <div className="c-pets-page__item">
            <figure><img src={dog} alt="" className="c-pets-page__imgswiper"></img></figure>
            <figcaption className="c-pets-page__figcap">Apolo</figcaption></div> 
            </SwiperSlide>
            
            <SwiperSlide className="pets">
            <div className="c-pets-page__item">
            <figure><img src={bird} alt="" className="c-pets-page__imgswiper"></img></figure>
            <figcaption className="c-pets-page__figcap">Kiko</figcaption></div> 
            </SwiperSlide>
            
            <SwiperSlide className="pets">
            <div className="c-pets-page__item">
            <figure><img src={bird} alt="" className="c-pets-page__imgswiper"></img></figure>
            <figcaption className="c-pets-page__figcap">Dali</figcaption></div> 
            </SwiperSlide>

        </Swiper>

            <Link to="" className="c-pets-page__link">
            <div className="c-pets-page__state">
            <h4 className="c-pets-page__adoption">Estado de la adopción</h4>
            <img src={arrow} alt="" className="c-pets-page__img"/></div> 
            </Link>

            <div className="c-pets-page__petsadop">
                <h4 className="c-pets-page__titleadop">Animales en adopción</h4>
                <img className="c-pets-page__filter" src={iconFilter} alt=""/>
            </div>

            <PetsGallery></PetsGallery>
            <Footer></Footer>
        </div>
    )
}
