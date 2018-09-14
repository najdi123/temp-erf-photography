import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBox.css';
import 'react-image-lightbox/style.css';


import pic1 from "../images/PhotographyImages/car/03.jpg";
import pic2 from "../images/PhotographyImages/car/04.jpg";
import pic3 from "../images/PhotographyImages/car/05.jpg";
import pic4 from "../images/PhotographyImages/car/06.jpg";
import pic5 from "../images/PhotographyImages/car/07.jpg";
import pic6 from "../images/PhotographyImages/car/08.jpg";
import pic7 from "../images/PhotographyImages/car/010.jpg";
import pic8 from "../images/PhotographyImages/car/011.jpg";
import pic9 from "../images/PhotographyImages/car/12.jpg";
import pic10 from "../images/PhotographyImages/car/013.jpg";
import pic11 from "../images/PhotographyImages/car/015.jpg";
import pic12 from "../images/PhotographyImages/car/016.jpg";
import pic13 from "../images/PhotographyImages/car/017.jpg";





const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];
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