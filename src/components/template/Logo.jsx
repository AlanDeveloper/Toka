import React, { Component } from 'react';
import '../style/Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a href="/">
                    <p><strong>T</strong>oka</p>
                </a>
            </div>
        );
    }
}