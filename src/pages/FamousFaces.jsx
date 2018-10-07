import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
import 'react-image-lightbox/style.css';


import pic1 from "../images/PhotographyImages/Famous/pic (1).jpg";
import pic2 from "../images/PhotographyImages/Famous/pic (2).jpg";
import pic3 from "../images/PhotographyImages/Famous/pic (3).jpg";
import pic4 from "../images/PhotographyImages/Famous/pic (4).jpg";
import pic5 from "../images/PhotographyImages/Famous/pic (5).jpg";
import pic6 from "../images/PhotographyImages/Famous/pic (6).jpg";
import pic7 from "../images/PhotographyImages/Famous/pic (7).jpg";
import pic8 from "../images/PhotographyImages/Famous/pic (8).jpg";
import pic9 from "../images/PhotographyImages/Famous/pic (9).jpg";
import pic10 from "../images/PhotographyImages/Famous/pic (10).jpg";
import pic11 from "../images/PhotographyImages/Famous/pic (11).jpg";
import pic12 from "../images/PhotographyImages/Famous/pic (12).jpg";
import pic13 from "../images/PhotographyImages/Famous/pic (13).jpg";
import pic14 from "../images/PhotographyImages/Famous/pic (14).jpg";
import pic15 from "../images/PhotographyImages/Famous/pic (15).jpg";
import pic16 from "../images/PhotographyImages/Famous/pic (16).jpg";
import pic17 from "../images/PhotographyImages/Famous/pic (17).jpg";
import pic18 from "../images/PhotographyImages/Famous/pic (18).jpg";
import {Link} from "react-router-dom";






const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic12, pic13, pic14, pic15, pic16, pic17, pic18];


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
            <div>

                <div className="container">
                    <nav className="navbar navbar-expand navbar-light bg-light container">
                        <div className="collapse navbar-collapse " id="navbarText">
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
                                    <Link className="nav-link" to="/Photography/pngPhotography">
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
                                    <Link className="nav-link active" to="/Photography/FamousFaces">
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
                    <img src={pic8} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img src={pic9} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img src={pic10} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img src={pic11} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img src={pic12} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img src={pic13} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img src={pic14} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img src={pic15} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />
                    <img src={pic16} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />
                    <img src={pic17} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />
                    <img src={pic18} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />






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