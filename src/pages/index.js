import React, {useEffect, useState} from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../img/logoB.png";
import logoT from "../img/logoN.png";
import soulignement from "../img/soulignement.png";
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
        <img id="homePictureLogo" src={logo} alt="logo"/>
        <img id="homeLogo" src={logoT} alt=""/>
        <img id="homeSoulignement" src={soulignement} alt=""/>
        <h2>Artiste tatoueur - Bordeaux</h2>
        <AniLink  paintDrip top="exit" to="/about" duration={0.75} color="black">
          <div className="bttn bttn-two">
            <span>Découvrir</span>
          </div>
        </AniLink>
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
                <AniLink className="navbar-item" swipe  to="/about" duration={1.25}>
                A propos
                </AniLink>
                <AniLink className="navbar-item" swipe  to="/gallery" duration={1.25}>
                  Book
                </AniLink>
                <AniLink className="navbar-item" swipe  to="/blog" duration={1.25}>
                  News
                </AniLink>
                <AniLink className="navbar-item" swipe  to="/contact" duration={1.25}>
                  Contact
                </AniLink>
              </div>
            </div>
          </div>
        </nav>
        <div id="homeFont">
          
        </div>       
      </section>
    </div>
  )
};

export default Index;

