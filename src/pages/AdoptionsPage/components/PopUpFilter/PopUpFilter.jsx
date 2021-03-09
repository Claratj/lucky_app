import React, { useContext } from 'react';

import PopUp from '../../../../shared/PopUp/PopUp';

import { PopUpContext } from '../../../../shared/Context/PopUpContext';

import './PopUpFilter.scss';

export function PopUpFilter(props) {
    const {pop, setPop} = useContext(PopUpContext);

    return(
        <PopUp show={pop} onClose={props.onClose}>
        <div className="c-app-filter">
            <p className="s-text-style">Filtros</p>            
            <div className="flex justify-context-center align-items-center c-app-filter__filter">
            <input 
                id='accepted' 
                name='accepted' 
                className="c-app-filter__input" 
                value='accepted' onClick={props.filter} 
                type="checkbox" alt="Submit" />
                <label htmlFor='accepted' className="c-app-filter__label" >
                    <span className="icon-tick size" /> 
                    Completado
                    </label>

            <input 
                id='process' 
                name='process' 
                className="c-app-filter__input" 
                value='process' 
                onClick={props.filter} 
                type="checkbox" 
                alt="Submit" />
                <label htmlFor='process' className="c-app-filter__label" >
                    <span className="icon-stethoscope size" /> 
                    En proceso
                    </label>

            <input 
                id='rejected' 
                name='rejected' 
                className="c-app-filter__input" 
                value='rejected' 
                onClick={props.filter} 
                type="checkbox" alt="Submit" />
                <label htmlFor='rejected' className="c-app-filter__label" >
                    <span className="icon-cancel-1 size" /> 
                    Rechazado
                    </label>
            </div>
            <div>
                <button className="c-app-filter__btn" type="reset" onClick={props.clear}>Borrar filtros</button>
                <button className="c-app-filter__btn" type="submit" onClick={props.submit}>Aceptar</button>        
            </div>
        </div>
        </PopUp>
    );
}