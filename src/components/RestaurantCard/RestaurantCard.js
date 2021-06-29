import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import mockRestCard from "../../assets/mockRestCard.png";
import { StyledCard, DeliveryInfosContainer } from "./style";

const RestaurantCard = (props) => {
  const { setters, states, requests } = useContext(GlobalStateContext);

  return (
    <div>
      <StyledCard key={props.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="120"
            image={mockRestCard}
            title={props.name}
          />
          <CardContent>
            <Typography color="primary" variant="body1" component="h2">
              {props.name}
            </Typography>

            <DeliveryInfosContainer>
              <Typography variant="body2" color="secondary" component="p">
                {props.deliveryTime - 10} - {props.deliveryTime} min
              </Typography>
              <Typography variant="body2" color="secondary" component="p">
                Frete R${props.shipping},00
              </Typography>
            </DeliveryInfosContainer>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </div>
  );
};

export default RestaurantCard;
