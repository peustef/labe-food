import axios from "axios";
import { BASE_URL } from "../constants/Urls";
import { goToHome, goToSignUpAdress } from "../routes/coordinator";

export const login = (body, clear, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setLoading(false);
      goToHome(history);
    })
    .catch((err) => {
      clear();
      setLoading(false);
      alert("Erro ao fazer Login");
    });
};

export const signUp = (body, clear, history, setLoading) => {
    setLoading(true);
    axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToSignUpAdress(history);
        alert("Conta criada com sucesso!")
        setLoading(false);
    })
    .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
    });
};

export const logout = () => {
    localStorage.removeItem("token");
};
