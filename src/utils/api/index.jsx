import axios from "axios";
import { getStorage } from "../storage";

const API = axios.create({baseURL: 'http://localhost:5001'})

API.interceptors.request.use(async(req) => {
    const response = await getStorage('profile');
    if(response?.token){
        req.headers.Authorization = `Bearer ${response?.token}`;
    }
    return req;
})

export const login = async(data) => API.post('/auth/login', data)
export const logout = async() => API.delete('/auth/logout')
