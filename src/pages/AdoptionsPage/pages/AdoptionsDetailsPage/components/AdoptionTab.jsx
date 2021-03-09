import React, { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { MenuItem, TextField } from '@material-ui/core';
import localization from 'moment/locale/es';
import moment from 'moment';
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";

import { AddressCard } from './AddressCard';
import { PopUpAdoptionSent } from './PopUpAdoptionSent/PopUpAdoptionSent';

import { PopUpContext } from '../../../../../shared/Context/PopUpContext';

import { API } from '../../../../../shared/consts/api.consts';

import calendar from '../../../../../assets/img/calendar-r.svg';

import './AdoptionTab.scss';
import MapStyles from '../../../../MapsPage/components/MapStyles';

export function AdoptionTab(props){
    const [show, setShow] = useState(false);
    const [pop, setPop] = useState(false);
    const [data, setData] = useState({
        petId: petId
    });

    const param = useParams();
    const petId = param.petId; 

    const dropdown = () => {
        show ? setShow(false) : setShow(true);
    }

    const today = moment(new Date());
    moment.locale('es', localization);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }      

    const handleInputChange=(e)=>{
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value});
    }

    const onSubmit = () => { // enviamos la info de la visita a la API
        API.post('/visit', data).then(() => {
        });
        setPop(true);
    }
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

        <div className="container flex flex-column align-items-center tab">
        <div className="tab__address">        
            <p className="s-body-2 tab__copy">Dirección</p>
            <AddressCard organization={props.organization} address={props.address}></AddressCard> </div>
            {isLoaded && <div className={"tab__map"}>
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
            <form noValidate className="appointment-form">
                <label className="s-body-2 tab__copy tab__copy--top">Día</label>
                {!show &&
                <div onClick={dropdown} className="date-container">
                
                {capitalizeFirstLetter(today.format('dddd, DD MMM'))}
                <img src={calendar} alt="" className="date-container__img"/>
                </div>}
                {show && <TextField
                    id="date"
                    name="date"
                    type="date"
                    defaultValue={new Date()}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleInputChange}
                />}
                <label className="s-body-2 tab__copy tab__copy--top">Hora</label>
                <TextField name="time" label="¿A qué hora puedes venir?" defaultValue="9.00h" select onChange={handleInputChange}>
                    <MenuItem value="9">9.00h</MenuItem>
                    <MenuItem value="10">10.00h</MenuItem>
                    <MenuItem value="11">11.00h</MenuItem>
                    <MenuItem value="12">12.00h</MenuItem>
                    <MenuItem value="13">13.00h</MenuItem>
                    <MenuItem value="14">14.00h</MenuItem>
                    <MenuItem value="17">17.00h</MenuItem>
                    <MenuItem value="18">18.00h</MenuItem>
                    <MenuItem value="19">19.00h</MenuItem>
                </TextField>
            </form>
            <button className="c-button c-button__red c-button__red--mtop" onClick={onSubmit}>Enviar</button>
            <PopUpContext.Provider value={{pop, setPop}}>
            <PopUpAdoptionSent show={pop}></PopUpAdoptionSent>
            </PopUpContext.Provider>
        </div>
    );
}

