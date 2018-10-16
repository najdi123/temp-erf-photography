import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

import FoodPhoto from './pages/FoodPhotography.jsx';
import LifeStylePhotos from './pages/LifeStylePhotography.jsx';
import ChildrenPhotos from './pages/ChildrenPhotography.jsx';
import DecorativePhotos from './pages/DecorativeProducts.jsx';
import CarPhotos from './pages/CarPhotography.jsx';
import Clothing from './pages/ClothingPhotography.jsx';
import PNG from './pages/pngPhotography.jsx';
import LocationPhotography from './pages/LocationPhotography.jsx';
import IndustrialPhoto from './pages/IndustrialPhotography.jsx';
import Aerial from './pages/AerialPhotography';
import Famous from './pages/FamousFaces';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';

library.add(faGhost, faFacebook);


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>

                    <Route exact path="/Photography/FoodPhotography" component={FoodPhoto}/>
                    <Route exact path="/Photography/LifeStylePhotography" component={LifeStylePhotos}/>
                    <Route exact path="/Photography/ChildrenPhotography" component={ChildrenPhotos}/>
                    <Route exact path="/Photography/DecorativeProducts" component={DecorativePhotos}/>
                    <Route exact path="/Photography/CarPhotography" component={CarPhotos}/>
                    <Route exact path="/Photography/ClothingPhotography" component={Clothing}/>
                    <Route exact path="/Photography/pngPhotography" component={PNG}/>
                    <Route exact path="/Photography/LocationPhotography" component={LocationPhotography}/>
                    <Route exact path="/Photography/IndustrialPhotography" component={IndustrialPhoto}/>
                    <Route exact path="/Photography/AerialPhotography" component={Aerial}/>
                    <Route exact path="/Photography/FamousFaces" component={Famous}/>

                </div>
            </Router>
        );
    }
}

export default App;
