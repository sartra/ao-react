import React, { Component } from 'react';
import Carousel from "./../carouselComponent/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import FadeIn from 'react-fade-in';

// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import reducers from './reducers'
// import reduxThunk from 'redux-thunk'

// import Slider from './../carouselComponent/Slider'

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// const store = createStoreWithMiddleware(reducers)



class HomePage extends Component {

  render() {

    return (
      
        <div className="container-fluid">
          
          <FadeIn>  
           <h1> asynchronous node monitor & package control monitor </h1>

           <Carousel /> 

          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>

          </FadeIn>
        </div>
       
    );
  }
}

export default HomePage;
