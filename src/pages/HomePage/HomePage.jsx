import React from 'react';
import '../../core/Footer/Footer';
import './HomePage.scss';
//import BootstrapCarousel from './Carousel/BootstrapCarousel';
import chinchillas from '../../assets/img/imgHomePage/chinchillas.png';
import iguana from '../../assets/img/imgHomePage/iguana.png';
import perroMotero from '../../assets/img/imgHomePage/perroMotero.png';
import Footer from '../../core/Footer/Footer';

export function HomePage() {
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
            <article className="main__article">
              <img className="main__article__img" src={chinchillas} alt=""/>
              <p className="main__article__title">10 curiosidades sobre las chichillas.</p>    
            </article>

            <article className="main__article">
              <img className="main__article__img" src={iguana} alt=""/>
              <p className="main__article__title">¿Sabes qué comen las iguanas?</p>  
            </article>

            <article className="main__article">
              <img className="main__article__img" src={perroMotero} alt=""/>
              <p className="main__article__title">10 lugares para visitar con tu perro en Madrid.</p>  
            </article>
          </div>
          <Footer />
      </div>
    )
}

export default HomePage;