import React from 'react';

import protectora from '../../../../../assets/img/protectora.png';
import location from '../../../../../assets/img/localization-a.svg';

import './AddressCard.scss';

export function AddressCard(props){
    return(
        <div className="title">
            <img src={protectora} alt="" className="title__img"/>
            <div className="title__copy">
                <p className="title__copy__title s-body-2">{props.organization}</p>
                <p><img src={location} alt="" className="title__copy__img"/>{props.address}</p>
            </div>
        </div>
    );
}



