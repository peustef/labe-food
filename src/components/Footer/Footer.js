import React, { useState } from 'react';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { goToChart, goToHome, goToProfile } from '../../routes/coordinator';
import { StickFooter, StyledIconButton } from './style';


const Footer = ({ history }) => {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div>
            <StickFooter>
                <StyledIconButton color="secondary" aria-label="open drawer" onClick={() => goToHome(history)}>
                    <HomeOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color="secondary" onClick={() => goToChart(history)}>
                    <ShoppingCartOutlinedIcon fontSize="large" />
                </StyledIconButton>
                <StyledIconButton color="secondary" onClick={() => goToProfile(history)}>
                    <PersonOutlineOutlinedIcon fontSize="large" />
                </StyledIconButton>
            </StickFooter>
        </div>


    );
};

export default Footer;