import React from 'react';
import { AdoptionCard } from '../../../components/AdoptionCard';

import protectora from '../../../../../assets/img/protectora.png';
import location from '../../../../../assets/img/localization-a.svg';
import email from '../../../../../assets/img/email-r.svg';
import whatsapp from '../../../../../assets/img/whatsapp-r.svg';

import './ResumenTab.scss';

export function ResumenTab(props){
    return(
        <div className="e-resumenTab">
            <AdoptionCard name={props.name} city={props.city} gender={props.gender} img={props.img} id={props.id}></AdoptionCard>
                <hr className="e-resumenTab__hr"/>
                <div className="e-resumenTab__map">
                    <div className="e-resumenTab__map__title">
                        <img src={protectora} alt="" className="e-resumenTab__map__title__img"/>
                        <div className="e-resumenTab__map__title__copy">
                            <p className="e-resumenTab__map__title__copy__title s-body-2">{props.ownerName}</p>
                            <p><img src={location} alt="" className="e-resumenTab__map__title__copy__img"/>{props.address}</p>
                        </div>
                    </div>
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



                