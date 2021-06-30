import axios from "axios"
import { BASE_URL } from "../constants/Urls"

export const getHeader = () => {
    const token = localStorage.getItem('token')

    const header = {
        headers: {
            auth: token
        }
    }
    return header
}

export const getActiveOrders = (setActiveOrder) => {
    axios.get(`${BASE_URL}/active-order`, getHeader())
        .then((res) => {
            setActiveOrder(res.data.order)
        })
        .catch((err) => {
            alert(err)
        })
}