import React, { Component } from 'react';
// import './Main.css';

import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <main className="container">
                <form className="login" action="#" method="post">
                    <h3 className="form-title">Acesse sua conta</h3>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder="Digite seu e-mail"/>
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder="Digite sua senha"/>
                    <button type="submit">Entrar</button>
                    <Link className="link" to="/register">Não possuí uma conta? Registre-se</Link>
                </form>
            </main>
        );
    }
}