 import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Gallery from '../components/Gallery'




class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron/>
                <Gallery/>


                <Footer />
            </div>
        );
    }
}

export default Home;