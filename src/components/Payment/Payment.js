import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { ContainerPayment, PaymentInfo, Shipping, SubTotal } from './style';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { placeOrder } from '../../services/order';
import { useHistory } from 'react-router-dom';

const Payment = (props) => {
    const [payment, setPayment] = React.useState('');
    const { states, setters } = useContext(GlobalStateContext);
    const history = useHistory()

    const handleChange = (event) => {
        setPayment(event.target.value);
    };

    const shippingValue = states.cart.length ? props.shipping : 0

    const request = () => {
        const itensRequest = []
        states.cart && states.cart.forEach((item) => {
            itensRequest.push({
                id: item.id,
                quantity: item.quantity
            })
        });
        const requestBody = {
            products: itensRequest,
            paymentMethod: payment
        }
        return requestBody
    }

    const fixPrice = (value) => {
        const num = value.toFixed(2).replace('.', ',')
        return num
    }

    const sum = () => {
        const itemSum = []
        states.cart && states.cart.forEach((item) => {
            itemSum.push(item.price * item.quantity)
        });
        setters.setTotalValue(itemSum.reduce((a, b) => a + b, shippingValue))
    }

    const verifyPayment = () => {
        alert("Escolha uma forma de pagamento")
    }

    useEffect(() => {
        sum()
        request()
    }, [request]);

    return (
        <ContainerPayment>
            <Shipping>
                <Typography variant={'body1'}  >Frete R${shippingValue},00</Typography>
            </Shipping>
            <SubTotal>
                <Typography variant={'body1'} >SUBTOTAL</Typography>
                <Typography variant={'body1'} color={'primary'}>R${fixPrice(states.totalValue)}</Typography>
            </SubTotal>
            <PaymentInfo>
                <Typography variant={'body1'} >Forma de Pagamento</Typography>
            </PaymentInfo>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={payment} onChange={handleChange}>
                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>
            <Button
                variant={'contained'}
                color={'primary'}
                onClick={payment ? () => placeOrder(request(), history, states.restaurantDetail.id) : () => verifyPayment()}
            >Confirmar</Button>
        </ContainerPayment>
    );
};

export default Payment;