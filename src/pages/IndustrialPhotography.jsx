import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
// import pic1 from '../images/mobl (1).JPG';
// import pic2 from '../images/mobl (2).JPG';
// import pic3 from '../images/mobl (3).JPG';
// import pic4 from '../images/mobl (4).JPG';
// import pic5 from '../images/mobl (5).JPG';
// import pic6 from '../images/mobl (6).JPG';
// import pic7 from '../images/mobl (7).JPG';
// import pic8 from '../images/mobl (8).JPG';

import pic1 from "../images/PhotographyImages/Industrial/pic (1).jpg";
import pic2 from "../images/PhotographyImages/Industrial/pic (2).jpg";
import pic3 from "../images/PhotographyImages/Industrial/pic (3).jpg";
import pic4 from "../images/PhotographyImages/Industrial/pic (4).jpg";
import pic5 from "../images/PhotographyImages/Industrial/pic (5).jpg";
import pic6 from "../images/PhotographyImages/Industrial/pic (6).jpg";
import pic7 from "../images/PhotographyImages/Industrial/pic (7).jpg";
import pic8 from "../images/PhotographyImages/Industrial/pic (8).jpg";
import pic9 from "../images/PhotographyImages/Industrial/pic (9).jpg";
import pic10 from "../images/PhotographyImages/Industrial/pic (10).jpg";
import pic11 from "../images/PhotographyImages/Industrial/pic (11).jpg";
import pic12 from "../images/PhotographyImages/Industrial/pic (12).jpg";
import pic13 from "../images/PhotographyImages/Industrial/pic (13).jpg";
import pic14 from "../images/PhotographyImages/Industrial/pic (14).JPG";
import pic15 from "../images/PhotographyImages/Industrial/pic (15).jpg";
import pic16 from "../images/PhotographyImages/Industrial/pic (16).jpg";
import pic17 from "../images/PhotographyImages/Industrial/pic (17).jpg";
import pic18 from "../images/PhotographyImages/Industrial/pic (18).jpg";
import pic19 from "../images/PhotographyImages/Industrial/pic (19).jpg";
import pic20 from "../images/PhotographyImages/Industrial/pic (20).jpg";
import pic21 from "../images/PhotographyImages/Industrial/pic (21).jpg";
import pic22 from "../images/PhotographyImages/Industrial/pic (22).jpg";
import pic23 from "../images/PhotographyImages/Industrial/pic (23).jpg";
import pic24 from "../images/PhotographyImages/Industrial/pic (24).JPG";
import pic25 from "../images/PhotographyImages/Industrial/pic (25).jpg";
import pic26 from "../images/PhotographyImages/Industrial/pic (26).jpg";
import pic27 from "../images/PhotographyImages/Industrial/pic (27).jpg";
import pic28 from "../images/PhotographyImages/Industrial/pic (28).jpg";




const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28];
//
// const images = [
//     '../images/01.jpg',
//     '../images/02.jpg',
//     '../images/03.jpg'
// ];

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
                    <img src={pic19} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img src={pic20} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img src={pic21} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />
                    <img src={pic22} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img src={pic23} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img src={pic24} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />
                    <img src={pic25} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />
                    <img src={pic26} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />
                    <img src={pic27} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:26 })} />
                    <img src={pic28} className="thumbnail" alt=""  onClick={() => this.setState({ isOpen: true, photoIndex:27 })} />



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