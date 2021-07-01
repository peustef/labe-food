import React, { useContext } from 'react';
import Logo from '../../assets/logo.png'
import { ContainerLogin, ContainerForm, InputEmail, InputPassword, ContainerButton } from './style'
import { InputLabel, IconButton, InputAdornment, OutlinedInput, Button, CircularProgress } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { goToSignUp } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/user';
import useForm from '../../hooks/useForm';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { GlobalStateContext } from '../../global/GlobalStateContext';

const LoginPage = () => {
    useUnprotectedPage();
    const { states, setters } = useContext(GlobalStateContext);
    const history = useHistory()
    const [form, onChange, clear, setForm] = useForm({
        email: '',
        password: '',
        showPassword: false,
    })

    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitLogin = (e) => {
        e.preventDefault()
        login(form, history, setters.setLoading)
        clear()
    }

    return (
        <ContainerLogin>
            <img src={Logo} alt="logo" />
            <ContainerForm onSubmit={submitLogin} variant="outlined">
                <Typography variant={'h6'}>Entrar</Typography>
                <InputEmail
                    name='email'
                    value={form.email}
                    onChange={onChange}
                    type='email'
                    label="E-mail"
                    placeholder='email@email.com'
                    variant="outlined"
                    margin={'10'}
                    required
                />
                <InputPassword variant="outlined">
                    <InputLabel>Senha *</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name='password'
                        type={form.showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={onChange}
                        margin={'10px'}
                        placeholder={'Mínimo 6 caracteres'}
                        required
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {form.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={65}
                    />
                </InputPassword>
                <ContainerButton
                    color={'primary'}
                    type={'submit'}
                    variant={'contained'}
                    fullWidth
                >{states.loading ? <CircularProgress color={'inherit'} size={24} /> : 'Entrar'}</ContainerButton>
            </ContainerForm>
            <Button fullWidth onClick={() => goToSignUp(history)}>Não possui cadastro? Clique aqui</Button>
        </ContainerLogin>
    );
};

export default LoginPage;