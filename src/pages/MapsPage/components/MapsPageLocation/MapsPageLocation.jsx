import React, {useState} from 'react';

import {ReactComponent as DropDown} from '../../../../assets/img/icons-fixed/svg/desplegable.svg';
import {ReactComponent as Score} from '../../../../assets/img/icons-fixed/svg/patitas.svg';
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
        <div className={"c-location"}>
            <div className={"c-location__header"}>
                <p className={"s-body-2"}>{props.location.name}</p>
                <DropDown style={{transform: showAll ? "rotate(0)" : "rotate(180deg)", marginTop: "-0.7rem"}}
                          fill={"#E08888"}
                          onClick={dropdownAll}/>
            </div>
            {showAll && <div className={"c-location__body"}>
                <div className={"c-location__data"}>
                    <div>
                        <img src={props.location.img} alt={props.location.name} className={"c-location__img"}/>
                    </div>
                    <div className={"c-location__data-text"}>
                        <p className={"s-body-2"}>Puntuación</p>
                        <div className={"c-location__score"}>
                            <p className={"s-text-style-4"}>{props.location.score}</p>
                            {/*TODO Still need to add them paws*/}
                        </div>
                        <div className={"c-location__address"}>
                            <p className={"s-text-style-2"}>{props.location.address1}</p>
                            <p className={"s-text-style-2"}>{props.location.address2}</p>
                        </div>
                    </div>
                </div>
                <div className={"c-location__opinions"}>
                    <div className={"c-location__opinions-header"}>
                        <p className={"s-body-2"}>Opiniones</p>
                        {/*TODO Why won't you rotate?*/}
                        <DropDown style={{transform: showOpinions ? "rotate(0)" : "rotate(180deg)", marginTop: "-0.7rem"}}
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
                </div>
                <p className={"s-body-2"}>¿Has estado alguna vez aquí?</p>
                <textarea className={"c-location__textarea"} placeholder={"Cuéntanos tu experiencia"}/>
                <button className={"c-button__pink"}>Enviar</button>
            </div>}
        </div>
    )
}