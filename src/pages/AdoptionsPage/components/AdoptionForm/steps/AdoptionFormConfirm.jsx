import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {API} from "../../../../../shared/consts/api.consts";

export function AdoptionFormConfirm(props) {

    const application = {
        // userId:,
        // pet: ,
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
        const jsonApp = JSON.stringify(application);
        API.post("/application", {
            body: jsonApp,
        });
    }

    useEffect(sendInfo, []);

    return (
        <Redirect to={"/adoptions"}/>
    )
}