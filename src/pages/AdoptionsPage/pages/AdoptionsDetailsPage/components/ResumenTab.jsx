import React from 'react';
import { AdoptionCard } from '../../../components/AdoptionCard';

import email from '../../../../../assets/img/email-r.svg';
import whatsapp from '../../../../../assets/img/whatsapp-r.svg';

import './ResumenTab.scss';
import { AddressCard } from './AddressCard';

export function ResumenTab(props){
    return(
        <div className="e-resumenTab">
            <AdoptionCard name={props.name} city={props.city} gender={props.gender} img={props.img} id={props.id}></AdoptionCard>
                <hr className="e-resumenTab__hr"/>
                <div className="e-resumenTab__map">
                    <AddressCard ownerName={props.ownerName} address={props.address}></AddressCard> 
                    <div className="e-resumenTab__map__map">
                        MAP
                    </div>
                    <div className="e-resumenTab__map__contact">
                        <p className="e-resumenTab__map__contact__copy">Contacta con nosotros</p>
                        <img src={email} alt="" className="e-resumenTab__map__contact__logo"/>
                        <img src={whatsapp} alt="" className="e-resumenTab__map__contact__logo"/>
                    </div>
                </div>
        </div>
    );
}



                