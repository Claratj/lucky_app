import React from 'react';
import {Steps, Step} from 'react-step-builder';

import './AdoptionForm.scss';
import {AdoptionFormStep1} from "./steps/AdoptionFormStep1";
import {AdoptionFormStep2} from "./steps/AdoptionFormStep2";
import {AdoptionFormStep3} from "./steps/AdoptionFormStep3";
import {AdoptionFormConfirm} from "./steps/AdoptionFormConfirm";

export function AdoptionForm() {
    return (
        <form className={"container p-adoption-form"}>
            <Steps>
                <Step component={AdoptionFormStep1}/>
                <Step component={AdoptionFormStep2}/>
                <Step component={AdoptionFormStep3}/>
                <Step component={AdoptionFormConfirm}/>
            </Steps>
        </form>
    )
}