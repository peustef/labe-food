import axios from "axios"
import { BASE_URL } from "../constants/Urls"

const header = {
    headers: {
        auth: localStorage.getItem('token')
    }
}

export const getActiveOrders = (setActiveOrder) => {
    axios.get(`${BASE_URL}/active-order`, header)
        .then((res) => {
            setActiveOrder(res.data.order)
        })
        .catch((err) => {
            alert(err)
        })
}