import React, {useState} from 'react';

import {ReactComponent as DropDown} from '../../../../assets/img/icons-fixed/svg/desplegable.svg';
import './MapsPageLocation.scss';

export function MapsPageLocation(props) {
    const [showAll, setShowAll] = useState(false);
    const [showOpinions, setShowOpinions] = useState(false);

    const dropdownAll = () => {
        showAll ? setShowAll(false) : setShowAll(true);
    }

    const dropdownOpinions = () => {
        showOpinions ? setShowOpinions(false) : setShowOpinions(true);
    }

    return (
        <div className={"c-location"} id={`locations-${props.id}`}>
            <div className={"c-location__header"}>
                <p className={"s-body-2"}>{props.location.name}</p>
                <DropDown style={{transform: showAll ? "rotate(0)" : "rotate(180deg)", marginTop: "-0.7rem"}}
                          fill={"#E08888"}
                          onClick={dropdownAll}/>
            </div>
            {showAll && <div className={"c-location__body"}>
                <div className={"c-location__data"}>
                    {props.location.img && <div>
                        <img src={props.location.img} alt={props.location.name} className={"c-location__img"}/>
                    </div>}
                    <div className={"c-location__data-text"}>
                        <p className={"s-body-2"}>Puntuación</p>
                        <div className={"c-location__score"}>
                            <p className={"s-text-style-4"}>{props.location.score}</p>
                            <span className={"icon-paw-print"}
                                  style={props.location.score > 0.5 ? {color: '#E08888'} : {color: '#2d2d2d'}}/>
                            <span className={"icon-paw-print"}
                                  style={props.location.score > 1.5 ? {color: '#E08888'} : {color: '#2d2d2d'}}/>
                            <span className={"icon-paw-print"}
                                  style={props.location.score > 2.5 ? {color: '#E08888'} : {color: '#2d2d2d'}}/>
                            <span className={"icon-paw-print"}
                                  style={props.location.score > 3.5 ? {color: '#E08888'} : {color: '#2d2d2d'}}/>
                            <span className={"icon-paw-print"}
                                  style={props.location.score > 4.5 ? {color: '#E08888'} : {color: '#2d2d2d'}}/>
                        </div>
                        <div className={"c-location__address"}>
                            <p className={"s-text-style-2"}>{props.location.address1}</p>
                            <p className={"s-text-style-2"}>{props.location.address2}</p>
                        </div>
                    </div>
                </div>
                {props.location.opinions && <div className={"c-location__opinions"}>
                    <div className={"c-location__opinions-header"}>
                        <p className={"s-body-2"}>Opiniones</p>
                        <DropDown
                            style={{transform: showOpinions ? "rotate(0)" : "rotate(180deg)", marginTop: "-0.7rem"}}
                            fill={"#E08888"}
                            onClick={dropdownOpinions}/>
                    </div>
                    <div className={"c-location__opinions-content"}>
                        {showOpinions && props.location.opinions.map((opinion, i) => <div
                            className={"c-location__opinion"} key={i}>
                            <img src={opinion.img} alt={"Opinión"} className={"c-location__opinion-image"}/>
                            <p className={"c-location__opinion-text"}>{`"${opinion.text}"`}</p>
                        </div>)}
                    </div>
                </div>}
                <p className={"s-body-2"}>¿Has estado alguna vez aquí?</p>
                <textarea className={"c-location__textarea"} placeholder={"Cuéntanos tu experiencia"}/>
                <button className={"c-button__pink"}>Enviar</button>
            </div>}
        </div>
    )
}