import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import { useEffect } from 'react';
import { getRestaurants } from '../services/restaurants';
import { getActiveOrders } from '../services/order';

const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [loading, setLoading] = useState(false);
    const [activeOrder, setActiveOrder] = useState([])

    useEffect(() => {
        getRestaurants(setRestaurants);
        getActiveOrders(setActiveOrder)
       }, []);

    const setters = {
        setCart,
        setProfile,
        setRestaurantDetail,
        setRestaurants,
        setLoading,
        setActiveOrder
    }

    const states = {
        cart,
        restaurants,
        profile,
        restaurantDetail,
        loading,
        activeOrder
    }

    return <GlobalStateContext.Provider
        value={{ setters, states }}
    >
        {props.children}
    </GlobalStateContext.Provider>
};

export default GlobalState;