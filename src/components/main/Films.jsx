import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';

import Item from '../template/Item';

import Vingadores from '../assets/thumbnail/ving.jfif';
import Joker from '../assets/thumbnail/joker.jfif';
import Pica_Pau from '../assets/thumbnail/pica-pau.jfif';
import Transformers from '../assets/thumbnail/transformers.jpg';
import Circulo_de_Fogo from '../assets/thumbnail/circulo de fogo.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.items = [
            { name: 'Vingadores', note: '6.5', path: Vingadores},
            { name: 'Joker', note: '8.5', path: Joker},
            { name: 'Pica_Pau', note: '5.2', path: Pica_Pau},
            { name: 'Transformers: O último cavaleiro', note: '7.4', path: Transformers},
            { name: 'Circulo_de_Fogo', note: '8.7', path: Circulo_de_Fogo}
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
                    <h3>Navegar por Filmes</h3>
                    <hr />
                </div>
                <div className="content">
                    { this.createItem() }
                </div>
            </div>
        );
    }
}