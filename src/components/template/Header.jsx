import React from 'react';
import '../style/Header.css';
import '../style/Header-Desktop.css';
import '../style/Header-Mobile.css';

export default props =>
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
                <div className="button" data-toggle="collapse" data-target="#demo" href="#collapse">
                    <span></span>
                </div>
                
                <div className="collapse" id="demo">
                    <ul>
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