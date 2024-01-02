import axios from "axios"
import { baseURL, params } from "../../utils/api"

const addOrder = async ({ userId, shipId, totalAll, address, productCart, userDate, active }) => {
    const response = await axios.post(`${baseURL}orders/?populate=*`, {
        data: {
            userId: userId,
            shipping: shipId,
            status: Number(1),
            totalPrice: totalAll,
            deliveryAddress: address,
            products: productCart,
            userDetail: userDate,
            payment: active,
        }
    }, params)
    if (response.data) {
        return response.data
    }

}

export const orderService = {
    addOrder,
}