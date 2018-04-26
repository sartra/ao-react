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

     const styles = {
        p: {
          margin: 50
       },
        h1: {
          margin: 20
        }
      };

    return (
      
        <div className="container-fluid">
          
          <FadeIn>  
           <h1 style={styles.h1}> asynchronous node monitor & package control monitor </h1>

           <Carousel /> 

          <p style={styles.p}>AsyncOptics is an asynchronous code viewer, performance monitor, and package monitor for Node.js and Mongodb applications. It is able to track and monitor asynchronous processes with Node.js' Async Hooks and Perf Hooks. The aggregated information is displayed in a Sankey diagram with hierarchical behavior of asynchronous functions and as a Sunburst graph for information of package monitoring. The Sankey diagram handles real-time changes for live testing and allows hovering capabilities to show specific information on desired functions on a lower panel.</p>

          </FadeIn>
        </div>
       
    );
  }
}

export default HomePage;
