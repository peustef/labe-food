import { Typography } from '@material-ui/core';
import React from 'react';
import { ContainerCard } from './style';

const OrderHistoryCard = () => {
    return (
        <ContainerCard>
            <Typography variant={'body1'} color={'primary'}>Bulguer Vila Madalena</Typography>
            <Typography variant={'body2'}>23 de outubro de 2019</Typography>
            <Typography variant={'h6'}>SUBTOTAL R$67,00</Typography>
        </ContainerCard>
    );
};

export default OrderHistoryCard;