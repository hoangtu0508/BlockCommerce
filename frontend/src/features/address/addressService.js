import axios from "axios";

const getAddress = async () => {
    try {
        const response = await axios.get(
            'https://raw.githubusercontent.com/hoangtu0508/BlockCommerce/main/data/DiaGioiHanhChinhVN.json'
        );
        return response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const addressService = {
    getAddress,
}