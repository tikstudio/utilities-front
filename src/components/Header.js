import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              < Link to="/">Home</Link>
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <Link to="/log-out">LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
      ;
  }
}

export default Header;