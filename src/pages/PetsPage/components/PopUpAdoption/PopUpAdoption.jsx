import React, { useContext} from 'react'
import PopUp from '../../../../shared/PopUp/PopUp'
import video from '../../../../assets/video/adopcion'
import './PopUpAdoption.scss'
import { PopUpContext } from '../../../../shared/Context/PopUpContext';
import poster from '../../../../assets/img/logo.png'


export default function PopUpAdoption() {
    
    const {show, setShow} = useContext(PopUpContext);
    
    const setDisable = ()=>{
        const contin = document.querySelector('.c-popupAdoption__continue');
        contin.disabled = false;
    }

    const play = ()=>{
        const video = document.querySelector('video');
        const btnPlay = document.querySelector('.btn-play');
        if (video != null) {
            video.play();
            if (video.play()) {
                btnPlay.style.visibility = 'hidden';
            }else{
                
            } 
            
        }
               
    }

    const stopVideo = ()=>{
        const video = document.querySelector('video');
        const btnPlay = document.querySelector('.btn-play');
        video.load();
        btnPlay.style.visibility = 'visible';
    }
    
    
    return (
        
        <div className="c-popupAdoption">
        
            <PopUp onClose={()=> setShow(false)} show={show} title="Solicitud de adopción">
                <p className="c-popupAdoption__parra">Adoptar es un acto de amor, pero sobre todo responsabilidad de por vida</p><br></br>
                <p className="c-popupAdoption__parra">Por éste motivo es importante que veas el siguiente video donde te explicamos como va a ser todo el proceso de adopción</p>
                <video src={video} poster={poster} onEnded={()=> setDisable()} className="c-popupAdoption__video"></video>
                <button onClick={()=>play()} className="btn-play">▶</button>
                <h5 className="c-popupAdoption__quest">¿Quieres continuar con el proceso de adopción?</h5>
                <div className="c-popupAdoption__button">
                <button onClick={()=> {setShow(false); stopVideo()}} className="c-popupAdoption__cancel">Cancelar</button>
                <button  disabled className="c-popupAdoption__continue">Continuar</button>
                </div>
            </PopUp>

        
        </div>
    )
}
