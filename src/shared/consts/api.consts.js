import axios from 'axios';


export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 50000, // he alargado el tiempo porque si se suben imgs grandes da error

    credentials: 'include',
})