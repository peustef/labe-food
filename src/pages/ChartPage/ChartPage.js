import { Typography } from '@material-ui/core';
import React from 'react';
import { ContainerAdress, ContainerFood, ContainerInfoCart } from './style';
import Payment from '../../components/Payment/Payment'
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const ChartPage = () => {
    const history = useHistory()
    return (
        <div>

            <containerCart>
                <ContainerAdress>
                    <Typography variant={'body1'} color={'secondary'}>Endereço de Entrega</Typography>
                    <Typography variant={'body1'} >Rua Alessandra Vieira, 42</Typography>
                </ContainerAdress>
                <ContainerInfoCart>
                    <Typography variant={'body1'} color={'primary'} >Bullguer Vila Madalena</Typography>
                    <Typography variant={'body1'} color={'secondary'} >R. Fradique Coutinho, 1136 - Vila Madalena</Typography>
                    <Typography variant={'body1'} color={'secondary'} >30 - 45 min</Typography>
                </ContainerInfoCart>
                <ContainerFood>
                    <Typography variant={'body1'}  >Carrinho Vazio</Typography>
                </ContainerFood>
                <Payment />
            </containerCart>
            <Footer history={history} />
        </div>
    );
};

export default ChartPage;