import React, { Component } from 'react';

import Async from './../../Assets/img/async.gif'

class InstallPage extends Component {
  render() {

    const styles = {
      gif:{
        backgroundImage: `url(${Async})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '640px',
        width: '1000px',
        margin: '0 auto',
      },
      p: {
        margin: 50
     },
      h1: {
        margin: 20
      }
    };



    return (

      <div className="container-fluid">

        <h1 style={styles.h1}>async monitor</h1> 

        <div className="image-slide" style={styles.gif}></div>

        <p style={styles.p}>AsyncOptics is an asynchronous code viewer, performance monitor, and package monitor for Node.js and Mongodb applications. It is able to track and monitor asynchronous processes with Node.js' Async Hooks and Perf Hooks. The aggregated information is displayed in a Sankey diagram with hierarchical behavior of asynchronous functions and as a Sunburst graph for information of package monitoring. The Sankey diagram handles real-time changes for live testing and allows hovering capabilities to show specific information on desired functions on a lower panel.</p>

      </div>

      );
  }
}

export default InstallPage;
