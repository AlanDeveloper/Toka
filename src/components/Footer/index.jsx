import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <hr/>
                    <div>
                        <p>Desenvolvido por Alan Santos.</p>
                        <a href="#top">{window.location.href.split('#')[1] === '/login' || window.location.href.split('#')[1] === '/register' ? '' : 'Voltar ao topo'}</a>
                    </div>
                </div>
            </footer>
        );
    }
}