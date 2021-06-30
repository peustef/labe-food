import { Button, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { ContainerAdress, ContainerButton, ContainerDetail, ContainerOrderHistory, ContainerTitleOrder } from './style';
import OrderHistoryCard from '../../components/OrderHistoryCard/OrderHistoryCard';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
    const history = useHistory()

    return (
        <div>
            <Header title={'Meu Perfil'} />
            <ContainerDetail>
                <div>
                    <Typography variant={'body1'}>Bruna Oliveira</Typography>
                    <Typography variant={'body1'}>bruna_o@gmail.com</Typography>
                    <Typography variant={'body1'}>333.333.333-33</Typography>
                </div>
                <ContainerButton>
                    <EditOutlinedIcon />
                </ContainerButton>
            </ContainerDetail>
            <ContainerAdress>
                <div>
                    <Typography variant={'body1'} color={'secondary'}>Endereço de Entrega</Typography>
                    <Typography variant={'body1'} >Rua Alessandra Vieira, 42 - Santana</Typography>
                </div>
                <Button>
                    <EditOutlinedIcon />
                </Button>
            </ContainerAdress>
            <ContainerOrderHistory>
                <ContainerTitleOrder>
                    <Typography variant={'body1'}>Histórico de Pedidos</Typography>
                </ContainerTitleOrder>
                <OrderHistoryCard />
                <OrderHistoryCard />
                <OrderHistoryCard />
                <OrderHistoryCard />
            </ContainerOrderHistory>
            <Footer history={history}/>
        </div>
    );
};

export default ProfilePage;