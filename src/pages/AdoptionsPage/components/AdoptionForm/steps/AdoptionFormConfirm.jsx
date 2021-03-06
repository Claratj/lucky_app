import React, {useEffect} from 'react';
import {Redirect, useParams} from "react-router-dom";
import {API} from "../../../../../shared/consts/api.consts";

export function AdoptionFormConfirm(props) {

    const param = useParams();
    const petId = param.petId; 

    const application = {
        // userId:,
        pet: petId,        
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
            },
            pets: {
                morePets: props.getState('morePets', '') === 'true',
                whichPet: props.getState('whichPet', ''),
                behaviour: props.getState('behaviour', ''),
                why: props.getState('why', ''),
                needs: props.getState('needs', ''),
                expenses: props.getState('expenses', ''),
                feed: props.getState('feed', ''),
            },
            family: {
                where: props.getState('where', ''),
                rent: props.getState('rent', '') === 'true',
                allowed: props.getState('allowed', '') === 'true',
                moving: props.getState('moving', '') === 'true',
                garden: props.getState('garden', '') === 'true',
                flatmate: props.getState('flatmate', '') === 'true',
                agreeTerms: props.getState('agreeTerms', '') === 'true',
                agreeVisit: props.getState('agreeVisit', '') === 'true',
            },
        },
        status: 'process',
    }

    // export const register = async (formData) => {
    //
    // const request = await fetch(REGISTER_URL, {
    //
    //     headers: {
    //
    //         'Accept': 'application/json',
    //
    //             'Access-Control-Allow-Credentials': true,
    //
    //             'Access-Control-Allow-Origin': '*',
    //
    //     },
    //
    //     method: 'POST',
    //
    //         body: formData,
    //
    //         credentials: 'include',
    //
    // }); }

    // async componentDidMount() {// POST request using fetch with async/awaitconst requestOptions = {
    //     method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })};
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);const data = await response.json();this.setState({ postId: data.id });}

    const sendInfo = () => {
        console.log(application);
        API.post("/application", application).then(() => {
        });
    }

    useEffect(sendInfo, []);

    return (
        <Redirect to={"/adoptions"}/>
    )
}