import React from 'react'
import image1 from '../../../assets/img/chinchilla.jpg';
import image2 from '../../../assets/img/chinchilla.jpg';
import image3 from '../../../assets/img/chinchilla.jpg';
import favIcon from '../../../assets/img/favoritos.png';
import PetsTab from '../components/PetsTab/PetsTab';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


export default function PetsDetailPage() {
    const pets = [
        {name: 'Kiwi', img1: image1, img2: image2, img3: image3, location: 'Madrid', km: '1.3km', like: false},
        {name: 'Blue', img1: image1, img2: image2, img3: image3, location: 'Madrid', km: '1.5km', like: false},
        {name: 'Charlie', img1: image1, img2: image2, img3: image3, location: 'Madrid', km: '13km', like: false},
        
    ];
    return (
        <div className="c-petsDetailPage">
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={image1} style={{width:'400px'}}></img></SwiperSlide>
      <SwiperSlide><img src={image1} style={{width:'400px'}}></img></SwiperSlide>
      <SwiperSlide><img src={image1} style={{width:'400px'}}></img></SwiperSlide>
     
      ...
    </Swiper>
            <h3>Detail</h3>
            <PetsTab></PetsTab>
        </div>
    )
}
