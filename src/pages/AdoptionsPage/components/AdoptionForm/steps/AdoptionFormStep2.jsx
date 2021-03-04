import React from 'react';

import '../AdoptionForm.scss';
import {Checkbox, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

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
            <RadioGroup className={"p-adoption-form__radio-group"}>
                <p>¿Tienes otros animales?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="bottom"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="bottom"/>
                </div>
            </RadioGroup>
            <TextField id={"name"} label={"Nombre y apellidos"} fullWidth/>
            <TextField id={"email"} label={"Email"} type={"email"} fullWidth/>
            <TextField id={"tel"} label={"Teléfono"} type={"phone"} fullWidth/>
            <TextField id={"DNI"} label={"DNI"} fullWidth/>
            <p className={"p-adoption-form__subtitle"}>Dirección</p>
            <TextField id={"street"} label={"Calle, número, piso"} fullWidth/>
            <TextField id={"code"} label={"Código postal"} fullWidth/>
            <TextField id={"city"} label={"Ciudad"} fullWidth/>
            <FormControlLabel control={<Checkbox name="checkedC"/>}
                              label="Acepto los términos y condiciones de la adopción"/>
            <button className={"c-button c-button__red"}>Continuar</button>
        </form>
    )
}