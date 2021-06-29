import React, { useState } from "react";
import { BASE_URL } from "../constants/Urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalStateContext";
import { useEffect } from "react";
import { getRestaurants } from "../services/restaurants";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [profile, setProfile] = useState({});
  const [restaurantDetail, setRestaurantDetail] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants(setRestaurants);
   }, []);

  const setters = {
    setCart,
    setProfile,
    setRestaurantDetail,
  };

  const states = {
    cart,
    restaurants,
    profile,
    restaurantDetail,
  };


  return (
    <GlobalStateContext.Provider value={{ setters, states }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
