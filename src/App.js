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
import IndustrialPhoto from './pages/IndustrialPhotography.jsx';


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
                    <Route exact path="/Photography/IndustrialPhotography" component={IndustrialPhoto}/>

                </div>
            </Router>
        );
    }
}

export default App;
