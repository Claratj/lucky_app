import React, { useContext, useEffect, useState } from 'react';
import '../../core/Footer/Footer';
import './HomePage.scss';
//import BootstrapCarousel from './Carousel/BootstrapCarousel';
import Footer from '../../core/Footer/Footer';
import { API } from '../../shared/consts/api.consts';
import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';

export function HomePage() {
  const {setIsLoading} = useContext(LoadingContext);
  const [news, setNews] = useState([]);
  
  const getNews = () =>{
    setIsLoading(true);
    API.get('/news').then((results)=> {
      setIsLoading(false);
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