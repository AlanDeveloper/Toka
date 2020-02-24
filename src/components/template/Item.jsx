import React, { Component } from 'react';

import '../style/Item.css';
import starSource from '../assets/img/star.png';

export default class Item extends Component {
    render() {
        return (
            <div className="card" onDragStart={this.props.protectThumb} onContextMenu={this.props.protectThumb}>
                <img src={`${this.props.source}`} alt="filme" />
                <div className="card-body">
                    <div className="line-break">
                        <a href="#" className={this.props.textLong}>{this.props.name}</a>
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