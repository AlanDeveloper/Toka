import React from 'react';
import './components/style/App.css';

import { HashRouter } from 'react-router-dom';

import Logo from './components/template/Logo';
import Header from './components/template/Header';
import Routes from './Routes';
import Footer from './components/template/Footer';

export default props =>
    <HashRouter> 
        <div className="app">
            <Logo />
            <Header />
            <Routes />
            <Footer />
        </div>
    </HashRouter>