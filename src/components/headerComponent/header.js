import React, { Component } from 'react';
import logo from './../../logo.svg';

class Header extends Component {
  render() {
    return (
   
        <header className="App-header">
          
          <div className="logo"> 
            <img src={logo} className="App-logo" alt="logo" /> 
          </div>

          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Async Monitor</a>
              </li>
              <li>
                <a href="#">Package Monitor</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </nav>

        </header>
       
    );
  }
}

export default Header;
