import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-toggleable header sticky">
                <Fade top>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">Menu</span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/"><h1 className="header2">erfan.PHOTOGRAPHY</h1></Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                </Fade>
            </nav>

        );
    }
}

export default Navbar;

