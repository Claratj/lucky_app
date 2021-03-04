import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {API} from "../../../../../shared/consts/api.consts";

export function AdoptionFormConfirm(props) {

    const sendInfo = () => {
        const application = {
            // userId:,
            // petId:,
            form: {
                data: {
                    name: props.getState('name', ''),
                    email: props.getState('email', ''),
                    tel: props.getState('tel', ''),
                    DNI: props.getState('DNI', ''),
                    address: {
                        street: props.getState('street', ''),
                        code: props.getState('code', ''),
                        city: props.getState('city', ''),
                    },
                    terms: props.getState('terms', ''),
                }
            },
            pets: {
                morePets: props.getState('morePets', ''),
                whichPet: props.getState('whichPet', ''),
                behaviour: props.getState('behaviour', ''),
                why: props.getState('why', ''),
                needs: props.getState('needs', ''),
                expenses: props.getState('expenses', ''),
                feed: props.getState('feed', ''),
            },
            family: {
                where: props.getState('where', ''),
                rent: props.getState('rent', ''),
                allowed: props.getState('allowed', ''),
                moving: props.getState('moving', ''),
                garden: props.getState('garden', ''),
                flatmate: props.getState('flatmate', ''),
                agreeTerms: props.getState('agreeTerms', ''),
                agreeVisit: props.getState('agreeVisit', ''),
            },
            imgs: [],
            status: 'process',
        }

        // API.post("/application", application);
    }

    useEffect(sendInfo);

    return (
        <Redirect to={"/adoptions"}/>
    )
}