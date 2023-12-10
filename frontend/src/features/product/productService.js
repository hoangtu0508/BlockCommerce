import axios from "axios"
import { baseURL, config } from "../../utils/api"

const getProductCollection = async (id) => {
    const response = await axios.get(`${baseURL}collections/?populate=*&[filters][id]=${id}&populate=products.productImg`, id, config)
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
    const response = await axios.get(`${baseURL}categories/?populate=*&[filters][id]=${id}&populate=products.productImg`, id, config)
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