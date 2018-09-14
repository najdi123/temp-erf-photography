import React, {Component} from 'react';

import Fade from "react-reveal/Fade";
import './Services.css'

import pp1 from "../images/dslr-top.png";
import pp2 from "../images/filming.png";
import pp3 from "../images/editing.png";

class Jumbotron extends Component {
    render() {
        return (
            <div className="services">
                <div className="jumbotron blue-jumbo">
                    <div className="container blue-container">
                        <section className="intro">
                            <Fade right>
                                <p className="name" > SERVICES</p>
                            </Fade>
                            <Fade left>
                                <h2 className="blue-describe ">
                                    Full-service creative solution for brand design, digital content
                                    and packaging development.</h2>
                            </Fade>
                        </section>
                        <section className="row services-wrapper">
                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#">
                                        <Fade left>
                                            <img src={pp1} alt="" />
                                        </Fade>
                                    </a>
                                    <Fade left>
                                    <h2 style={{ color: "rgb(0, 240, 220)" }}>عکاسی</h2>
                                    </Fade>
                                    {/*<h3 style={{ color: "rgb(0, 240, 220)" }}>*/}
                                    {/*Brand strategy, creative direction and production for*/}
                                    {/*printed and online projects.*/}
                                    {/*</h3>*/}
                                    <Fade top>
                                    <h1 className="brand-describe">عکاسی ساده از محصول (png)</h1>
                                    <h1 className="brand-describe">عکاسی از محصول با دکور</h1>
                                    <h1 className="brand-describe">عکاسی لباس بدون مدل</h1>
                                    <h1 className="brand-describe">عکاسی لباس با مدل در استودیو</h1>
                                    <h1 className="brand-describe">عکاسی لباس با مدل در فضای باز</h1>
                                    <h1 className="brand-describe">عکاسی از خدمات و سرویس</h1>
                                    <h1 className="brand-describe">عکاسی خارجی ساختمان (Architecture)</h1>
                                    <h1 className="brand-describe">عکاسی داخلی ساختمان</h1>
                                    </Fade>
                                    <br />
                                    <br />
                                    {/*<a href="#">*/}
                                    {/*<p className="portfolio-link">VIEW PHOTOGRAPHY PORTFOLIO ></p>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#">
                                        <Fade bottom>
                                            <img src={pp2} alt="" />
                                        </Fade>
                                    </a>
                                    <Fade top>
                                    <h2 style={{ color: "rgb(0, 240, 220)" }}>فیلم</h2>
                                    </Fade>
                                    <Fade bottom>
                                    <h1 className="brand-describe">فیلم برداری با انواع دوربین حرفه ای</h1>
                                    <h1 className="brand-describe">فیلم برداری با crane</h1>
                                    <h1 className="brand-describe">فیلم برداری هوایی</h1>
                                    </Fade>
                                    <br />
                                    <br />
                                    <a href="#">
                                        {/*<p className="portfolio-link">*/}
                                        {/*VIEW FILMING PORTFOLIO >*/}
                                        {/*</p>*/}
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#">
                                        <Fade right>
                                            <img src={pp3} alt="" />
                                        </Fade>
                                    </a>
                                    <Fade top>
                                    <h2 style={{ color: "rgb(0, 240, 220)" }}>روتوش و تدوین</h2>
                                    </Fade>
                                    <Fade left>
                                    <h1 className="brand-describe">روتوش عکس</h1>
                                    <h1 className="brand-describe">تدوین فیلم</h1>
                                    </Fade>
                                    <br />
                                    <br />
                                    {/*<a href="#">*/}
                                    {/*<p className="portfolio-link">VIEW EDITING PORTFOLIO ></p>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </section>
                    </div>

                </div>


            </div>
        );
    }
}

export default Jumbotron;