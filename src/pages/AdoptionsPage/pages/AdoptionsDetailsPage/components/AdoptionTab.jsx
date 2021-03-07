import { MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { AddressCard } from './AddressCard';

import './AdoptionTab.scss';

export function AdoptionTab(props){

    const [selectedDate, setSelectedDate] = useState(new Date());

    const getDate = () => {
        setSelectedDate(Date.now());
        console.log(selectedDate);
    }

    useEffect(getDate, []);

    return(
        <div className="container flex flex-column align-items-center tab">
        <div className="tab__address">
            <p className="s-body-2 tab__copy">Dirección</p>
            <AddressCard organization={props.organization} address={props.address}></AddressCard> </div>
            MAP
            <form noValidate className="appointment-form">
                <label className="s-body-2 tab__copy tab__copy--top">Día</label>
                <TextField
                    id="date"
                    type="date"
                    defaultValue={selectedDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <label className="s-body-2 tab__copy tab__copy--top">Hora</label>
                <TextField id="hola" label="¿A qué hora puedes venir?" defaultValue="9.00h" select>
                    <MenuItem type="time" value="9">9.00h</MenuItem>
                    <MenuItem value="10">10.00h</MenuItem>
                </TextField>
            </form>
            <button className="c-button c-button__red c-button__red--mtop">Enviar</button>
        </div>
    );
}

