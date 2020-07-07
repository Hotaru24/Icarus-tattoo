import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo2.jpg';

const Navbar = () => {

  const [active, setactive]  = useState(false);
  const [navBarActiveClass, setnavBarActiveClass]  = useState('');


  const toggleHamburger = () => {
    setactive(!active)
  };

  useEffect(()=>
    active ?  setnavBarActiveClass('is-active') : setnavBarActiveClass('')
  );


 
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
              A propos
              </Link>
              <Link className="navbar-item" to="/gallery">
                Réalisations
              </Link>
              <Link className="navbar-item" to="/blog">
                Actu
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
