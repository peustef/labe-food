import { Typography } from '@material-ui/core';
import React, { useContext,useEffect } from 'react';
import { ContainerAdress, ContainerFood, ContainerInfoCart, ContainerCart } from './style';
import Payment from '../../components/Payment/Payment'
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ItensCard from '../../components/ItensCard/ItensCard';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getProfile } from "../../services/profile";

const ChartPage = () => {
    const { states, setters } = useContext(GlobalStateContext);

    useProtectedPage();
  
    const history = useHistory()
    const restaurant = states.restaurantDetail

    const cartList = states.cart.map((prod) => {
        return (
            <ItensCard
                key={prod.id}
                name={prod.name}
                description={prod.description}
                photoUrl={prod.photoUrl}
                price={prod.price}
                id={prod.id}
                button={false}
            />
        )
    })

    useEffect(() => {       
        getProfile(setters.setProfile)
      }, [setters.setProfile]);
    
    return (
        <div>
            <Header title={'Meu carrinho'} />
            <ContainerCart>
                <ContainerAdress>
                    <Typography variant={'body1'} color={'secondary'}>Endereço de Entrega</Typography>
                    <Typography variant={'body1'} >{states.profile.address}</Typography>
                </ContainerAdress>

                {states.cart.length ?
                    <div>
                        <ContainerInfoCart>
                            <Typography variant={'body1'} color={'primary'} >{restaurant.name}</Typography>
                            <Typography variant={'body1'} color={'secondary'} >{restaurant.address}</Typography>
                            <Typography variant={'body1'} color={'secondary'} >{restaurant.deliveryTime} min</Typography>
                        </ContainerInfoCart>
                        <ContainerFood>
                            {cartList}
                        </ContainerFood>
                    </div>
                    :
                    <ContainerFood>
                        <Typography variant={'body1'}  >Carrinho Vazio</Typography>
                    </ContainerFood>
                }

                <Payment shipping={restaurant.shipping} />
            </ContainerCart>
            <Footer history={history} colorShopping={'primary'}/>
        </div>
    );
};

export default ChartPage;