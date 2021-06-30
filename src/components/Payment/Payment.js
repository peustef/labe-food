import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React, {useContext} from 'react';
import { ContainerPayment, PaymentInfo, Shipping, SubTotal } from './style';
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Payment = (props) => {
    const [value, setValue] = React.useState('female');
    const { states, setters } = useContext(GlobalStateContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const itemSum =[]
    const itemValue = states.cart && states.cart.forEach((item) => {
        itemSum.push(item.price*item.quantity)
        return itemSum        
    });
    const totalValue = itemSum.reduce((a,b)=> a + b, props.shipping)
  
    return (
        <ContainerPayment>
                <Shipping>
                    <Typography variant={'body1'}  >Frete R${props.shipping},00</Typography>
                </Shipping>
                <SubTotal>
                    <Typography variant={'body1'} >SUBTOTAL</Typography>
                    <Typography variant={'body1'} color={'primary'}>R${totalValue},00</Typography>
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