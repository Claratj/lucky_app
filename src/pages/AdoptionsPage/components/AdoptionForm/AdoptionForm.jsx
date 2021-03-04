import React from 'react';

import './AdoptionForm.scss';
import {AdoptionFormStep1} from "./steps/AdoptionFormStep1";
import {AdoptionFormStep2} from "./steps/AdoptionFormStep2";

export function AdoptionForm() {
    return (
        <div className={"container p-adoption-form"}>
            <AdoptionFormStep2/>
        </div>
    )
}