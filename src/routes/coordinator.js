export const goToHome = (history) => {
    history.push('/')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToChart = (history) => {
    history.push('/carrinho')
}

export const goToSignUpAdress = (history) => {
    history.push('/cadastro/endereço')
}

export const goToRestaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToSearch = (history) => {
    history.push('/busca')
}

export const goToProfile = (history) => {
    history.push('/perfil')
}

export const goBack = (history) => {
    history.goBack()
}

