import React from 'react';

import './AdoptionCard.scss';

export function AdoptionCard(props) {
    return(
        <div className="c-adoption-card">
        <div>
            <h1>title</h1>
            {props.process && 
            <p>process</p>
            }
            
        </div>
        <div>
            <img src="" alt=""/>
            <ul>details</ul>
        </div>

        </div>
    );
}