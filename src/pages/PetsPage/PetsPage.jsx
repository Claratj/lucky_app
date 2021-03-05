import React from 'react';
import SearchBar from '../../shared/SearchBar/SearchBar';
import PetsGallery from './components/PetsGallery/PetsGallery';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../assets/img/arrow-r.png';
import more from '../../assets/img/more.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function PetsPage(props) {
    return (
        <div>
            <SearchBar></SearchBar>
            <Link to="" className="c-pets-page__mypets">Mis mascotas <img src={more} alt="" /></Link>
            <Swiper spaceBetween={50} slidesPerView={1} pagination={{ clickable: true, clickableClass:'swiper-pagination-clickable pets', bulletClass: 'swiper-pagination-bullet pets'}}>
            <SwiperSlide><img src="" alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
            <SwiperSlide><img src="" alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
            <SwiperSlide><img src="" alt="" className="c-petsDetailPage__imgswiper"></img></SwiperSlide>
        </Swiper>
            <Link to="" className="c-card-menu__link">Estado de la adopción<img src={arrow} alt=""/></Link>
            <PetsGallery></PetsGallery>
        </div>
    )
}
