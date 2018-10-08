import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import pic from '../images/optimized-studio-wide-1500x630.jpg';
import Fade from "react-reveal/Fade";
import './Home.css';



class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <img src={pic} width="1500" height="630"  alt="Product photography photo studio"  style={{left: 0}} className="about-pic" />
                <div className="container">
                    <Fade left>
                        <p className="about-erf">
                            My name is Erfan Askari, a freelance Photographer and Branding Consultant based in Tehran. I have over 12 years of professional work with the Iran’s leading brands and have developed more than 20 brands while collaborating with some of the best design agencies around the globe.
                            <br/>
                        </p>
                    </Fade>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
