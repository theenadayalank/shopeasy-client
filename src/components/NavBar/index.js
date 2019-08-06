import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const NavBar = () => (
  <div className="navbar">
    <h2 className="navbar-title" >ShopEasy</h2>
    <ul className="navbar-links">
      <li>
        <Link to="/" className="navbar-link">Home</Link>
      </li>
      <li>
        <Link to="/signup" className="navbar-link">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin" className="navbar-link">Sign In</Link>
      </li>
    </ul>
  </div>
);


export default NavBar;
