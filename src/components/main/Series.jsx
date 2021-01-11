import React, { Component } from 'react';
import './Main.css';

import Item from '../Item';

import Vikings from './thumbnail/vikings.jpg';
import Supernatural from './thumbnail/supernatural.jpg';
import Punisher from './thumbnail/punisher.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props);
        
        this.items = [
            { name: 'Vikings', note: '6.5', path: Vikings },
            { name: 'Supernatural', note: '8.5', path: Supernatural },
            { name: 'Punisher', note: '5.2', path: Punisher }
        ]
    }

    createItem() {
        return (
            this.items.map(item => {
                let i = item.name.length > 19 ? 'long' : '';

                return (
                    <Item textLong={i} name={item.name} source={item.path} note={item.note} />
                );
            })
        );
    }

    render() {
        return (
            <div className="container">
                <div className="search">
                    <form action="#" className="input-group" method="post">
                        <input type="text" className="form-control" placeholder="Procure seus filmes e séries..." />
                        <div className="icon">
                            <input type="submit" value="" />
                        </div>
                    </form>
                </div>
                <div className="title">
                    <h3>Navegar por Séries</h3>
                    <hr />
                </div>
                <div className="content">
                    { this.createItem() }
                </div>
            </div>
        );
    }
}