import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar bg-primary">
                    <h1>
                        <i className='fab fa-github' style={{marginLeft:'0.7px'}} /> {  this.props.title }
                    </h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;