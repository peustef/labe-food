import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { getActiveOrders } from '../../services/order'
import { Card, InfoContainer, Icon } from './style'


export default function ActiveOrder(props) {
    
    return (
        <Card>
            <Icon fontSize="large" />
            <InfoContainer>
                <p>Pedido em andamento</p>
                <p>{props.name}</p>
                <h3>SUBTOTAL R${props.price},00</h3>
            </InfoContainer>
            {/* <button onClick={onClickTeste}>Teste</button> */}
        </Card>
    )
}
