import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-padding">
                    <span className="text-muted">Erfan Photography &#169; {new Date().getFullYear()}    </span>
                    <i href="https://www.facebook.com/erfan.photography" className="fab fa-facebook ml-auto" ></i>
                    <i className="fab fa-instagram ml-auto"></i>
                    <i className="fab fa-twitter ml-auto"></i>
                </div>

            </footer>

        );
    }
}

export default Footer;