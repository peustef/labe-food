import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { goToHome, goToSignUpAdress } from "../routes/coordinator";

export const login = (body, clear, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setLoading(false);
      goToHome(history);
    })
    .catch((err) => {
      setLoading(false);
      alert("Erro ao fazer Login");
    });
};

export const signUp = (body, history, setLoading) => {
    setLoading(true);
    axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Conta criada com sucesso!")
        goToSignUpAdress(history);
        setLoading(false);
    })
    .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
    });
};

export const createAddress = (body, history, setLoading) => {
    setLoading(true);
    axios
    .put(`${BASE_URL}/address`, body)
    .then((res) => {
        localStorage.removeItem("token")
        localStorage.setItem("token", res.data.token);
        alert("Endereço salvo!")
        goToHome(history);
        setLoading(false);
    })
    .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
    })


}

export const logout = () => {
    localStorage.removeItem("token");
};
