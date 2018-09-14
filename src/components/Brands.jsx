import React, {Component} from 'react';
import Fade from 'react-reveal'
import './Brands.css'

import b1 from "../images/GraphicPageImages/logo-playboy.jpg";
import b2 from "../images/GraphicPageImages/logo-magellan-jets.jpg";
import b3 from "../images/GraphicPageImages/logo-la-cold.jpg";
import b4 from "../images/GraphicPageImages/logo-swell.jpg";
import b5 from "../images/GraphicPageImages/logo-espresso.jpg";
import b6 from "../images/GraphicPageImages/logo-saturnbath.jpg";
import b7 from "../images/GraphicPageImages/logo-moet.jpg";
import b8 from "../images/GraphicPageImages/logo-dca.jpg";
import b9 from "../images/GraphicPageImages/logo-ticketmaster.jpg";
import b10 from "../images/GraphicPageImages/logo-nespresso.jpg";
import b11 from "../images/GraphicPageImages/logo-akzonobel.jpg";
import b12 from "../images/GraphicPageImages/logo-barclays.jpg";




class Brands extends Component {
    render() {
        return (
            <div className="brands">
                <div className="jumbotron">
                    <div className="container">

                        <h6 className="name">BRANDS</h6>
                        <Fade right>
                            <p className="describe-brands">
                                From telecommunication giants, household brands and private jet companies to small businesses and individuals, I’ve completed work in just about every business sector.
                            </p>
                        </Fade>

                        <section className="brands-logo">
                            <div className="row brands-row">
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b1} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b2} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b3} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b4} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b5} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b6} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b7} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b8} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b9} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b10} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b11} alt="" />
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b12} alt="" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        );
    }
}

export default Brands;