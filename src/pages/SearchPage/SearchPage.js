import React, { useContext } from "react";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { ContainerRestaurantCards } from "../style-Pages/style-Pages";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useEffect } from "react";

const SearchPage = () => {
  const { states } = useContext(GlobalStateContext);

  const filteredStates = states.restaurants.map((restaurant) => {
    return (
      <RestaurantCard
        name={restaurant.name}
        title={restaurant.title}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    );
  });

  return (
    <div>
      <Box ml={2} mr={2}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Busca"
          id="search-input"
          variant="outlined"
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
      <ContainerRestaurantCards>{filteredStates}</ContainerRestaurantCards>
    </div>
  );
};

export default SearchPage;
