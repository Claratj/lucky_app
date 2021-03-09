import React, { useContext, useState } from 'react';
import { PopUpContext } from '../../../../shared/Context/PopUpContext';
import PopUp from '../../../../shared/PopUp/PopUp';

import '../../../PetsPage/components/FilterPets/FilterPets.scss';

export function PopUpFilter(props) {
    const {pop, setPop} = useContext(PopUpContext);

    const clearFilter = () => {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.disabled = false;
            input.checked = false;
        });
    }

    return(
        <PopUp show={pop} onClose={props.onClose}>
        <div>
            Filtros
            <input id='accepted' name='accepted' className="c-input-img__input" value='accepted' onClick={props.filter} 
            // onClick={inputSelected} 
            type="checkbox" alt="Submit" />
                        <label htmlFor='accepted' className="c-input-img__label" >
                            {/* <span className="icon-dog size" />  */}
                            Completado
                        </label>

            <input id='process' name='process' className="c-input-img__input" value='process' onClick={props.filter} 
            // onClick={inputSelected} 
            type="checkbox" alt="Submit" />
                        <label htmlFor='process' className="c-input-img__label" >
                            {/* <span className="icon-dog size" />  */}
                            En proceso
                        </label>

            <input id='rejected' name='rejected' className="c-input-img__input" value='rejected' onClick={props.filter} 
            // onClick={inputSelected} 
            type="checkbox" alt="Submit" />
                        <label htmlFor='rejected' className="c-input-img__label" >
                            {/* <span className="icon-dog size" />  */}
                            Rechazado
                        </label>
                        <button type="reset" onClick={clearFilter}>Borrar filtros</button>
                        <button type="submit" onClick={props.submit}>Enviar filtros</button>
        </div>
        </PopUp>
    );
}