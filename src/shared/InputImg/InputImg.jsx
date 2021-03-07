import React, { useState, useContext, useEffect } from 'react';
import './InputImg.scss';
// import DogBlue from '../../assets/img/perrop.png';
// import DogPink from '../../assets/img/perropink.png';
import { ReactComponent as Cat } from '../../assets/img/icons-fixed/svg/cat.svg';
import { ReactComponent as Rabbit } from '../../assets/img/icons-fixed/svg/rabbit.svg';
import { ReactComponent as GuineaPig } from '../../assets/img/icons-fixed/svg/guinea-pig.svg';
import { ReactComponent as SmallMammal } from '../../assets/img/icons-fixed/svg/small-mammal.svg';
import { ReactComponent as Ferret } from '../../assets/img/icons-fixed/svg/ferret.svg';
import { ReactComponent as Fish } from '../../assets/img/icons-fixed/svg/fish.svg';
import { ReactComponent as Reptile } from '../../assets/img/icons-fixed/svg/reptile.svg';
import { ReactComponent as Amphibian } from '../../assets/img/icons-fixed/svg/amphibian.svg';
import { ReactComponent as ArachnidInsect } from '../../assets/img/icons-fixed/svg/arachnid-insect.svg';
import { ReactComponent as Bird } from '../../assets/img/icons-fixed/svg/bird.svg';

import { ReactComponent as Female } from '../../assets/img/icons-fixed/svg/female.svg';
import { ReactComponent as Male } from '../../assets/img/icons-fixed/svg/male.svg';

import { ReactComponent as Small } from '../../assets/img/icons-fixed/svg/small.svg';
import { ReactComponent as Medium } from '../../assets/img/icons-fixed/svg/medium.svg';
import { ReactComponent as Large } from '../../assets/img/icons-fixed/svg/large.svg';







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
                    < span className="icon-dog" />}
                {label === 'Gato' &&
                    <span className="icon-happy" />}
                {label === 'Conejo' &&
                    <span className="icon-rabbit" />}
                {label === 'Cobaya' &&
                    <span className="icon-mouse" />}
                {label === 'Pequeño mamífero' &&
                    <span className="icon-hedgehog" />}
                {label === 'Hurón' &&
                    <span className="icon-ferret" />}
                {label === 'Pez' &&
                    <span className="icon-tropical-fish" />}
                {label === 'Reptil' &&
                    <span className="icon-snake" />}
                {label === 'Anfibio' &&
                    <span className="icon-frog" />}
                {label === 'Arácnido o insecto' &&
                    <span className="icon-spider" />}
                {label === 'Ave' &&
                    <span className="icon-parrot" />}

                {label === 'Hembra' &&
                    <span className="icon-femenine-1" />}
                {label === 'Macho' &&
                    <span className="icon-masculine" />}

                {label === 'Pequeño' &&
                    <span className="icon-dog" />}
                {label === 'Mediano' &&
                    <span className="icon-dog" />}
                {label === 'Grande' &&
                    <span className="icon-dog" />}

                {label}

            </label>
        </div>
    )
}

{/* <span className="icon-frog"></span> */ }
