import { specialChars } from '@testing-library/user-event';
import React, { useState, useContext, useEffect } from 'react';
// import { FilterObject } from '../Filter/Filter';

import './InputImg.scss';



// const initialFilterValues = {
//     species: '',
//     gender: '',
//     size: ''
// }

export default function InputImg(props) {

    const [checked, setChecked] = useState(false);
    const [data, setData] = useState({

    });

    let label = props.label;

    let species = props.species;
    let gender = props.gender;




    const handleChecked = (e) => {
        // value = e.target.checked;
        // if (checked === true) {
        //     setChecked(false);

        //     console.log('has been unclicked');

        // } else {
        //     setChecked(true)
        //     //  console.log(e.target);
        //     console.log('Checkbox has been ticked!');

        //     if (species) {
        //         setData({
        //             // ...data,
        //             // [e.target.value]: label,
        //             ['species']: value
        //             // [e.target.species]: species

        //         });

        //     } else if (gender) {
        //         setData({
        //             // ...data,
        //             ['gender']: value

        //         });
        //     }
        //     console.log(data);
        // }
        // setData({
        //     ...data,
        //     [e.target]: label

        // });
    }


    // const handleChecked = ({ target }) => {
    //     console.log(target);
    //     setChecked(target.checked);
    //     if (target.checked) {

    //         console.log('Checkbox has been ticked!');
    //     } else if (status == false) {

    //         target.change = false;
    //         setChecked(target.change);
    //     } else {
    //         console.log('has been unclicked');

    //     }

    //     console.log(target.checked);
    //     // console.log(object);
    // } 


    // console.log(species);
    // console.log(gender);


    return (

        <form className="c-input-img" >
            <input id={label} className="c-input-img__input" value={label} onChange={handleChecked
            } type="checkbox" alt="Submit" width="48" height="48" />

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
        </form>
    )
}
