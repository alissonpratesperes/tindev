import React, { useState } from 'react';
import api from '../services/api';
import './Login.css';
import logo from '../assets/logo.svg';

    function Login({ history }) {
        const [username, setUsername] = useState('');

            async function handleSubmit(event) {
                event.preventDefault();
                    console.log(`User "${username}" logged.`);
                        const response = await api.post('/devs', { username });
                            console.log(response);
                                history.push('/main');
            }

                return (
                    <div className="login-container">
                        <form onSubmit={handleSubmit}>
                            <img src={logo} alt="tindev"/>
                                <input type="text" placeholder="Insira seu usuário do GitHub" value={username} onChange={event => setUsername(event.target.value)}/>
                                <button type="submit"> Entrar </button>
                        </form>
                    </div>
                );
    }

        export default Login;