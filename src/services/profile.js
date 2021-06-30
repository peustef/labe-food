import { goBack } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/Urls";

export const getHeader = () => {
    const token = localStorage.getItem('token')

    const header = {
        headers: {
            auth: token
        }
    }
    return header
}

export const editProfile = (body, history, setLoading) => {
    setLoading(true);
    axios
    .put(`${BASE_URL}/profile`, body, getHeader())
    .then((res) => {
        alert("Perfil editado com sucesso")
        goBack(history);
        setLoading(false);
    })
    .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response)
        setLoading(false);
    })
}