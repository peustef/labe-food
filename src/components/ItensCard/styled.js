import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

export const AddButton = styled.button`
width: 5.625rem;
height: 1.938rem;
margin: 0.438rem 0 0 0.5rem;
padding: 0.5rem 1.281rem 0.563rem 1.344rem;
border-radius: 8px;
border: solid 1px var(--black);
position: absolute; 
bottom: 0;
right:0; 
z-index: 2;
`
export const RelaDiv = styled.div`
position: relative;
display: flex;
flex-direction: column;
`
export const RemoveButton = styled.button`
width: 5.625rem;
height: 1.938rem;
margin: 0.438rem 0 0 0.5rem;
padding: 0.5rem 1.281rem 0.563rem 1.344rem;
border-radius: 8px;
border: solid 1px #e02020;
position: absolute; 
bottom: 0;
right:0; 
z-index: 2;
`