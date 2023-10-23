import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './navbar-styles.css';
config.autoAddCss = false

function NavBar() {
  return (
        <nav className="navbar">
          <div className="navbar-logo"> 
            <img src="./logo.svg" alt="Logo" />
          </div>
          <div className="navbar-title"><h3>BEAD Challenge By IEI (Internet Equity Initiative)</h3></div>
          <ul className="navbar-links">
            <li className="navbar-dropdown">
              <a href="#"> <FontAwesomeIcon icon={faBars} size = "1x"/></a>
              <ul className="dropdown-menu">
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </li>
          </ul>
        </nav>
  );
};
    

export default NavBar;
