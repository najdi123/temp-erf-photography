import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
import 'react-image-lightbox/style.css';


import pic1 from "../images/PhotographyImages/pngPhotos/01.jpg";
import pic2 from "../images/PhotographyImages/pngPhotos/02.jpg";
import pic3 from "../images/PhotographyImages/pngPhotos/03.jpg";
import pic4 from "../images/PhotographyImages/pngPhotos/04.jpg";
import pic5 from "../images/PhotographyImages/pngPhotos/05.jpg";
import pic6 from "../images/PhotographyImages/pngPhotos/06.jpg";
import pic7 from "../images/PhotographyImages/pngPhotos/07.jpg";
import {Link} from "react-router-dom";






const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];


class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div >

                <div >
                    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="mobile-nav">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/LifeStylePhotography">
                                        Lifestyle
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/FoodPhotography">
                                        Food
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/ChildrenPhotography">
                                        Children
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/CarPhotography">
                                        Car
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Photography/pngPhotography">
                                        png
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/IndustrialPhotography">
                                        Industrial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/AerialPhotography">
                                        Aerial
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/FamousFaces">
                                        Famous Faces
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/LocationPhotography">
                                        Location
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Photography/ClothingPhotography">
                                        Clothing
                                    </Link>
                                </li>
                            </ul>

                        </div>

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
                </div>


                {!isOpen &&
                <div className="image-display">

                    <img src={pic1} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img src={pic2} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img src={pic3} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img src={pic4} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />

                    <img src={pic5} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img src={pic6} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img src={pic7} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />






                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;