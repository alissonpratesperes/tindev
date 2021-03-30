import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg';

    function Login() {
        const [username, setUsername] = useState('');

            function handleSubmit(event) {
                event.preventDefault();
                    console.log(username);
            }

                return (
                    <div className="login-container">
                        <form onSubmit={handleSubmit}>
                            <img src={logo} alt="Tindev"/>
                                <input type="text" placeholder="Insira seu usuário do GitHub" value={username} onChange={event => setUsername(event.target.value)}/>
                                <button type="submit"> Entrar </button>
                        </form>
                    </div>
                );
    }

        export default Login;