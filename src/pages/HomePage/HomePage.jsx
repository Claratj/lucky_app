import React, { useEffect, useState } from 'react';
import '../../core/Footer/Footer';
import './HomePage.scss';
//import BootstrapCarousel from './Carousel/BootstrapCarousel';
import chinchillas from '../../assets/img/imgHomePage/chinchillas.png';
import iguana from '../../assets/img/imgHomePage/iguana.png';
import perroMotero from '../../assets/img/imgHomePage/perroMotero.png';
import Footer from '../../core/Footer/Footer';
import { API } from '../../shared/consts/api.consts';

export function HomePage() {
  const [news, setNews] = useState([]);
  
  const getNews = () =>{
    API.get('/news').then((results)=> {
    setNews(results.data.results);
    });
  }

  useEffect(getNews, []);
  console.log(news);
    return (
        <div className="container flex flex-column align-items-center">
          <div className="welcome">
            <h3 className="welcome__title s-text-style-5">¡Hola Celia!</h3> 
          </div>
            {/* <BootstrapCarousel /> */}
          <div>
              CARRUSEL
          </div>
          <div className="main">
            <p className="main__title s-body-2">Novedades</p>
            {news.map((obj) =>
            <article className="main__article">
              <img className="main__article__img" src={chinchillas} alt=""/>
              <p className="main__article__title">{obj.title}</p>    
            </article>
            )}
          </div>
          <Footer />
      </div>
    )
}

export default HomePage;