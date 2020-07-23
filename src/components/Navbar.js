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
              <AniLink className="navbar-item" fade to="/about">
              A propos
              </AniLink>
              <AniLink fade className="navbar-item" fade to="/gallery">
                Réalisations
              </AniLink>
              <AniLink fade className="navbar-item" fade to="/blog">
                Actu
              </AniLink>
              <AniLink fade className="navbar-item" fade to="/contact">
                Contact
              </AniLink>
            </div>
    fade       </div>
        </div>
      </nav>
    )
};

export default Navbar;
