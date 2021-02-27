import React from 'react';
import './PopUp.scss';



export default function PopUp(props) {

    

    return (
        
        <div className={`c-popUp ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="c-popUp__content" onClick={e => e.stopPropagation()}>
                <div className="c-popUp__header">
                    <h4 className="c-popUp__title">{props.title}</h4>
                </div>
                <div className="c-popUp__body">
                    {props.children}
                </div>
                <div className="c-popUp__footer">
                    {props.close}
                </div>
            </div>
        </div>
       
    )
}
