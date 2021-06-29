import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
    width: 20.5rem;
  height: 7rem;
  margin: 0.438rem 0 0;
  border-radius: 8px;
  border: solid 1px var(--greyish);
  align-self: center;
`

export const RightButton = styled.button`
width: 5.625rem;
height: 1.938rem;
margin: 0.438rem 0 0 0.5rem;
padding: 0.5rem 1.281rem 0.563rem 1.344rem;
border-radius: 8px;
border: solid 1px var(--black);
position: relative;
bottom: 0px;
right:0px;
`