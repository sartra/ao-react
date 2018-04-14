import React, { Component } from 'react';
import logo from './../../logo.svg';
import {
  Link
} from "react-router-dom";
import NavContainer from './../navigationComponent/navigation';

class Header extends Component {
  
  // burgerToggle() {
  //   let linksEl = document.querySelector('.narrowLinks');
  //   if (linksEl.style.display === 'block') {
  //     linksEl.style.display = 'none';
  //   } else {
  //     linksEl.style.display = 'block';
  //   }
  // }

  render() {
    return (
   
        <header className="header-container">

          <div className="logo"> 
            <img src={logo} className="logo" alt="logo" /> 
          </div>

                
                <nav className="nav">

                  <div className="nav-mobile">
                    <a id="nav-toggle" href="#!"><span></span></a>
                  </div>

                    <ul className="nav-list">
                      <li className="first">
                        <Link to='/'>About</Link>
                      </li>
                      <li>
                        <Link to='/install'>Install</Link>
                      </li>
                      <li>
                        <Link to="/asyncmonitor">Async Monitor</Link>
                      </li>
                      <li>
                        <Link to="/pkgmonitor">Package Monitor</Link>
                      </li>
                      <li className="last">
                        <Link to="/team">Team</Link>
                      </li>
                    </ul>

                </nav>


        </header>
       
    );
  }
}

export default Header;
