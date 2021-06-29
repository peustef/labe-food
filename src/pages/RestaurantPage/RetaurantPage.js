import React, { useLayoutEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantDetailsCard from '../../components/RestaurantDetailsCard/RestaurantDetailsCard';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getRestaurantsDetails } from '../../services/restaurants';
import ItensCard from '../../components/ItensCard/ItensCard';
import Typography from '@material-ui/core/Typography';
import { ItensCont } from './style';

const RetaurantPage = () => {
    const params = useParams()
    const { setters, states, requests } = useContext(GlobalStateContext);

    useLayoutEffect(() => {
        getRestaurantsDetails(setters.setRestaurantDetail, 1)
        // fazer no home e no search a passagem de id
    }, [])

    const restaurant = states.restaurantDetail
    const categories = []
    restaurant && restaurant.products && restaurant.products.forEach(item => {
        categories.push(item.category)
    })

    const filteredList = categories.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    })

    const itensList = filteredList.map(item => {
        const list = restaurant.products.filter(prod => prod.category === item)

        const productsList = list.map((prod) => {
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
            <ItensCont key={item}>
                <Typography variant="body1" component="h2"> {item} </Typography>
                {productsList}
            </ItensCont>
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
            {itensList}
        </div>
    );
};

export default RetaurantPage;