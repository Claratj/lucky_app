import React, { useState } from 'react';
import './InputImg.scss'
// import '../../assets/img/perrop-a.svg'

export default function InputImg(props) {
    const [checked, setChecked] = useState(false);


    const handleChecked = ({ target }) => {
        console.log(target);
        setChecked(target.checked);
    }


    let label = props.label;
    let img = props.img;

    // img = "../../assets/img/perrop-a.svg";


    return (

        <div className="c-input-img" >
            <input id={label} className="c-input-img__input" onChange={handleChecked} type="checkbox" alt="Submit" width="48" height="48" />
            <label for={label} className="c-input-img__label" ><img className="c-input-img__img" alt="" src={img} />{label}</label>
        </div>

    )
}






// className={`c-popUp ${props.show ? 'show' : ''}`} onClick={props.onClose}

