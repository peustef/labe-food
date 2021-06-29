import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goBack } from '../../routes/coordinator';

const SignUpAdressPage = () => {
    const history = useHistory()
    return (
        <div>
            <Header 
                buttonLeft={() => goBack(history)}
                title={'Endereço'}
            />
        </div>
    );
};

export default SignUpAdressPage;