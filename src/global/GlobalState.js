import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import { useEffect } from 'react';
import { getRestaurants } from '../services/restaurants';

const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRestaurants(setRestaurants);
       }, []);

    const setters = {
        setCart,
        setProfile,
        setRestaurantDetail,
        setRestaurants,
        setLoading
    }

    const states = {
        cart,
        restaurants,
        profile,
        restaurantDetail,
        loading
    }

    return <GlobalStateContext.Provider
        value={{ setters, states }}
    >
        {props.children}
    </GlobalStateContext.Provider>
};

export default GlobalState;