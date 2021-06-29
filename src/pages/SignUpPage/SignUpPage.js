import React from 'react';
import Button from '@material-ui/core/Button';
import { Main, Grid } from './style'
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm'



const SignUpPage = () => {

    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <Main>
            <img src={logo} />
            <strong><p>Cadastrar</p></strong>
            <form onSubmit={onSubmitForm}>
                <Grid item>
                    <TextField
                        type='text'
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                        label="Nome"
                        placeholder="Nome e sobrenome"
                        variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField
                        type='email'
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                        label="E-mail"
                        placeholder="email@email.com"
                        variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField
                        name={"cpf"}
                        value={form.cpf}
                        onChange={onChange}
                        required
                        label="CPF"
                        placeholder="000.000.000-00"
                        variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField
                        type='password'
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        required
                        label="Senha"
                        placeholder="Mínimo 6 caracteres"
                        variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField
                        type='password'
                        name
                        value
                        onChange
                        required
                        label="Confirmar"
                        placeholder="Confirme a senha anterior"
                        variant="outlined" />
                </Grid>
                <Button
                    variant="contained"
                    color="primary">
                    Criar
                </Button>
            </form>
        </Main>
    );
};

export default SignUpPage;