import React, { Component } from 'react';
import '../style/Header.css';
import '../style/Header-Desktop.css';
import '../style/Header-Mobile.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.menuHamburguer = this.menuHamburguer.bind(this);
    }

    menuHamburguer() {
        const collapse = document.querySelector('#demo');

        collapse.classList.contains('collapse') ? 
            collapse.classList.remove('collapse') : collapse.classList.add('collapse');
    }

    render() {
        return (
            <header className="header">
                <nav>
                    <div className="desktop">
                        <ul>
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="#">Filmes</a></li>
                            <li><a href="#">Séries</a></li>
                        </ul>
                    </div>
                    <div className="mobile">
                        <div className="button" onClick={this.menuHamburguer}>
                            <span></span>
                        </div>
                        <div className="collapse" id="demo">
                            <ul>
                                <li className="user">
                                    <aside>
                                        <a href="#">Entrar</a>
                                        <a href="#">Registrar</a>
                                    </aside>
                                </li>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">Filmes</a></li>
                                <li><a href="#">Séries</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <aside>
                    <a href="#">Entrar</a>
                    <a href="#">Registrar</a>
                </aside>
            </header>
        );
    }
}