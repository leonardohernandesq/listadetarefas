import { useState } from 'react';
import './home.css'

import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebaseConnetion';
import { signInWithEmailAndPassword } from 'firebase/auth'

function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        if (email !== '' && password !== '') {
            await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate('/admin', { replace: true })
                })
                .catch(() => {
                    alert('erro ao fazer o login')
                })
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <div className='homeContainer'>
            <h1>Lista de Tarefas</h1>
            <span>Gerencie sua agenda de forma fácil.</span>

            <form className='form' onSubmit={handleLogin}>
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

                <button type='submit'>Acessar</button>
                <Link to="/register">Não possui uma conta? Cadastre-se</Link>
            </form>
        </div>
    );
}

export default Home;
