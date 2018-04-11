import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components 
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import NavContainer from './components/navigationComponent/navigation';

import HomePage from './components/pages/homePage';
import InstallationPage from './components/pages/installationPage';
import PkgPage from './components/pages/pkgPage';
import AsyncPage from './components/pages/asyncPage';
import TeamPage from './components/pages/teamPage';

// includes 
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

            <Header /> 
          
              <Route exact path='/' component={HomePage} /> 
              <Route exact path='/install' component={InstallationPage} /> 
              <Route exact path='/pkgmonitor' component={PkgPage} /> 
              <Route exact path='/asyncmonitor' component={AsyncPage} /> 
              <Route exact path='/team' component={TeamPage} /> 

            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
