import React from 'react';
import './components/style/App.css';

import Logo from './components/template/Logo';
import Header from './components/template/Header';
import Main from './components/template/Main';
import Footer from './components/template/Footer';

export default props => 
  <div className="app">
    <Logo />
    <Header />
    <Main />
    <Footer />
  </div>