import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import logo from '../img/logoN.png';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../Style/navbar.css";

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
            <Link to="/" className="navbar-item" title="Accueil">
              <img src={logo} alt="icarus_tattoo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              role = "menu"
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
              <AniLink className="navbar-item" fade to="/about" duration={1}>
              A propos
              </AniLink>
              <AniLink className="navbar-item" fade to="/gallery" duration={1}>
                Book
              </AniLink>
              <AniLink className="navbar-item" fade to="/blog" duration={1}>
                News
              </AniLink>
              <AniLink className="navbar-item" fade to="/contact" duration={1}>
                Contact
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;
