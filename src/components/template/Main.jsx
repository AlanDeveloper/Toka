import React from 'react';
import '../style/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Item from './Item';
import ImageSource from '../assets/img/ving.jfif';

export default props =>
    <div className="container">
        <div className="search">
            <form action="#" method="post">
                <input type="text" placeholder="Procure seus filmes e séries..."/>
                <div className="icon">
                    <input type="submit" value=""/>
                </div>
            </form>
        </div>
        <div className="title">
            <h3>Principais Filmes</h3>
            <hr/>
        </div>
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
        <div className="title">
            <h3>Principais Séries</h3>
            <hr/>
        </div>
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
        <Item source={ImageSource} note="7.5" />
    </div>