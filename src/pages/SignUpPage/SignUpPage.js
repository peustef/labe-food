import TextField from '@material-ui/core/TextField';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Main } from './style'
import logo from '../../assets/logo.png'


const SignUpPage = () => {
    return (
        <Main>
            <img src={logo} alt="logo"/>
            <p>Cadastrar</p>
            <form>
            <TextField label="Nome*" placeholder="Nome e sobrenome" variant="outlined" />
            <TextField label="E-mail*" placeholder="email@email.com" variant="outlined" />
            <TextField label="CPF*" placeholder="000.000.000-00" variant="outlined" />
            <TextField label="Senha*" placeholder="Mínimo 6 caracteres" variant="outlined" />
            <TextField label="Confirmar*" placeholder="Confirme a senha anterior" variant="outlined" />
            <Button variant="contained" color="primary">
                Criar
            </Button>
            </form>
        </Main>
    );
};

export default SignUpPage;