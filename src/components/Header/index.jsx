import React, { Component } from 'react';
import './style.css';

import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.menuHamburguer = this.menuHamburguer.bind(this);

        this.links = [
            { route: '/', name: 'Home' },
            { route: '/filmes', name: 'Filmes' },
            { route: '/series', name: 'Séries' }
        ];
    }

    renderLink() {
        return (
            this.links.map(link => {
                let i = window.location.href;
                i = i.split('#');
                
                i = i[1] === link.route ? 'active' : '';

                return (
                    <li key={link.route} className={i}>
                        <Link to={link.route} className={i}>{link.name}</Link>
                    </li>
                );
            })
        );
    }

    menuHamburguer() {
        const collapse = document.querySelector('#demo');

        collapse.classList.contains('collapse') ? 
            collapse.classList.remove('collapse') : collapse.classList.add('collapse');
    }

    render() {
        return (
            <header>
                <nav>
                    <Link to="/" className="logo">Toka</Link>
                    <div className="links">
                        <ul>
                            { this.renderLink() }
                        </ul>
                    </div>
                    <aside>
                        <Link to="/login" className={window.location.href.split('#')[1] === '/login' ? 'active' : ''}>Entrar</Link>
                        <Link to="/register" className={window.location.href.split('#')[1] === '/register' ? 'active' : ''}>Registrar</Link>
                    </aside>
                </nav>
            </header>
        );
    }
}