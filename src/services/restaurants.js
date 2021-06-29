import axios from "axios"
import { BASE_URL } from "../constants/Urls"

const header = {
    headers: {
        auth: localStorage.getItem('token')
    }
}

export const getRestaurants = (setRestaurants) => {
    axios.get(`${BASE_URL}/restaurants`, header)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
}

export const getRestaurantsDetails = (setRestaurantDetail, id) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, header)
        .then((res) => {
            setRestaurantDetail(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
}
