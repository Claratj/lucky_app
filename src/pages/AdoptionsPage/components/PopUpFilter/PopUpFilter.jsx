import React, { useContext } from 'react';
import { PopUpContext } from '../../../../shared/Context/PopUpContext';
import PopUp from '../../../../shared/PopUp/PopUp';

export function PopUpFilter(props) {
    const {pop, setPop} = useContext(PopUpContext);

    // const closePopUp = () => {
    //     setPop(false);
    // }
    return(
        <PopUp show={pop} onClose={props.onClose}>
        <div>
        hola
        </div>
        </PopUp>
    );
}