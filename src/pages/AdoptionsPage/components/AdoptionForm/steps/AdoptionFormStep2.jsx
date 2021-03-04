import React from 'react';

import '../AdoptionForm.scss';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

export function AdoptionFormStep2(props) {
    return (
        <div>
            <div className={"p-adoption-form__title"}>
                <p className={"p-adoption-form__exit"} onClick={props.prev}>&lt;</p>
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
                    <FormControlLabel checked={props.getState('morePets', '') === 'true'} value="true"
                                      control={<Radio color="primary"/>}
                                      label="Sí"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                    <FormControlLabel checked={props.getState('morePets', '') === 'false'} value="false"
                                      control={<Radio color="primary"/>}
                                      label="No"
                                      labelPlacement="top"
                                      onChange={props.handleChange}/>
                </div>
            </RadioGroup>
            <TextField name={"whichPet"} label={"¿Cuales?"} value={props.getState('whichPet', '')}
                       onChange={props.handleChange} fullWidth/>
            <TextField name={"behaviour"} label={"¿Se lleva bien con otros animales?"}
                       value={props.getState('behaviour', '')}
                       onChange={props.handleChange}
                       fullWidth/>
            <div className={"p-adoption-form__block"}>
                <p>¿Por qué has elegido adoptar?</p>
                <TextField name={"why"} value={props.getState('why', '')} onChange={props.handleChange} fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces las necesidades del animal?</p>
                <TextField name={"needs"} value={props.getState('needs', '')} onChange={props.handleChange} fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces sus gastos?</p>
                <TextField name={"expenses"} value={props.getState('expenses', '')} onChange={props.handleChange}
                           fullWidth/>
            </div>
            <div className={"p-adoption-form__block"}>
                <p>¿Conoces su alimentación?</p>
                <TextField name={"feed"} value={props.getState('feed', '')} onChange={props.handleChange} fullWidth/>
            </div>
            <button className={"c-button c-button__red"} onClick={props.next}>Continuar</button>
        </div>
    )
}