import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo2.jpg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';


const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="logo"
          style={{ width: '14em', height: '10em' }}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">                
              <section className="menu">
                <a
                  className="navbar-item"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="facebook" href="https://www.facebook.com/Icarus_tattoo-275162819748784" target="_blank">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://www.instagram.com/icarus_tattoo/" target="_blank">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <p>© 2020 Icarus_tattoo tous droits réservés - 
              <Link className="navbar-item" to="/legal">
                        mentions légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )  
};

export default Footer;
