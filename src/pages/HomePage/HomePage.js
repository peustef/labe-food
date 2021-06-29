import React from 'react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import RestaurantTypeTabs from '../../components/RestaurantTypeTabs/RestaurantTypeTabs';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';
import { ContainerRestaurantCards } from '../style-Pages/style-Pages';


const HomePage = () => {

    return (
        <div>
            <Box ml={2} mr={2}>
                <TextField

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
                <RestaurantCard />
            </ContainerRestaurantCards>
        </div>

    );
};

export default HomePage;