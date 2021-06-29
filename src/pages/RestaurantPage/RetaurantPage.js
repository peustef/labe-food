import React, { useLayoutEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantDetailsCard from '../../components/RestaurantDetailsCard/RestaurantDetailsCard';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getRestaurantsDetails } from '../../services/restaurants';
import ItensCard from '../../components/ItensCard/ItensCard';

const RetaurantPage = () => {
    const params = useParams()
    const { setters, states, requests } = useContext(GlobalStateContext);

    useLayoutEffect(() => {
        getRestaurantsDetails(setters.setRestaurantDetail, 1)
    }, [])

    const restaurant = states.restaurantDetail
    const categories = []
    restaurant && restaurant.products && restaurant.products.forEach(item => {
        categories.push(item.category)
    })

    const filteredList = categories.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    })

    console.log(filteredList)

    const categoriesList = filteredList.map(item => {
        return (
        <div>
            <p> {item} </p>



        </div>

        )
    })

    const productsList = restaurant && restaurant.products && restaurant.products.map((prod) => {
        return (
            <ItensCard
                key={prod.id}
                name={prod.name}
                description={prod.description}
                photoUrl={prod.photoUrl}
                price={prod.price}
            />
        )
    })

    return (
        <div>
            <RestaurantDetailsCard
                name={restaurant.name}
                category={restaurant.category}
                deliveryTime={restaurant.deliveryTime}
                logoUrl={restaurant.logoUrl}
                shipping={restaurant.shipping}
                address={restaurant.address}
            />
            {categoriesList}
            {productsList}

        </div>
    );
};

export default RetaurantPage;