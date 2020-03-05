import React, { Component } from 'react';

import '../style/Item.css';
import starSource from '../assets/img/star.png';

import { Link } from 'react-router-dom';

export default class Item extends Component {
    render() {
        return (
            <div className="card">
                <img src={`${this.props.source}`} alt="filme" />
                <div className="card-body">
                    <div className="line-break">
                        <Link to="/filmes/assistir/1" className={this.props.textLong}>{this.props.name}</Link>
		            </div>
                    <p>
                        <img className="star" src={`${starSource}`} alt="estrela" />
                        {this.props.note}/10
                    </p>
                </div>
            </div>
        );
    }
}