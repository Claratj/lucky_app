import React, { useState } from 'react';
import './InputImg.scss';
import { ReactComponent as Spider } from '../../assets/img/spider.svg';

export default function InputImg(props) {

    const [checked, setChecked] = useState(false);

    let listChecked = [];

    const handleChecked = ({ target }) => {
        // console.log(target.id);
        setChecked(target.checked);

    }
    let label = props.label;



    let img = props.img;

    return (

        <div className="c-input-img" >
            <input id={label} className="c-input-img__input" onChange={handleChecked} type="checkbox" alt="Submit" width="48" height="48" />
            <label for={label} className="c-input-img__label" >
                <svg />
                {label}
            </label>
        </div>

    )
}

