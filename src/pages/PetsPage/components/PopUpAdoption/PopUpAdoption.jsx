import React, { useEffect, useState } from 'react'
import PopUp from '../../../../shared/PopUp/PopUp'
import video from '../../../../assets/video/adopcion'
import './PopUpAdoption.scss'


export default function PopUpAdoption(props) {
    
    const [show, setShow] = useState(true);
    
    
    const setDisable = ()=>{
        const video = document.querySelector('.c-popupAdoption__continue');
        video.disabled = false;
    }

    const play = ()=>{
        const video = document.querySelector('video');
        const btnPlay = document.querySelector('.btn-play');
        if (video != null) {
            video.play(); 
            btnPlay.style.visibility = 'hidden';
        }
               
    }
    useEffect(()=>{
        setShow(props.show)
    }, [props.show])
    
    return (
        
        <div className="c-popupAdoption">
        
            <PopUp onClose={()=> setShow(false)} show={show} title="Solicitud de adopción">
                <p className="c-popupAdoption__parra">Adoptar es un acto de amor, pero sobre todo responsabilidad de por vida</p><br></br>
                <p className="c-popupAdoption__parra">Por éste motivo es importante que veas el siguiente video donde te explicamos como va a ser todo el proceso de adopción</p>
                <video src={video} onEnded={()=> setDisable()} className="c-popupAdoption__video"></video>
                <button onClick={()=>play()} className="btn-play">▶</button>
                <h5 className="c-popupAdoption__quest">¿Quieres continuar con el proceso de adopción?</h5>
                <div className="c-popupAdoption__button">
                <button onClick={()=> setShow(false)} className="c-popupAdoption__cancel">Cancelar</button>
                <button  disabled className="c-popupAdoption__continue">Continuar</button>
                </div>
            </PopUp>
           
        </div>
    )
}
