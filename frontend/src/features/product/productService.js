import axios from "axios"
import { baseURL, config } from "../../utils/api"

const getProductCollection = async (id) => {
    const response = await axios.get(`${baseURL}collections/?[filters][id]=${id}&populate[products][populate][0]=category&populate[products][populate][1]=productImg`, id, config)
    if (response.data) {
        return response.data
    }
}

const getAllProduct = async (data) => {
    const response = await axios.get(`${baseURL}products/?populate=*`, data, config)
    if (response.data) {
        return response.data
    }
}

const getProductCate = async (id) => {
    const response = await axios.get(`${baseURL}brands/?[filters][id]=${id}&populate[products][populate][0]=category&populate[products][populate][1]=productImg`, id, config)
    if (response.data) {
        return response.data
    }
}

const getProductDetails = async (id) => {
    const response = await axios.get(`${baseURL}products/?populate=*&[filters][id]=${id}`, id, config)
    if (response.data) {
        return response.data
    }
}


export const productService = {
    getProductCollection,
    getAllProduct,
    getProductCate,
    getProductDetails,
}