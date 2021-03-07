import React from 'react';
import { AdoptionCard } from '../../../components/AdoptionCard';

import email from '../../../../../assets/img/email-r.svg';
import whatsapp from '../../../../../assets/img/whatsapp-r.svg';

import './ResumenTab.scss';
import { AddressCard } from './AddressCard';
import { Link } from 'react-router-dom';
// import {Mailto} from 'react-mailto';

export function ResumenTab(props){
    return(
        <div className="container">
            <AdoptionCard name={props.name} city={props.city} gender={props.gender} img={props.img} id={props.id}></AdoptionCard>
                <hr className="e-resumenTab__hr"/>
                <div className="e-resumenTab__map">
                    <AddressCard organization={props.organization} address={props.address}></AddressCard> 
                    <div className="e-resumenTab__map__map">
                        MAP
                    </div>
                    <div className="e-resumenTab__map__contact">
                        <p className="e-resumenTab__map__contact__copy">Contacta con nosotros</p>
                        <Link mailto={props.email} obfuscate={true}><img src={email} alt="" className="e-resumenTab__map__contact__logo"/></Link>                        
                        <Link><img src={whatsapp} alt="" className="e-resumenTab__map__contact__logo"/></Link>
                    </div>
                </div>
        </div>
    );
}



                