import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import { ContainerPayment, PaymentInfo, Shipping, SubTotal } from './style';

const Payment = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ContainerPayment>
                <Shipping>
                    <Typography variant={'body1'}  >Frete R$0,00</Typography>
                </Shipping>
                <SubTotal>
                    <Typography variant={'body1'} >SUBTOTAL</Typography>
                    <Typography variant={'body1'} color={'primary'}>R$00.00</Typography>
                </SubTotal>
                <PaymentInfo>
                    <Typography variant={'body1'} >Forma de Pagamento</Typography>
                </PaymentInfo>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="cash" control={<Radio />} label="Dinheiro" />
                        <FormControlLabel value="credit-cart" control={<Radio />} label="Cartão de Crédito" />
                    </RadioGroup>
                </FormControl>
                <Button variant={'contained'} color={'primary'}>Confirmar</Button>
            </ContainerPayment>
    );
};

export default Payment;