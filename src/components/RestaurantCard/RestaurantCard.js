import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import mockRestCard from '../../assets/mockRestCard.png'
import { StyledCard, DeliveryInfosContainer } from './style';

const RestaurantCard = () => {
    const { setters, states } = useContext(GlobalStateContext)



    useEffect(() => {
        setters.setRestaurants(
            [{
                id: 1,
                description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                shipping: 6,
                address: "Rua das Margaridas, 110 - Jardim das Flores",
                name: "Habibs",
                logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
                deliveryTime: 60,
                category: "Árabe"
            },
            {
                id: 10,
                address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
                name: "Tadashii",
                logoUrl: "http://soter.ninja/futureFoods/logos/tadashii.png",
                deliveryTime: 50,
                category: "Asiática",
                description: "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
                shipping: 13
            },
            {
                "id": "2",
                "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
                "shipping": 19,
                "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
                "name": "McDonalds",
                "logoUrl": "http://soter.ninja/futureFoods/logos/mcdonalds.png",
                "deliveryTime": 15,
                "category": "Hamburguer"
              },
              {
                "id": "3",
                "deliveryTime": 20,
                "category": "Italiana",
                "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
                "shipping": 2,
                "address": "Rua Barão do Rio Branco, 98 - Centro",
                "name": "Cantina Mamma Perrotta",
                "logoUrl": "http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg"
              },
              {
                "id": "4",
                "name": "Sorveteria Bacio di Latte",
                "logoUrl": "http://soter.ninja/futureFoods/logos/baciodilatte.png",
                "deliveryTime": 45,
                "category": "Sorvetes",
                "description": "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
                "shipping": 10,
                "address": "Travessa Junqueira de Melo, 315 - Marginal"
              },
              {
                "id": "5",
                "deliveryTime": 20,
                "category": "Carnes",
                "description": "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
                "shipping": 18,
                "address": "Alameda dos Marsupiais, 505 - Humaitá",
                "name": "Outback Steakhouse",
                "logoUrl": "http://soter.ninja/futureFoods/logos/outback.png"
              },
              {
                "id": "6",
                "description": "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
                "shipping": 4,
                "address": "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
                "name": "Sotero Cozinha Original",
                "logoUrl": "http://soter.ninja/futureFoods/logos/sotero.jpg",
                "deliveryTime": 40,
                "category": "Baiana"
              }]
        )
    }, [])

    return (
        <div>
            {states.restaurants && states.restaurants.map((restaurant) => {
                return <StyledCard key={restaurant.id} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={restaurant.name}
                                height="120"
                                image={mockRestCard}
                                title={restaurant.name}
                            />
                            <CardContent>
                                <Typography color="primary" variant="body1" component="h2">
                                    {restaurant.name}
                                </Typography>
                                
                                <DeliveryInfosContainer>
                                    <Typography variant="body2" color="secondary" component="p">
                                        {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
                                    </Typography>
                                    <Typography variant="body2" color="secondary" component="p">
                                        Frete R${restaurant.shipping},00
                                    </Typography>
                                </DeliveryInfosContainer>
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                
            })}

        </div>
    );
};

export default RestaurantCard;