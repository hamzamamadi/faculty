import React, { Component } from 'react';
import Menu from './menu';


export default class header extends Component {
    render() {
        return (
            <nav>
            <img src='/logo2.jpg' alt='hi'></img>

                <Menu></Menu>

            </nav>
        )
    }
}
