import React, { Component } from 'react';


class Header extends Component {
    
    constructor() {
        super();
        this.state = {
            toggle: false
        }
    }

    render() { 
        console.log(this.state.toggle);
        return ( 
            <header>
                <div>
                    <div className="logo">Logo</div>

                    <button onClick={() => this.setState({toggle: !this.state.toggle})}><p>&#x1F354;</p></button>
                    <nav className={this.state.toggle ? 'show' : ''}>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
         );
    }
}
 
export default Header;
