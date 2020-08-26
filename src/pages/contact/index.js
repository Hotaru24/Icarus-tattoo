import React, { useState, useEffect } from 'react';
import {navigate} from 'gatsby-link';
import Layout from '../../components/Layout';
import logo from "../../img/contactPageImg.png";
import soulignement from "../../img/soulignement.png";
import facebook from '../../img/social/facebook.svg';
import instagram from '../../img/social/instagram.svg';
import phone from '../../img/social/phone.svg';
import "../../Style/contact.css";


const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Index = (props) => {

  //-----------------_Form_--------------------
  const [isvalidated, setisvalidated] = useState(false);

  const handleChange = (e) => {
    setisvalidated({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...isvalidated,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


    if (typeof window !== 'undefined') {
      return (
        <Layout>
          <div id="contactPage" className="section">
            <div className="container">
              <div className="content">
                <div id="contactPageTitle">
                  <h1 
                  data-sal="slide-up"
                  data-sal-duration="900" 
                  data-sal-easing="elastic"
                  >
                    Contactez-nous </h1> 
                  <img id="soulignement" src={soulignement} alt=""/>
                </div>
                <section id="coord">
                  <h2
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-duration="900" 
                    data-sal-easing="ease">
                      NOS COORDONNÉES
                  </h2>
                  <div className="contactH2Bot"></div>
                  <div id="coordBody">
                    <ul>
                      <li>
                        <a title="facebook" href="https://www.facebook.com/Icarus_tattoo-275162819748784" target="_blank" rel="noreferrer">
                          <img
                            src={facebook}
                            alt="Facebook"
                          />
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a title="instagram" href="https://www.instagram.com/icarus_tattoo/" target="_blank" rel="noreferrer">
                          <img
                            src={instagram}
                            alt="Instagram"
                          />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <img
                          src={phone}
                          alt="phone"
                        />
                        0648916550                        
                      </li>
                    </ul>
                    <div id="contactPicture">
                      <img src={logo}/>
                    </div>
                  </div>
                </section>   
                <div id="contctSep"></div>
                <section id="contact">
                  <form
                    id="contactForm"
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <h2
                      data-sal="slide-up"
                      data-sal-delay="500"
                      data-sal-duration="900" 
                      data-sal-easing="ease">
                      BESOIN D’UN RENSEIGNEMENT ?
                    </h2>
                    <div className="contactH2Bot"></div>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={handleChange}
                          placeholder="Nom"
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={handleChange}
                          placeholder="Mail"
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                        <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={handleChange}
                          placeholder="Message"
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
    return null
};

export default Index;
