import React, {useState} from 'react';

import {ReactComponent as DropDown} from '../../../../assets/img/icons-fixed/svg/desplegable.svg';
import {ReactComponent as Score} from '../../../../assets/img/icons-fixed/svg/patitas.svg';
import './MapsPageLocation.scss';

export function MapsPageLocation(props) {
    const [showAll, setShowAll] = useState(false);

    const dropdown = () => {
        showAll ? setShowAll(false) : setShowAll(true);
    }

    return (
        <div className={"c-location"}>
            <div className={"c-location__header"}>
                <p className={"s-body-2"}>{props.location.name}</p>
                <DropDown style={{transform: showAll ? "rotate(0)" : "rotate(180deg)", marginTop: "-0.7rem"}}
                          fill={"#E08888"}
                          onClick={dropdown}/>
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
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}