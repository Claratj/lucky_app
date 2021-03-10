import React from 'react';

import '../AdoptionForm.scss';
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";

export function AdoptionFormStep1(props) {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (
        <div>
            <p className={"p-adoption-form__title"}>Formulario de adopción</p>
            <svg className={"p-adoption-form__progress"} width={"100%"} height={7}>
                <rect className={"p-adoption-form__progress-full"} width={"100%"} height={7} fill={"rgb(255,156,147)"}
                      opacity={0.35}/>
                <rect className={"p-adoption-form__progress-part"} width={"33%"} height={7} fill={"rgb(255,156,147)"}/>
            </svg>
            <p className={"p-adoption-form__subtitle"}>Tus datos</p>
            <TextField name={"name"} label={"Nombre y apellidos"} value={props.getState('name', `${user.name} ${user.lastname}`)}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"email"} label={"Email"} type={"email"} value={props.getState('email', user.email)}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"tel"} label={"Teléfono"} value={props.getState('tel', user.phone)}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"DNI"} label={"DNI"} value={props.getState('DNI', '')} onChange={props.handleChange}
                       fullWidth/>
            <p className={"p-adoption-form__subtitle"}>Dirección</p>
            <TextField name={"street"} label={"Calle, número, piso"} value={props.getState('street', user.address)}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"code"} label={"Código postal"} value={props.getState('code', '')}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"city"} label={"Ciudad"} value={props.getState('city', user.city)} onChange={props.handleChange}
                       fullWidth/>
            <FormControlLabel control={<Checkbox name="terms" onChange={props.handleChange} checked={props.getState('terms', '') === true}/> }
                              label="Acepto los términos y condiciones de la adopción" />
            <button className={"c-button c-button__red"} onClick={props.next}>Continuar</button>
        </div>
    )
}