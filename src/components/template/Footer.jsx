import React, { Component } from 'react';
import '../style/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <hr/>
                    <div>
                        <p>Desenvolvido por Alan Santos.</p>
                        <a href="#top">Voltar ao topo</a>
                    </div>
                </div>
            </footer>
        );
    }
}