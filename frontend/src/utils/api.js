
export const baseURL = 'http://localhost:1337/api/';

export const params = {
    mode: 'no-cors',
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchData = {
    headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
    },
}