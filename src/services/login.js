import axios from "axios"
import { BASE_URL } from "../constants/Urls"
import { goToHome } from "../routes/coordinator"

export const login = (form, history, setLoading) => {
    setLoading(true)
    const body = {
        email: form.email,
        password: form.password
    }
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToHome(history)
            setLoading(false)
        })
        .catch((err) => {
            alert('Erro ao fazer Login')
            setLoading(false)
        })
}