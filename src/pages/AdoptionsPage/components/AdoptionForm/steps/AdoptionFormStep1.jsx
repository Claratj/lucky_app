import React from 'react';

import '../AdoptionForm.scss';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";

export function AdoptionFormStep1() {
    return (
        <form>
            <p className={"p-adoption-form__title"}>Formulario de adopción</p>
            <svg className={"p-adoption-form__progress"} width={"100%"} height={7}>
                <rect className={"p-adoption-form__progress-full"} width={"100%"} height={7} fill={"rgb(255,156,147)"} opacity={0.35}/>
                <rect className={"p-adoption-form__progress-part"} width={"33%"} height={7} fill={"rgb(255,156,147)"}/>
            </svg>
            <p className={"p-adoption-form__subtitle"}>Tus datos</p>
            <TextField id={"name"} label={"Nombre y apellidos"} fullWidth/>
            <TextField id={"email"} label={"Email"} type={"email"} fullWidth/>
            <TextField id={"tel"} label={"Teléfono"} type={"phone"} fullWidth/>
            <TextField id={"DNI"} label={"DNI"} fullWidth/>
            <p className={"p-adoption-form__subtitle"}>Dirección</p>
            <TextField id={"street"} label={"Calle, número, piso"} fullWidth/>
            <TextField id={"code"} label={"Código postal"} fullWidth/>
            <TextField id={"city"} label={"Ciudad"} fullWidth/>
            <FormControlLabel control={<Checkbox name="terms" />} label="Acepto los términos y condiciones de la adopción" />
            <button className={"c-button c-button__red"}>Continuar</button>
        </form>
    )
}