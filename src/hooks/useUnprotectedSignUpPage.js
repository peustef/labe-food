import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';

function useUnprotectedPageSignUpPage() {
    const history = useHistory()
    
    useLayoutEffect(() => {
        // guarda o que estiver em token no localstorage em uma constante token
        const token = localStorage.getItem('tokenSignUp')
        // Caso token for diferente de true, redireciona para a tela de login
        if(token) {
            history.push('/cadastro/endereco')
        }
    })
}

export default useUnprotectedPageSignUpPage;