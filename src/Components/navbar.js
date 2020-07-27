import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav className="nav">
                <a className='brand-logo'>Pokemon</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default NavBar;