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

export const getRestaurants = (setRestaurants) => {
    axios.get(`${BASE_URL}/restaurants`, getHeader())
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
}

export const getRestaurantsDetails = (setRestaurantDetail, id) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, getHeader())
        .then((res) => {
            setRestaurantDetail(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
}
