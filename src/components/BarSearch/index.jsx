import React, { Component } from 'react';
import './style.css';

export default class BarSearch extends Component {
    render() {
        return (
            <div className="search">
                <form action="#" className="input-group" method="post">
                    <input type="text" className="form-control" placeholder="Procure seus filmes e séries..." />
                    <div className="icon">
                        <input type="submit" value="" />
                    </div>
                </form>
            </div>
        );
    };
}