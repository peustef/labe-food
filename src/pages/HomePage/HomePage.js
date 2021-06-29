import React, { useContext } from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantTypeTabs from '../../components/RestaurantTypeTabs/RestaurantTypeTabs';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';
import { ContainerRestaurantCards } from '../style-Pages/style-Pages';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory } from 'react-router-dom';
import { goToSearch } from '../../routes/coordinator';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    const history = useHistory()
    const { states } = useContext(GlobalStateContext);

    const restaurantsList = states.restaurants.map((restaurant) => {
        return (
            <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                title={restaurant.title}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping}
                logoUrl={restaurant.logoUrl}
                history={history} 
                id={restaurant.id}
            />
        );
    });

    return (
        <div>
            <Box ml={2} mr={2}>
                <TextField
                    onClick={() => goToSearch(history)}
                    fullWidth
                    margin='normal'
                    placeholder="Busca"
                    id="search-input"
                    variant='outlined'
                    color="secondary"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="secondary" />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Box ml={1}>
                <RestaurantTypeTabs />
            </Box>


            <ContainerRestaurantCards>
                {restaurantsList}
            </ContainerRestaurantCards>
            <Footer history={history} />
        </div>

    );
};

export default HomePage;