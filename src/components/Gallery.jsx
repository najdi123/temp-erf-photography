import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Fade from "react-reveal/Fade";
import './Gallery.css'


import p3 from "../images/PhotographyImages/Children/pic-(1).jpg";
import p4 from "../images/PhotographyImages/car/003.jpg";

import p6 from "../images/PhotographyImages/Location/pic  (5).jpg";
import p7 from "../images/PhotographyImages/Clothing/01.jpg";

import p9 from "../images/PhotographyImages/pic (9).jpg";

import p11 from "../images/PhotographyImages/Industrial/020.jpg";

import p13 from "../images/PhotographyImages/pic (13).jpg";
import p15 from "../images/PhotographyImages/Food/pic-(25).jpg";

import p17 from "../images/PhotographyImages/pic (14).jpg";
import p18 from "../images/PhotographyImages/pic (15).jpg";
import p19 from "../images/PhotographyImages/pic (16).jpg";
import p20 from "../images/PhotographyImages/pic (17).jpg";
import Clothing from "../pages/ClothingPhotography";


class Gallery extends Component {
    render() {
        return (
            <div className="row portfolio">
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/FoodPhotography">
                            <div className="img__wrap thumbnail">

                                <img className="img__img" src={p13} alt="" />

                                <div className="img__description">
                                    <div className="m-center">

                                        <h5>This album contains photos of foods, edibles and restaurants  </h5>

                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Food Photography Album</p>
                    </div>
                </Fade>

                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LifeStylePhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p9} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album contains photos of people in different situations such as events or sports</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Lifestyle Photography Album</p>
                    </div>
                </Fade>
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ChildrenPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p3} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album includes photos of children and youth </h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Children Photography Album</p>
                    </div>
                </Fade>
                {/*<Fade right>*/}
                    {/*<div className="col-sm-12 col-md-6 col-lg-4 pax">*/}
                        {/*<Link to="/Photography/DecorativeProducts">*/}
                            {/*<div className="img__wrap thumbnail">*/}
                                {/*<img className="img__img" src={p20} alt="" />*/}
                                {/*<div className="img__description">*/}
                                    {/*<div className="m-center">*/}
                                        {/*<h5>This album contains photos of products such as perfumes, make up, jewlery, sofas, handbags and shoes</h5>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</Link>*/}
                        {/*<p >Decorative products Photography Album</p>*/}
                    {/*</div>*/}
                {/*</Fade>*/}
                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/CarPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p4} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4>This album contains still and moving photos of cars and other vehicles interior and exterior </h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Vehicle Photography Album</p>
                    </div>
                </Fade>
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/pngPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p19} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h4>This album contains sharp images of products without background or with white background, suitable for web and catalog uses </h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >PNG Photography Album</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/IndustrialPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p11} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        Content goes here
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Industrial Photography</p>
                    </div>
                </Fade>
                {/*<Fade bottom>*/}
                    {/*<div className="col-sm-12 col-md-6 col-lg-4 pax">*/}
                        {/*<div className="img__wrap thumbnail">*/}
                            {/*<img className="img__img" src={p15} alt="" />*/}
                            {/*<div className="img__description">*/}
                                {/*<div className="m-center">*/}
                                    {/*<h4>This album contains interior, exterior photos of restaurant spaces and atmosphere </h4>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<p >Restaurant space Photography </p>*/}
                    {/*</div>*/}
                {/*</Fade>*/}
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <div className="img__wrap thumbnail">
                            <img className="img__img" src={p18} alt="" />
                            <div className="img__description">
                                <div className="m-center">
                                    Content goes here
                                </div>
                            </div>
                        </div>
                        <p >Aerial Photography and Filming</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <div className="img__wrap thumbnail">
                            <img className="img__img" src={p17} alt="" />
                            <div className="img__description">
                                <div className="m-center">
                                    <h5>This album includes photos of out-door modeling, clothing and accesories</h5>
                                </div>
                            </div>
                        </div>
                        <p >Famous faces Photography Album</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/LocationPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p6} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        <h5>This album includes photos of out-door modeling, clothing and accesories</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <p >Location Photography Album</p>
                    </div>
                </Fade>
                <Fade left>
                    <div className="col-sm-12 col-md-6 col-lg-4 pax">
                        <Link to="/Photography/ClothingPhotography">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p7} alt="" />
                                <div className="img__description">
                                    <div className="m-center">
                                        Content goes here
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <p >Clothing/Modeling Photography Album</p>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Gallery;