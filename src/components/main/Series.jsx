import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Main.css';

import Item from '../template/Item';

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
                    <h3>Navegar por Séries</h3>
                    <hr />
                </div>
                <div className="content space">
                    <Item protectThumb={this.protectThumb} name="Vikings" source={Vikings} note="7" />
                    <Item protectThumb={this.protectThumb} name="Sobrenatural" source={Supernatural} note="8.6" />
                    <Item protectThumb={this.protectThumb} name="Justiceiro" source={Punisher} note="7.2" />
                    <Item protectThumb={this.protectThumb} name="Vikings" source={Vikings} note="7" />
                    <Item protectThumb={this.protectThumb} name="Sobrenatural" source={Supernatural} note="8.6" />
                    <Item protectThumb={this.protectThumb} name="Justiceiro" source={Punisher} note="7.2" />
                    <Item protectThumb={this.protectThumb} name="Vikings" source={Vikings} note="7" />
                    <Item protectThumb={this.protectThumb} name="Sobrenatural" source={Supernatural} note="8.6" />
                    <Item protectThumb={this.protectThumb} name="Justiceiro" source={Punisher} note="7.2" />
                </div>
            </div>
        );
    }
}