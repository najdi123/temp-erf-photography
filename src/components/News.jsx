import React, {Component} from 'react';



import n1 from "../images/GraphicPageImages/blog-clients.jpg";
import n2 from "../images/GraphicPageImages/blog-playboy.jpg";
import n3 from "../images/GraphicPageImages/blog-jet.jpg";



class News extends Component {
    render() {
        return (
            <div className="news">
                <div className="jumbotron">
                    <div className="container">
                        <h6 className="name">NEWS</h6>
                        <p className="describe-brands">
                            All the latest news, updates on recent projects and stories from the world of design.
                        </p>

                        <section className="row news-images">
                            <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                <a className="nav-link" to="#">
                                    <img src={n1} alt="" />
                                    <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                        Thou Shall Not Consult With thy Neighbor’s Wife for Design
                                        Feedback
                                    </h5>
                                </a>
                                <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 17, 2017</p>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                <a className="nav-link" to="#">
                                    <img src={n2} alt="" />
                                    <h5 className="describe-news" style={{paddingTop: '2rem'}}>New packaging design collaboration with Playboy in LA</h5>
                                </a>
                                <p style={{ color: "rgb(0, 240, 220)" }}>SEPTEMBER 3, 2017</p>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 news-pad">
                                <a className="nav-link" to="#">
                                    <img src={n3} alt="" />
                                    <h5 className="describe-news" style={{paddingTop: '2rem'}}>
                                        Flying high with new Magellan Jets advertising campaign
                                    </h5>
                                </a>
                                <p style={{ color: "rgb(0, 240, 220)" }}>AUGUST 24, 2017</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;