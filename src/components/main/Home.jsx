import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';

import { Link } from 'react-router-dom';

import Item from '../template/Item';

import Joker from '../assets/thumbnail/joker.jfif';
import Pica_Pau from '../assets/thumbnail/pica-pau.jfif';
import Transformers from '../assets/thumbnail/transformers.jpg';
import Circulo_de_Fogo from '../assets/thumbnail/circulo de fogo.jpg';

import Vikings from '../assets/thumbnail/vikings.jpg';
import Supernatural from '../assets/thumbnail/supernatural.jpg';
import Punisher from '../assets/thumbnail/punisher.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.itemsFilms = [
            { name: 'Joker', note: '8.5', path: Joker },
            { name: 'Pica_Pau', note: '5.2', path: Pica_Pau },
            { name: 'Transformers: O último cavaleiro', note: '7.4', path: Transformers },
            { name: 'Circulo_de_Fogo', note: '8.7', path: Circulo_de_Fogo }
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
                <div className="search">
                    <form action="#" className="input-group" method="post">
                        <input type="text" className="form-control" placeholder="Procure seus filmes e séries..." />
                        <div className="icon">
                            <input type="submit" value="" />
                        </div>
                    </form>
                </div>
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