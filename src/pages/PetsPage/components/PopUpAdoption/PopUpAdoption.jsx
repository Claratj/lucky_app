import React, { useEffect, useState } from 'react'
import PopUp from '../../../../shared/PopUp/PopUp'
import video from '../../../../assets/video/adopcion'

export default function PopUpAdoption(props) {
    
    const [show, setShow] = useState();
    
    const setDisable = ()=>{
        const video = document.querySelector('.button-continue');
        video.disabled = false;
    }

    useEffect(()=>{
        setShow(props.show)},[show])
    return (
        
        <div>
            <PopUp onClose={()=> setShow(false)} show={show} title="Solicitud de adopción">
                <p>Adoptar es un acto de amor, pero sobre todo responsabilidad de por vida</p>
                <p>Por éste motivo es importante que veas el siguiente video donde te explicamos como va a ser todo el proceso de adopción</p>
                <video src={video} controls width="250" height="250" onEnded={()=> setDisable()}></video>
                <h5>¿Quieres continuar con el proceso de adopción?</h5>
                <button onClick={()=> setShow(false)}>Cancelar</button>
                <button className="button-continue" disabled>Continuar</button>
            </PopUp>
        </div>
    )
}
