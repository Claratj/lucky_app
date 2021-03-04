import React from 'react';

import '../AdoptionForm.scss';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

export function AdoptionFormStep3(props) {
    return (
        <div>
            <div className={"p-adoption-form__title"}>
                <p className={"p-adoption-form__exit"} onClick={props.prev}>&lt;</p>
                <p>Formulario de adopción</p>
            </div>
            <svg className={"p-adoption-form__progress"} width={"100%"} height={7}>
                <rect className={"p-adoption-form__progress-full"} width={"100%"} height={7} fill={"rgb(255,156,147)"}
                      opacity={0.35}/>
                <rect className={"p-adoption-form__progress-part"} width={"100%"} height={7} fill={"rgb(255,156,147)"}/>
            </svg>
            <p className={"p-adoption-form__subtitle"}>Familia y hogar</p>
            <div className={"p-adoption-form__block"}>
                <p>¿Dónde vives?</p>
                <TextField name={"where"} label={"Piso, casa, chalet..."} value={props.getState('where', '')}
                           onChange={props.handleChange} fullWidth/>
            </div>
            <RadioGroup className={"p-adoption-form__radio-group"} name={"rent"}>
                <p>¿Vives de alquiler?</p>
                <div>
                    <FormControlLabel checked={props.getState('rent', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('rent', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"allowed"}>
                <p>¿Tu casero permite animales?</p>
                <div>
                    <FormControlLabel checked={props.getState('allowed', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('allowed', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"moving"}>
                <p>¿Crees que podrías mudarte pronto?</p>
                <div>
                    <FormControlLabel checked={props.getState('moving', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('moving', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"garden"}>
                <p>¿Tiene jardín?</p>
                <div>
                    <FormControlLabel checked={props.getState('garden', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('garden', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"flatmate"}>
                <p>¿Vives con otras personas?</p>
                <div>
                    <FormControlLabel checked={props.getState('flatmate', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('flatmate', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"agreeTerms"}>
                <p>¿Están todos de acuerdo con la adopción?</p>
                <div>
                    <FormControlLabel checked={props.getState('agreeTerms', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('agreeTerms', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"agreeVisit"}>
                <p>¿Estás de acuerdo con que visitemos tu casa?</p>
                <div>
                    <FormControlLabel checked={props.getState('agreeVisit', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('agreeVisit', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>
            <button className={"c-button c-button__red"} onClick={props.next}>Enviar</button>
        </div>
    )
}