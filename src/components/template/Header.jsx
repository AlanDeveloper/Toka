import React, { Component } from 'react';
import '../style/Header.css';
import '../style/Header-Desktop.css';
import '../style/Header-Mobile.css';

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
            <header className="header" id="top">
                <nav>
                    <div className="desktop">
                        <ul>
                            { this.renderLink() }
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
                                { this.renderLink() }
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