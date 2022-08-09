import axios from "axios";
import { apiurl, timeOut } from "./AuthApi";

// complaints Helper

export const complaintsApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.get('/dashboard/Helper/Complaints');
    return responsee;
};

// Helpre User

export const ignoreUserApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/IgnoreUser/' + id);
    return responsee;
};

export const acceptUserApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/AcceptUser/' + id);
    return responsee;
};

// Helpre Post

export const ignorePostApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/IgnorePost/' + id);
    return responsee;
};

export const acceptPostApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/AcceptPost/' + id);
    return responsee;
};

// Helpre Comment

export const ignoreCommentApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/IgnoreComment/' + id);
    return responsee;
};

export const acceptCommentApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Helper/AcceptComment/' + id);
    return responsee;
};