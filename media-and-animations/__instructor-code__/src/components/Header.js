import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <div className='logo'>Logo</div>

                    <nav>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}