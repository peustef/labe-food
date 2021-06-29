import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 100,
    },
  
}));

const ItensCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={props.photoUrl}
                    title=""
                />
    
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography color="primary" variant="body1" component="h2">
                           {props.name}
                        </Typography>
                        <Typography variant="body2" color="secondary" component="p">
                        {props.description}
                        </Typography>
                        
    
                        <Typography variant="body2" color="secondary" component="p">
                           {props.price}
                        </Typography>
    
                        <button> Add ou Rm </button>
                    </CardContent>
    
                </div>
    
            </Card>
       
    )
}


export default ItensCard
