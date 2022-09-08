import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/search">Search Cocktail</Link>
          </li>
          <li>
            <Link to="/menupage">My Menu</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
