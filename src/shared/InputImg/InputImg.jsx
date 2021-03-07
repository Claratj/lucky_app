import React, { useState, useContext, useEffect } from 'react';
import './InputImg.scss';



export default function InputImg(props) {

    const [checked, setChecked] = useState(false);
    // const { isSelected } = useContext(InputImgContext);

    // let listChecked = [];

    /* const handleChecked = ({ target }) => {
        console.log(target);
        setChecked(target.checked);
        if (target.checked) {

            console.log('Checkbox has been ticked!');
        } else if (status == false) {

            target.change = false;
            setChecked(target.change);
        } else {
            console.log('has been unclicked');

        }

        console.log(target.checked);
        // console.log(object);
    } */
    let label = props.label;




    return (

        <div className="c-input-img" >
            <input id={label} className="c-input-img__input" onClick={() => {
                if (checked === true) {
                    setChecked(false)
                } else { setChecked(true) }
            }} type="checkbox" alt="Submit" width="48" height="48" />

            <label for={label} className="c-input-img__label" >
                {label === 'Perro' &&
                    <span className="icon-dog size" />}
                {label === 'Gato' &&
                    <span className="icon-happy size" />}
                {label === 'Conejo' &&
                    <span className="icon-rabbit size" />}
                {label === 'Cobaya' &&
                    <span className="icon-mouse size" />}
                {label === 'Pequeño mamífero' &&
                    <span className="icon-hedgehog size" />}
                {label === 'Hurón' &&
                    <span className="icon-ferret size" />}
                {label === 'Pez' &&
                    <span className="icon-tropical-fish size" />}
                {label === 'Reptil' &&
                    <span className="icon-snake size" />}
                {label === 'Anfibio' &&
                    <span className="icon-frog size" />}
                {label === 'Arácnido o insecto' &&
                    <span className="icon-spider size" />}
                {label === 'Ave' &&
                    <span className="icon-parrot size" />}

                {label === 'Hembra' &&
                    <span className="icon-femenine-1 size" />}
                {label === 'Macho' &&
                    <span className="icon-masculine size" />}

                {label === 'Pequeño' &&
                    <span className="icon-dog size" />}
                {label === 'Mediano' &&
                    <span className="icon-dog size" />}
                {label === 'Grande' &&
                    <span className="icon-dog size" />}

                {label}

            </label>
        </div>
    )
}

{/* <span className="icon-frog"></span> */ }
