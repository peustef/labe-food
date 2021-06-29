import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';

const StickFooter = styled.div`
overflow: hidden;
position: fixed;
display: flex;
justify-content: space-around;
bottom: 0;
width: 100%;
border-top: 1px solid #b8b8b8;
background-color: #FFFFFF;
`

const StyledIconButton = styled(IconButton)`
     &:hover{
    color: #E0212C;
  }
`

const Footer = () => {
    const [value, setValue] = useState('recents');
    const history = useHistory

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div>
            <StickFooter>
                <StyledIconButton color="secondary" aria-label="open drawer">
                    <HomeOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color="secondary">
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color="secondary" >
                    <PersonOutlineOutlinedIcon fontSize="large" />
                </StyledIconButton>
            </StickFooter>
        </div>


    );
};

export default Footer;