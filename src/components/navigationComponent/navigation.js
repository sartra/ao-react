import React, { Component } from 'react'; 
import {
  Link
} from "react-router-dom";
import classNames from 'classnames';

//navigation display
export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      scrollPosition: window.scrollTop,
      windowPosition: window.pageYOffset,
      mobileNavVisible: false,
      navClasses: classNames({'nav_container':true, 'nav_pinch':false})
    };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  navigationLinks() {
    return [
       <ul onClick={this.handleNavClick.bind(this)} key={100}>
        <li key={1}><Link to="about">ABOUT</Link></li>
        <li key={2}><Link to="install">INSTALL</Link></li>
        <li key={3}><Link to="asyncmonitor">ASYNC MONITOR</Link></li>
        <li key={4}><Link to="pkgmonitor">PACKAGE MONITOR</Link></li>
        <li key={5}><Link to="team">ASYNC MONITOR</Link></li>
      </ul>
    ];
  }

  handleScroll() {
    this.setState({windowPosition: window.pageYOffset});
    this.setState({scrollPosition: document.body.scrollTop});

    if(this.state.windowPosition >= 150) {
      this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':true})});
    } else {
      this.setState({navClasses: classNames({'nav_container':true, 'nav_pinch':false})});
    }
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  // this function that will render either the mobile navigation or the full one
  renderNavigation() {
    if(this.state.windowWidth <= 1080) {
      return [
        <div className="mobile_nav">
          <p onClick={this.handleNavClick.bind(this)}><i class="material-icons"></i></p>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className="nav_menu">
          {this.navigationLinks()}
        </div>
      ]; 
    }
  }


  render() {
    return (
      <div key={103} className={this.state.navClasses}>
        <div key={200} id="navigation_bar">
          <div key={300} className="nav_title"><Link to="/">Async Optics</Link></div>
          {this.renderNavigation()}
        </div>
      </div>
    );
  }
}