import { BASE_URL } from "../constants/Urls";
import axios from "axios";
import { goToHome } from "../routes/coordinator";

const header = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};

export const placeOrder = (body, history, restaurantId) => {
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, header)
    .then((res) => {
      alert("Pedido criado com sucesso!");
      goToHome(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const getOrdersHistory = (setOrders) => {
  axios
    .get(`${BASE_URL}/orders/history`, header)
    .then((res) => {
      setOrders(res.data.orders);
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
