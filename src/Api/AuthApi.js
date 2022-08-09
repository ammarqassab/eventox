import axios from "axios";

export const appName= process.env.appName;
export const apiurl= process.env.apiUrl;
export const appurl= process.env.appUrl;
export const timeOut= 3000000;

//touch .nojekyll

export const registeruserApi = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.post('/register',values);
    return responsee;
};

export const loginuserApi = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.post('/login',values);
    return responsee;
};

export const logoutuserApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/logout');
    return responsee;
};

// users 

export const ShowAllUsersApi = (token) => {

    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
        }

    });
    const responsee = service.get('/dashboard/showalluser');
    return responsee;
};

export const deleteUserApi = (token, id) => {

    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
        }

    });
    const responsee = service.post('/dashboard/deleteuser/' + id);
    return responsee;
};

//Middleware

export const Middleware = (token) => {

    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
        }

    });
    const responsee = service.post('/dashboard');
    return responsee;
};
