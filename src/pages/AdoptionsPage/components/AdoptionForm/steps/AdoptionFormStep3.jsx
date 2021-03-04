import React from 'react';

import '../AdoptionForm.scss';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

export function AdoptionFormStep3() {
    return (
        <form>
            <div className={"p-adoption-form__title"}>
                <p className={"p-adoption-form__exit"}>&lt;</p>
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
                <TextField id={"where"} label={"Piso, casa, chalet..."} fullWidth/>
            </div>
            <RadioGroup className={"p-adoption-form__radio-group"} name={"rent"}>
                <p>¿Vives de alquiler?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"allowed"}>
                <p>¿Tu casero permite animales?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"moving"}>
                <p>¿Crees que podrías mudarte pronto?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"garden"}>
                <p>¿Tiene jardín?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"flatmate"}>
                <p>¿Vives con otras personas?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"agreeTerms"}>
                <p>¿Están todos de acuerdo con la adopción?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>

            <RadioGroup className={"p-adoption-form__radio-group"} name={"agreeVisit"}>
                <p>¿Estás de acuerdo con que visitemos tu casa?</p>
                <div>
                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Sí"
                                      labelPlacement="top"/>
                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="No"
                                      labelPlacement="top"/>
                </div>
            </RadioGroup>
            <button className={"c-button c-button__red"}>Continuar</button>
        </form>
    )
}