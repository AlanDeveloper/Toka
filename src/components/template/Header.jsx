import React, { Component } from 'react';
import '../style/Header.css';
import '../style/Header-Desktop.css';
import '../style/Header-Mobile.css';

import { Link } from 'react-router-dom';

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
            <header className="header" id="top">
                <nav>
                    <div className="desktop">
                        <ul>
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/filmes">Filmes</Link></li>
                            <li><Link to="/series">Séries</Link></li>
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
                                        <Link to="#">Entrar</Link>
                                        <Link to="#">Registrar</Link>
                                    </aside>
                                </li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/filmes">Filmes</Link></li>
                                <li><Link to="/series">Séries</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <aside>
                    <Link to="#">Entrar</Link>
                    <Link to="#">Registrar</Link>
                </aside>
            </header>
        );
    }
}