import React, { useState } from 'react';
import './InputImg.scss'

export default function InputImg(props) {

    const [checked, setChecked] = useState(false);


    const handleChecked = ({ target }) => {
        console.log(target);
        setChecked(target.checked);
    }
    let color = '#E08888';
    let label = props.label;
    let img = props.img;

    return (

        <div className="c-input-img" >
            <input id={label} className="c-input-img__input" onChange={handleChecked} type="checkbox" alt="Submit" width="48" height="48" />
            <label for={label} className="c-input-img__label" ><img alt={label} src={img} />{label}</label>
        </div>

    )
}

