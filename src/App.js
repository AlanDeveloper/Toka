import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './Routes';
import Footer from './components/Footer';

export default props =>
    <HashRouter> 
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </HashRouter>