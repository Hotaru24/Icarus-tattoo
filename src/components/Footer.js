import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logoB.png';
import logoT from '../img/logoN.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import "../Style/footer.css";


const Footer = () => {
  return (
    <footer className="footer has-background-black has-link-white has-text-white-ter">
      <div className="content has-text-centered" id="footerLogo">
        <img
          src={logo}
          alt="logo"
          style={{ width: '19em', height: '12em', filter: "invert(20%)"}}
        />
        <img
          src={logoT}
          alt="Icarus"
          style={{ width: '10em', height: '2.9em', filter: "invert(20%)"}}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="">

            <div className="social">
                <a title="facebook" href="https://www.facebook.com/Icarus_tattoo-275162819748784" target="_blank" rel="noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/icarus_tattoo/" target="_blank" rel="noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                  />
                </a>
            </div>
              <div className="legal">            
                <p>© 2020 Icarus_tattoo -</p>
                <Link  to="/legal">
                  mentions légales
                </Link>                
              </div>
          </div>
        </div>
      </div>
    </footer>
  )  
};

export default Footer;
