import React, {useState} from "react";

import "./PopUpFormSent.scss";
import PopUp from "../../../../shared/PopUp/PopUp";
import img from "../../../../assets/img/undrawPlayfulCatRchv@3x.png";
import { Redirect } from "react-router";

export function PopUpFormSent() {

    const [show, setShow] = useState(true);

    const closePopUp = () => {
<<<<<<< HEAD
        setShow(false);
        return <Redirect to="/"/>
=======
        setShow(false);        
>>>>>>> 42a37cdcfbee59198d08b6bc66b6ef46ef197984
    }

    return (
        <PopUp show={show}>
            <p className={"c-popup-form-sent__close"} onClick={closePopUp}>x</p>
            <div className={"c-popup-form-sent__content"}>
                <p className={"s-text-style-5"}>¡Enviado!</p>
                <p>Hemos enviado tu formulario a la protectora. Si quieres ponerte en contacto con ellos puedes hacerlo vía email o whatsapp</p>
                <p>Recuerda que la protectora se pondrá en contacto contigo para poder hacer la entrevista personal</p>
                <img src={img} alt={"¡Enviado!"} className={"c-popup-form-sent__img"}/>
            </div>
            {!show && 
                <Redirect to="/home"></Redirect> 
            }
        </PopUp>
    )
}