import React, {useEffect, useState} from 'react';
//import Navbar from "../components/Navbar";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../img/logoB.png";
import "../Style/homePage.css";


const Index = () => {

  const [active, setactive]  = useState(false);
  const [navBarActiveClass, setnavBarActiveClass]  = useState('');


  const toggleHamburger = () => {
    setactive(!active)
  };

  useEffect(()=> 
    active ?  setnavBarActiveClass('is-active') : setnavBarActiveClass('')
  );

  return (
    <div id="indexBody">
      <section className="indexSection">
        <img src={logo}/>
        
      </section>
      <section className="indexSection">
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
          style={{backgroundColor: "transparent !important"}}
        >
          <div className="container"> 
            <div className="navbar-brand">
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
              <div className="navbar has-text-centered">
                <AniLink className="navbar-item" fade to="/about">
                A propos
                </AniLink>
                <AniLink className="navbar-item" fade to="/gallery">
                  Book
                </AniLink>
                <AniLink className="navbar-item" fade to="/blog">
                  News
                </AniLink>
                <AniLink className="navbar-item" fade to="/contact">
                  Contact
                </AniLink>
              </div>
            </div>
          </div>
        </nav>
        <div id="homeFont"/>        
      </section>
    </div>
  )
};

export default Index;