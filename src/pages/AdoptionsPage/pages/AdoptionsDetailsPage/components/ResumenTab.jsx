import React, { useCallback, useRef, useState } from 'react';
import { AdoptionCard } from '../../../components/AdoptionCard';

import email from '../../../../../assets/img/email-r.svg';
import whatsapp from '../../../../../assets/img/whatsapp-r.svg';

import './ResumenTab.scss';
import { AddressCard } from './AddressCard';
import { Link } from 'react-router-dom';
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";

import MapStyles from '../../../../MapsPage/components/MapStyles';
// import {Mailto} from 'react-mailto';

export function ResumenTab(props){

    const libraries = ['places'];
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries,
    });
    const location = {
            lat: props.lat,
            lng: props.long,
    }

    const mapContainerStyle = {
        width: '100%',
        height: '7rem',
    }
    
    const center = {
        lat: props.lat,
        lng: props.long
    }
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    });

    const options = {
        styles: MapStyles,
        disableDefaultUI: true,
    };


    return(
        <div className="container">
            <AdoptionCard name={props.name} city={props.city} gender={props.gender} img={props.img} id={props.id}></AdoptionCard>
                <hr className="e-resumenTab__hr"/>
                <div className="e-resumenTab__map">
                    <AddressCard organization={props.organization} address={props.address}></AddressCard> 

                    {isLoaded && <div className={"e-resumenTab__map--map"}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={16} options={options}
                               onLoad={onMapLoad}>

                        <Marker
                                                                position={{lat: location.lat, lng: location.lng}}
                                                                icon={{
                                                                    url: 'https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/F29C25E8-57BD-47CE-852F-0674F0EDD1D6.png',
                                                                    scaledSize: new window.google.maps.Size(32, 32),
                                                                    origin: new window.google.maps.Point(0, 0),
                                                                    anchor: new window.google.maps.Point(15, 15),
                                                                }}
                                                                />)}
                    </GoogleMap>
                </div>}

                    <div className="e-resumenTab__map__contact">
                        <p className="e-resumenTab__map__contact__copy">Contacta con nosotros</p>
                        <Link mailto={props.email} obfuscate={true}><img src={email} alt="" className="e-resumenTab__map__contact__logo"/></Link>                        
                        <Link><img src={whatsapp} alt="" className="e-resumenTab__map__contact__logo"/></Link>
                    </div>
                </div>
        </div>
    );
}



                