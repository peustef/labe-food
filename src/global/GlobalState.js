import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurantDetail, setRestaurantDetail] = useState({})

    const setters = {
        setCart,
        setRestaurants,
        setProfile,
        setRestaurantDetail
    }

    const states = {
        cart,
        restaurants,
        profile,
        restaurantDetail
    }

    return <GlobalStateContext.Provider
        value={ setters, states }
    >
        {props.children}
    </GlobalStateContext.Provider>
};

export default GlobalState;