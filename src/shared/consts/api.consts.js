import axios from 'axios';

export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
};

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 12000,
    headers: APIHeaders,
    credentials: 'include',
})