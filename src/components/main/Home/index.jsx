import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Item from '../../Item';
import BarSearch from '../../BarSearch';

import Joker from '../thumbnail/joker.jfif';
import Pica_Pau from '../thumbnail/pica-pau.jfif';
import Transformers from '../thumbnail/transformers.jpg';
import Circulo_de_Fogo from '../thumbnail/circulo de fogo.jpg';

import Vikings from '../thumbnail/vikings.jpg';
import Supernatural from '../thumbnail/supernatural.jpg';
import Punisher from '../thumbnail/punisher.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.itemsFilms = [
            { name: 'Joker', note: '8.5', path: Joker },
            { name: 'Pica_Pau', note: '5.2', path: Pica_Pau },
            { name: 'Transformers: O último cavaleiro', note: '7.4', path: Transformers },
            { name: 'Circulo_de_Fogo', note: '8.7', path: Circulo_de_Fogo },
            { name: 'Circulo_de_Fogo', note: '8.7', path: Circulo_de_Fogo },
        ]

        this.itemsSeries = [
            { name: 'Vikings', note: '6.5', path: Vikings },
            { name: 'Supernatural', note: '8.5', path: Supernatural },
            { name: 'Punisher', note: '5.2', path: Punisher }
        ]
    }

    createItem(items) {
        return (
            items.map(item => {
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
                    <h3>Principais Filmes</h3>
                    <hr />
                </div>
                <div className="content">
                    { this.createItem(this.itemsFilms) }
                </div>
                <Link className="link" to="/filmes">Ver mais filmes</Link>
                <div className="title">
                    <h3>Principais Séries</h3>
                    <hr />
                </div>
                <div className="content">
                    { this.createItem(this.itemsSeries) }
                </div>
                <Link className="link" to="/series">Ver mais séries</Link>
            </div>
        );
    }
}