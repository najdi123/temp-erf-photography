import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm header sticky mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">

                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"> menu </span>
                    </button>

                    <div className="collapse navbar-collapse " id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;

