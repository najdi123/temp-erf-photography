import React, { Component } from 'react';
import './Footer.css';
// import { fa, fa-facebook-f, fa-twitter} from 'font-awesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends Component {
    render() {
        return (
            // Footer
            <div className = "page-footer font-small bg-dark" >
                {/* Footer Links */}
                <div className="container text-center text-md-left"  >

                    {/* Grid row */}
                    <div className="row">

                        {/* Grid column */}
                        <div className=" col-md-4 col-lg-3 mr-auto">

                            {/* Content */}
                            <h5 class = "font-weight-bold text-uppercase mb-4" > Footer Content </h5>
                            <p> Here you can use rows and columns here to organize your footer content. </p>
                            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugit amet numquam iure provident voluptate esse
                                quasi, veritatis totam voluptas nostrum. </p>


                            { /* Grid column */ }
                        </div>

                        { /* Grid column */ }
                        <div className = " col-md-2 col-lg-2 mx-auto" >

                            < h5 className = "font-weight-bold text-uppercase mb-4" >
                                About
                            </h5>
                            <ul className = "list-unstyled" >
                                <li >
                                    <p>
                                        <a href = "#!" > PROJECTS </a>
                                    </p>
                                </li>
                                <li >
                                    <p>
                                        <a href = "#!" > ABOUT US </a>
                                    </p>
                                </li>
                                <li >
                                    <p>
                                        <a href = "#!" > BLOG </a>
                                    </p>
                                </li>
                                <li >
                                    <p>
                                        <a href = "#!" > AWARDS </a>
                                    </p>
                                </li>
                            </ul>
                            { /* Grid column */ }
                        </div>

                        <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                            {/* Contact details */}
                            <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <p>
                                        <i class="fa fa-home mr-3"></i> New York, NY 10012, US
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <i class="fa fa-envelope mr-3"></i> info@example.com</p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
                                </li>

                            </ul>
                        </div>

                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 text-center mx-auto">

                            {/* Social buttons */}
                            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                            {/* Facebook */}
                            <a type="button" className="btn-floating btn-fb">
                                <i className="fa fa-facebook"></i>
                                {/*< FontAwesomeIcon icon = "stroopwafel" />*/}
                                {/*< FontAwesomeIcon icon = "envelope" />*/}
                                {/*< FontAwesomeIcon icon = "coffee" />*/}

                                < i class = "fab fa-facebook" > </i>
                            </a>

                            {/* Twitter */}
                            <a type="button" className="btn-floating btn-tw">
                                <i className="fa fa-twitter"></i>
                                {/*< FontAwesomeIcon icon = "facebook" />*/}
                            </a>
                            {/* <!-- Google +--> */}
                            <a type="button" className="btn-floating btn-gplus">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            {/* <!-- Dribbble --> */}
                            <a type="button" className="btn-floating btn-dribbble">
                                <i className="fa fa-dribbble"></i>
                            </a>

                            { /* Grid column */ }
                        </div>

                        { /* Grid row */ }
                    </div>
                    { /* Footer Links */ }
                </div>
            </div>
            // Footer

        );
    }
}

export default Footer;