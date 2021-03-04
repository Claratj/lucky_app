import React from 'react';

import '../AdoptionForm.scss';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

export function AdoptionFormStep2() {
    return (
        <form>
            <div className={"p-adoption-form__title"}>
                <p className={"p-adoption-form__exit"}>&lt;</p>
                <p>Formulario de adopción</p>
            </div>
            <svg className={"p-adoption-form__progress"} width={"100%"} height={7}>
                <rect className={"p-adoption-form__progress-full"} width={"100%"} height={7} fill={"rgb(255,156,147)"}
                      opacity={0.35}/>
                <rect className={"p-adoption-form__progress-part"} width={"50%"} height={7} fill={"rgb(255,156,147)"}/>
            </svg>
            <p className={"p-adoption-form__subtitle"}>Sobre las mascotas</p>
            <RadioGroup className={"p-adoption-form__radio-group"} name={"morePets"}>
                <p>¿Tienes otros animales?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>
            <TextField id={"whichPet"} label={"¿Cuales?"} fullWidth/>
            <TextField id={"behaviour"} label={"¿Se lleva bien con otros animales?"} fullWidth/>
            <div className={"p-adoption-form__block"}>
                <p>¿Por qué has elegido adoptar?</p>
                <TextField id={"why"} fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces las necesidades del animal?</p>
                <TextField id={"needs"} fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces sus gastos?</p>
                <TextField id={"expenses"} fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces su alimentación?</p>
                <TextField id={"feed"} fullWidth/>
            </div>
            <button className={"c-button c-button__red"}>Continuar</button>
        </form>
    )
}