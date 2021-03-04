import React from 'react';
import { Link } from 'react-router-dom';

import './AdoptionCard.scss';

export function AdoptionCard(props) {
    return(
        <div className="c-adoption-card">
        <Link to={"/adoptions/pet/" + props.id} className="c-adoption-card__link">
        <div className="c-adoption-card__title">
            <p className="c-adoption-card__title__name">Adopción de {props.name}</p>
            {props.status && props.status === 'rejected' &&
                <p className="c-adoption-card__title__status c-adoption-card__title__status--red">Rechazado <div className="c-adoption-card__title__status__div c-adoption-card__title__status__div--red"></div></p>
            }  
            {props.status && props.status === 'process' &&
                <p className=" c-adoption-card__title__status c-adoption-card__title__status--orange">En proceso <div className="c-adoption-card__title__status__div c-adoption-card__title__status__div--orange"></div></p>
            }
            {props.status && props.status === 'accepted' &&
                <p className=" c-adoption-card__title__status c-adoption-card__title__status--green">Completado <div className="c-adoption-card__title__status__div c-adoption-card__title__status__div--green"></div></p>
            }             
        </div>
        <div className="c-adoption-card__details">
            <div className="c-adoption-card__details__img-div">
                <img src={props.img} alt="" className="c-adoption-card__details__img-div__img"/>
            </div>
            <div className="c-adoption-card__details__copy">
                <p>Nombre</p>
                <p>Ciudad</p>
                <p>Sexo</p>
            </div>
            <div className="c-adoption-card__details__copy c-adoption-card__details__copy--thin">
                <p>{props.name}</p>
                <p>{props.city}</p>
                <p>{props.gender}</p>
            </div>
        </div>
        </Link>
        </div>
    );
}