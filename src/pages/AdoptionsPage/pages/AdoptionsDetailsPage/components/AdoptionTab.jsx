import React from 'react';
import { AddressCard } from './AddressCard';

import './AdoptionTab.scss';

export function AdoptionTab(props){
    return(
        <div className="flex flex-column align-items-center tab">
            <p className="s-body-2">Dirección</p>
            <AddressCard organization={props.organization} address={props.address}></AddressCard> 
            <button className="c-button c-button__red">Enviar</button>
        </div>
    );
}

