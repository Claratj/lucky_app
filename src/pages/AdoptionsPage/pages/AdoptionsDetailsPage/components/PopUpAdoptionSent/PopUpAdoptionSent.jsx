import React, {useContext} from "react";

import "./PopUpAdoptionSent.scss";
import PopUp from "../../../../../../shared/PopUp/PopUp";
import img from "../../../../../../assets/img/undrawNatureFunN9Lv1@3x.png";
import { PopUpContext } from "../../../../../../shared/Context/PopUpContext";

export function PopUpAdoptionSent() {

    const {pop, setPop} = useContext(PopUpContext);

    const closePopUp = () => {
        setPop(false);
    }

    return (
        <PopUp show={pop}>
            <p className={"c-popup-adoption-sent__close"} onClick={closePopUp}>x</p>
            <div className={"c-popup-adoption-sent__content"}>
                <p className={"s-text-style-5"}>¡Enviado!</p>
                <p className={"s-text-style-7"}>Ya hemos enviado toda la info a la protectora</p>
                <p className={"s-text-style-7"}>Recuerda que puedes ponerte en contacto con ellos en cualquier momento si necesitas cambiar algo</p>
                <img src={img} alt={"¡Enviado!"} className={"c-popup-adoption-sent__img"}/>
            </div>
        </PopUp>
    )
}