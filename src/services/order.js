import { BASE_URL } from "../constants/Urls";
import axios from "axios";
import { goToHome } from "../routes/coordinator";

export const placeOrder = (body, history, restaurantId) => {
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, getHeader())
    .then((res) => {
      alert("Pedido criado com sucesso!");
      goToHome(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const getOrdersHistory = (setOrders, setLoading) => {
  setLoading(true);
  axios
    .get(`${BASE_URL}/orders/history`, getHeader())
    .then((res) => {
      setOrders(res.data.orders);
      setLoading(false);
    })
    .catch((err) => {
      alert(err);
      setLoading(false);
    });
};

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

