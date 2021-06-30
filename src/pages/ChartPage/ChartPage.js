import { Typography } from '@material-ui/core';
import React from 'react';
import { ContainerAdress, ContainerFood, ContainerInfoCart, ContainerCart } from './style';
import Payment from '../../components/Payment/Payment'
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ItensCard from '../../components/ItensCard/ItensCard';

const ChartPage = () => {
    const history = useHistory()
    return (
        <div>
            <Header title={'Meu carrinho'} />
            <ContainerCart>
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
                    {/* Fazer condicional para caso o carrinho esteja vazio */}
                    <Typography variant={'body1'}  >Carrinho Vazio</Typography>
                    <ItensCard
                        name={'Stencil'}
                        description={'O melhor hamburguer do mundo'}
                        price={'52,00'}
                        photoUrl={'https://www.colombo.com.br/blog/wp-content/uploads/2021/05/hamburguer-artesanal.jpg'}
                    />
                    <ItensCard
                        name={'Stencil'}
                        description={'O melhor hamburguer do mundo'}
                        price={'52,00'}
                        photoUrl={'https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_L.jpg'}
                    />
                </ContainerFood>
                <Payment />
            </ContainerCart>
            <Footer history={history} />
        </div>
    );
};

export default ChartPage;