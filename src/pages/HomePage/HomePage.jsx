import React from 'react';
import '../../core/Footer/Footer';
//import BootstrapCarousel from './Carousel/BootstrapCarousel';
import chinchillas from '../../assets/img/imgHomePage/chinchillas.png';
import iguana from '../../assets/img/imgHomePage/iguana.png';
import perroMotero from '../../assets/img/imgHomePage/perroMotero.png';
import Footer from '../../core/Footer/Footer';


export function HomePage() {
    return (
        <main>

            <div className="container-h3">
              <h3>Hola Celia!</h3>
            </div>
            {/* <BootstrapCarousel /> */}
            <div className="container-img">
                <figure>
                    <img src={chinchillas}/>
                    <p>10 curiosidades sobre las chichillas.</p>    
                </figure>

                <figure>
                    <img src={iguana} />
                  <p>¿Sabes qué comen las iguanas?</p>  
                </figure>

                <figure>
                    <img src={perroMotero} />
                  <p>10 lugares para visitar con tu perro en Madrid.</p>  
                </figure>

            </div>
            <Footer />
        </main>
    )
}
export default HomePage;