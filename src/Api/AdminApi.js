import axios from "axios";
import { apiurl, timeOut } from "./AuthApi";

// complaints Helper

export const complaintsAdminApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.get('/dashboard/Admin/Complaints');
    return responsee;
};

// Helpre User

export const ignoreUserAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/IgnoreUser/' + id);
    return responsee;
};

export const deleteUserAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/DeleteUser/' + id);
    return responsee;
};

// Helpre Post

export const ignorePostAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/IgnorePost/' + id);
    return responsee;
};

export const deletePostAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/DeletePost/' + id);
    return responsee;
};

// Helpre Comment

export const ignoreCommentAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/IgnoreComment/' + id);
    return responsee;
};

export const deleteCommentAdminApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/DeleteComment/' + id);
    return responsee;
};

// Helpre 

export const helperAdminApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.get('/dashboard/Admin/Helpers');
    return responsee;
};

export const edithelperAdminApi = (token, id, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/Admin/EditHelper/' + id , values);
    return responsee;
};