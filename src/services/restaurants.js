import axios from "axios"
import { BASE_URL } from "../constants/Urls"

export const getRestaurants = (setRestaurants) => {
    const header = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    axios.get(`${BASE_URL}/restaurants`, header)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
}

