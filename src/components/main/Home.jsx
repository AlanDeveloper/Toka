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
        this.protectThumb = this.protectThumb.bind(this);
    }

    protectThumb(evt) {
        evt.preventDefault();
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
                    <Item protectThumb={this.protectThumb} name="Coringa" source={Joker} note="6.5" />
                    <Item protectThumb={this.protectThumb} name="Pica-Pau" source={Pica_Pau} note="8" />
                    <Item textLong="long" protectThumb={this.protectThumb} name="Transformers: O último cavaleiro" source={Transformers} note="9.6" />
                    <Item protectThumb={this.protectThumb} name="Circulo de Fogo" source={Circulo_de_Fogo} note="7.5" />
                </div>
                <Link className="link" to="/filmes">Ver mais filmes</Link>
                <div className="title">
                    <h3>Principais Séries</h3>
                    <hr />
                </div>
                <div className="content">
                    <Item protectThumb={this.protectThumb} name="Vikings" source={Vikings} note="7" />
                    <Item protectThumb={this.protectThumb} name="Sobrenatural" source={Supernatural} note="8.6" />
                    <Item protectThumb={this.protectThumb} name="Justiceiro" source={Punisher} note="7.2" />
                </div>
                <Link className="link" to="/series">Ver mais séries</Link>
            </div>
        );
    }
}