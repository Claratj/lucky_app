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
        <section className="container">

            <div className="container-welcome">
              <h3 className="container-welcome__h3">¡Hola Celia!</h3>
            </div>
            {/* <BootstrapCarousel /> */}
        <div className="container-img">
          <p className="container-img__title">Novedades</p>
                <figure className="container-img__figure">
                    <img className="container-img__img" src={chinchillas}/>
                    <p className="container-img__p">10 curiosidades sobre las chichillas.</p>    
                </figure>

                <figure className="container-img__figure">
                    <img className="container-img__img" src={iguana} />
                  <p className="container-img__p">¿Sabes qué comen las iguanas?</p>  
                </figure>

                <figure className="container-img__figure">
                    <img className="container-img__img" src={perroMotero} />
                  <p className="container-img__p">10 lugares para visitar con tu perro en Madrid.</p>  
                </figure>

            </div>
            <Footer />
        </section>
    )
}
export default HomePage;