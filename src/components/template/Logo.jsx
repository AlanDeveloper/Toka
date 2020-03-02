import React, { Component } from 'react';
import '../style/Logo.css';

import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <p><strong>T</strong>oka</p>
                </Link>
            </div>
        );
    }
}