import React from 'react';
import '../style/Header.css';

export default props =>
    <header className="header">
        <nav>
            <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Séries</a></li>
            </ul>
        </nav>
        <aside>
            <a href="#">Entrar</a>
            <a href="#">Registrar</a>
        </aside>
    </header>