import React, { useState, useContext } from 'react';
import './InputImg.scss';
import { ReactComponent as Dog } from '../../assets/img/icons-fixed/svg/dog.svg';
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

    const [checked, setChecked] = useState();
    // const { isSelected } = useContext(InputImgContext);

    // let listChecked = [];

    const handleChecked = ({ target }) => {
        console.log(target);
        setChecked(target.checked);
        if (target.checked) {
            console.log('Checkbox has been ticked!');
            // if (props.checked === false) {
            //     target.change = false;
            //     setChecked(target.change)
            // }
        } else {
            console.log('has been unclicked');
        }
        // console.log(checked);
        console.log(target.checked);
        // console.log(object);
    }
    let label = props.label;




    return (

        <div className="c-input-img" >
            <input id={label} className="c-input-img__input" onClick={handleChecked} type="checkbox" alt="Submit" width="48" height="48" />
            <label for={label} className="c-input-img__label" >
                {label === 'Perro' &&
                    < Dog />}
                {label === 'Reptil' &&
                    < Cat />}
                {label === 'Conejo' &&
                    < Rabbit />}
                {label === 'Cobaya' &&
                    < GuineaPig />}
                {label === 'Pequeño mamífero' &&
                    < SmallMammal />}
                {label === 'Hurón' &&
                    < Ferret />}
                {label === 'Pez' &&
                    < Fish />}
                {label === 'Reptil' &&
                    < Reptile />}
                {label === 'Anfibio' &&
                    < Amphibian />}
                {label === 'Arácnido o insecto' &&
                    < ArachnidInsect />}
                {label === 'Ave' &&
                    < Bird />}

                {label === 'Hembra' &&
                    < Female />}
                {label === 'Macho' &&
                    < Male />}

                {label === 'Pequeño' &&
                    < Small />}
                {label === 'Mediano' &&
                    < Medium />}
                {label === 'Grande' &&
                    < Large />}

                {label}

            </label>
        </div>
    )
}

{/* <span className="icon-frog"></span> */ }
