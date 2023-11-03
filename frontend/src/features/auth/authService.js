import axios from "axios";
import { params, baseURL } from "../../utils/api";

const register = async (userData) => {
    const response = await axios.post(`${baseURL}auth/local/register`, userData)
    if (response.data) {
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data))
        }
        return response.data
    }
}

const login = async (userData) => {
    const response = await axios.post(`${baseURL}auth/local`, userData)
    if (response.data) {
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data))
        }
        return response.data
    }
}

export const authService = {
    register,
    login,
}