import React, {useEffect, useState} from 'react';

import './AdoptionForm.scss';
import {AdoptionFormStep1} from "./steps/AdoptionFormStep1";

export function AdoptionForm() {
    return (
        <div className={"container p-adoption-form"}>
            <AdoptionFormStep1/>
        </div>
    )
}