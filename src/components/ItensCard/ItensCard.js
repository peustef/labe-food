import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StyledCard, RightButton, RelaDiv } from './styled';

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

    return (
        <StyledCard className={classes.root} >
            
            <CardMedia
                className={classes.cover}
                image={props.photoUrl}
                title=""
            />

            <RelaDiv>
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
                <RightButton> Adicionar</RightButton>
            </RelaDiv>
        </StyledCard>

    )
}


export default ItensCard
