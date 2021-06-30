import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import { useEffect } from 'react';


const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [profile, setProfile] = useState({})
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [loading, setLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("")
    const [ordersHistory, setOrdersHistory] = useState([])
    

    const setters = {
        setCart,
        setProfile,
        setRestaurantDetail,
        setRestaurants,
        setLoading,
        setCurrentCategory,
        setOrdersHistory
    }

    const states = {
        cart,
        restaurants,
        profile,
        restaurantDetail,
        loading,
        currentCategory,
        ordersHistory
    }

    return <GlobalStateContext.Provider
        value={{ setters, states }}
    >
        {props.children}
    </GlobalStateContext.Provider>
};

export default GlobalState;