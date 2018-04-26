import React, { Component } from 'react';

class InstallationPage extends Component {
  render() {

    const styles = {
        npm:{
          fontWeight: 900,
          backgroundColor: '#efefef',
          padding: 10,
          width: 300,
          textAlign: 'center',
          margin: '0 auto',
          marginTop: 50
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
            
          <h1 > Installation instructions </h1>
          
          <p style={styles.npm}> npm i async-optics </p> 

          <p style={styles.p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>

        </div>
       
    );
  }
}

export default InstallationPage;
