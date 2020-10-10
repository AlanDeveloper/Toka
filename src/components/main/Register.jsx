import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';

import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <main className="container">
                <form className="login" action="#" method="post">
                    <h3 className="form-title">Crie sua conta</h3>
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                    <label htmlFor="">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" />
                    <label htmlFor="">Confirme sua senha:</label>
                    <input type="password" placeholder="Digite novamente sua senha" />
                    <button type="submit">Cadastre-se</button>
                    <Link className="link" to="/login">Já possuí uma conta? Faça seu login</Link>
                </form>
            </main>
        );
    }
}