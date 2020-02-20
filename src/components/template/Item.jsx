import React, { Component } from 'react';

import '../style/Item.css';
import starSource from '../assets/img/star.png';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.response = this.response.bind(this);
    }

    response(evt) {
        evt.preventDefault();
    }

    render() {

        return (
            <div className="card" onDragStart={this.response} onContextMenu={this.response}>
                <img src={`${this.props.source}`} alt="filme" />
                <div className="card-body">
                    <a href="#">Vingadores</a>
                    <p>
                        <img className="star" src={`${starSource}`} alt="estrela" />
                        {this.props.note}/10
                    </p>
                </div>
            </div>
        );
    }
}