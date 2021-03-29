import React from 'react';
import './Login.css';
import logo from '../assets/logo.svg';

    function Login() {
        return (
            <div className="login-container">
                <form>
                    <img src={logo} alt="Tindev"/>
                        <input type="text" placeholder="Insira seu usuário do GitHub"/>
                        <button type="submit"> Entrar </button>
                </form>
            </div>
        );
    }

        export default Login;