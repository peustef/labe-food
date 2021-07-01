import React, { useState } from 'react';
import { Container } from './style';
import Logo from "../../assets/logo-future-eats.svg";

const SplashPage = () => {
    return (
        <Container>
            <img src={Logo} />
        </Container>
    );
};

export default SplashPage; 