
import { useState } from 'react';
import './register.css'

import { auth } from '../../firebaseConnetion';
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        if (email !== '' && password !== '' && passwordConfirmation !== '') {
            if (password !== passwordConfirmation) {
                alert('A senha de confirmação é diferente da senha definida');
            } else {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        navigate('/admin', { replace: true })
                    })
                    .catch(() => {
                        alert('erro ao cadastrar')
                    })
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
            }

        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <div className='homeContainer'>
            <h1>Registre-se</h1>
            <span>Preencha os campos abaixo para concluir o seu registro.</span>

            <form className='form' onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder='Digite o seu e-mail: '
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite sua senha: '
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Confirme a sua senha: '
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />

                <button type='submit'>Cadastrar</button>
                <Link to="/">Já possui uma conta? Entre Aqui</Link>
            </form>
        </div>
    );
}

export default Register;
