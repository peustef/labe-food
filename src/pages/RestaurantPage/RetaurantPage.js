import React, { useLayoutEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantDetailsCard from '../../components/RestaurantDetailsCard/RestaurantDetailsCard';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getRestaurantsDetails } from '../../services/restaurants';
import ItensCard from '../../components/ItensCard/ItensCard';
import Typography from '@material-ui/core/Typography';
import { ItensCont } from './style';
import Header from '../../components/Header/Header';
import { goBack } from '../../routes/coordinator';

const RetaurantPage = () => {
    const params = useParams()
    const history = useHistory()
    const { setters, states, requests } = useContext(GlobalStateContext);

    useLayoutEffect(() => {
        getRestaurantsDetails(setters.setRestaurantDetail, params.id)       
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
                    id={prod.id}
                    button={true}
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
            <Header 
                buttonLeft={() => goBack(history)}
                title={'Restaurante'}
            />
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