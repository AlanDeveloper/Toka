import React, { Component } from 'react';

import Item from '../../Item';
import BarSearch from '../../BarSearch';

import Vikings from '../thumbnail/vikings.jpg';
import Supernatural from '../thumbnail/supernatural.jpg';
import Punisher from '../thumbnail/punisher.jpg';

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
                <BarSearch />
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