import React, {useCallback, useEffect, useRef, useState} from 'react';

import './MapsPage.scss';
import Footer from "../../core/Footer/Footer";
import {MapsPageLocation} from "./components/MapsPageLocation/MapsPageLocation";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import MapStyles from './components/MapStyles';

export function MapsPage() {
    const locations = [
        {
            name: 'Clínica Veterinaria Don Can',
            img: 'https://mivetclinicas.com/wp-content/uploads/2019/04/Don-Can-fachada.png',
            score: 4.45,
            address1: 'Calle de Cristóbal Bordiu, 27',
            address2: '28003 Madrid',
            lat: 40.443150,
            lng: -3.699470,
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
            lat: 40.421300,
            lng: -3.679600,
            opinions: []
        },
        {
            name: 'Centro Veterinario Los Sauces',
            img: 'https://cvsauces.com/nuevo/wp-content/uploads/2014/10/saucesss.jpg',
            score: 4.4,
            address1: 'Calle de Sta Engracia, 63',
            address2: '28010 Madrid',
            lat: 40.434080,
            lng: -3.698580,
            opinions: []
        }
    ];

    const [center, setCenter] = useState({
        lat: 0,
        lng: 0,
    })
    const [inputValue, setInputValue] = useState('');

    const libraries = ['places'];

    const mapContainerStyle = {
        width: '100%',
        height: '33rem',
    }

    const options = {
        // styles: MapStyles,
        disableDefaultUI: true,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries,
    });

    const recalculateCenter = () => {
        let lat = 0;
        let lng = 0;

        for (let i = 0; i < locations.length; i++) {
            lat += locations[i].lat;
            lng += locations[i].lng;
        }

        setCenter({
            lat: lat / 3,
            lng: lng / 3,
        });
    }

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        recalculateCenter();
        mapRef.current = map;
    });

    return (
        <div className={"p-maps-page"}>
            <div className={"container"}>
                <div className={"p-maps-page__search"}>
                    <input className={"p-maps-page__search-bar"} placeholder={"¿Qué estás buscando?"} value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}/>
                    <p className={"p-maps-page__clear"} onClick={() => setInputValue('')}>x</p>
                </div>
                {isLoaded && <div className={"p-maps-page__map"}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14} options={options} onLoad={onMapLoad}>
                        {locations.map((location, i) => <Marker key={i}
                                                                position={{lat: location.lat, lng: location.lng}}
                                                                icon={{
                                                                    url: 'https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/F29C25E8-57BD-47CE-852F-0674F0EDD1D6.png',
                                                                    scaledSize: new window.google.maps.Size(32, 32),
                                                                }}/>)}
                    </GoogleMap>
                </div>}
                <div className={"p-maps-page__response"}>
                    {locations.map((location, i) => <MapsPageLocation key={i} location={location}/>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}