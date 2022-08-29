import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.png';


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
            <Link to="/cocktails/new">Add Cocktail</Link>
          </li>
          <li>
            <Link to="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link to="/cocktails">
              <img src={logo3} alt="shopping logo" className="logo3" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
