import React from 'react';

import './MapsPage.scss';
import Footer from "../../core/Footer/Footer";
import {MapsPageLocation} from "./components/MapsPageLocation/MapsPageLocation";

export function MapsPage() {
    const locations = [
        {
            name: 'Clínica Veterinaria Don Can',
            img: 'https://mivetclinicas.com/wp-content/uploads/2019/04/Don-Can-fachada.png',
            score: 4.45,
            address1: 'Calle de Cristóbal Bordiu, 27',
            address2: '28003 Madrid',
            opinions: [
                {
                    img: 'https://ak.picdn.net/shutterstock/videos/6977578/thumb/1.jpg',
                    text: "Cuidan de mis perros desde hace 25 años, increíbles, profesionales y cariñosos",
                },
                {
                    img: 'https://previews.123rf.com/images/madrolly/madrolly2007/madrolly200700045/150607838-person-looking-over-the-shoulder-straw-hat-on-a-girl-that-is-watching-behind-her-woman-turning-aroun.jpg',
                    text: "Excelente trato a los perros y a los dueños muy recomendable"
                }
            ]
        },
        {
            name: 'Hospital veterinario Retiro',
            img: 'https://t1.ea.ltmcdn.com/es/places/8/3/5/img_5538_hospital-veterinario-retiro_0_orig.jpg',
            score: 4.1,
            address1: 'Av. de Menéndez Pelayo, 9',
            address2: '28009 Madrid',
            opinions: [

            ]
        },
        {
            name: 'Centro Veterinario Los Sauces',
            img: 'https://cvsauces.com/nuevo/wp-content/uploads/2014/10/saucesss.jpg',
            score: 4.4,
            address1: 'Calle de Sta Engracia, 63',
            address2: '28010 Madrid',
            opinions: [

            ]
        }
    ]

    return(
        <div className={"p-maps-page"}>
            <div className={"container"}>
                {locations.map((location, i) => <MapsPageLocation key={i} location={location}/>)}
            </div>
            <Footer/>
        </div>
    )
}