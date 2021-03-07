import { MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { AddressCard } from './AddressCard';
import localization from 'moment/locale/es'
import calendar from '../../../../../assets/img/calendar-r.svg';

import './AdoptionTab.scss';
import moment from 'moment';

import { API } from '../../../../../shared/consts/api.consts';
import { useParams } from 'react-router';

import { PopUpContext } from '../../../../../shared/Context/PopUpContext';
import { PopUpAdoptionSent } from './PopUpAdoptionSent/PopUpAdoptionSent';

export function AdoptionTab(props){
    const [show, setShow] = useState(false);
    const [pop, setPop] = useState(false);

    const param = useParams();
    const petId = param.petId; 

    const [data, setData] = useState({
        petId: petId
    });

    const dropdown = () => {
        show ? setShow(false) : setShow(true);
    }

    const today = moment(new Date());
    console.log(today);
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

    return(

        <div className="container flex flex-column align-items-center tab">
        <div className="tab__address">        
            <p className="s-body-2 tab__copy">Dirección</p>
            <AddressCard organization={props.organization} address={props.address}></AddressCard> </div>
            MAP
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

