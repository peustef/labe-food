import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StyledCard, AddButton, RelaDiv, RemoveButton } from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import ItemDialog from '../ItemDialog/ItemDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flex: '1 0 auto',
        width: 200,
    },
    cover: {
        width: 96,
    },

}));

const ItensCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { states, setters } = useContext(GlobalStateContext);
    const [buttonState, setButtonState] = useState(true)

    const addItem = (id, photoUrl, name, description, price) => {
        const product = { id, photoUrl, name, description, price, quantity: 1 }
        setters.setCart([...states.cart, product])
        setButtonState(!buttonState)
    }

    const removeItem = (id) => {
        const filteredCart = states.cart.filter((item) => { return item.id !== id })
        setters.setCart(filteredCart)
        setButtonState(!buttonState)
    }

    return (
        <StyledCard className={classes.root} >

            <CardMedia
                className={classes.cover}
                image={props.photoUrl}
                title=""
            />

            <RelaDiv>
                { buttonState ? "" : <ItemDialog id={props.id}/> }
                <CardContent className={classes.content}>

                    <Typography color="primary" variant="body1" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="secondary" component="p">
                        {props.description}
                    </Typography>

                    <Typography variant="body2" color="secondary" component="p">
                        R$ {props.price}
                    </Typography>
                </CardContent>

                {buttonState ?
                    <AddButton onClick={() => addItem(props.id, props.photoUrl, props.name, props.description, props.price)}> Adicionar</AddButton>
                    :
                    <RemoveButton onClick={() => removeItem(props.id)}>Remover</RemoveButton>
                }

            </RelaDiv>
        </StyledCard>
    )
}

export default ItensCard
