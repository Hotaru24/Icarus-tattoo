import React, { useState, useEffect } from 'react';
import {navigate} from 'gatsby-link';
import Layout from '../../components/Layout';
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';
import  {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import logo from "../../img/logoT.png";
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

  //------------------_Map_---------------------
  const position = [44.85420, -0.598400];
  
  //------------------_gsap_---------------------
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#contactLogo", {
      scrollTrigger:{
        trigger: "#contactLogo",
        toggleActions: "restart reverse",
      },
      y: -50,
      duration:10,
      ease: "elastic"
    })
  })


    if (typeof window !== 'undefined') {
      return (
        <Layout>
          <div id="contactPage" className="section">
            <div className="container">
              <div className="content">
                <h1 
                data-sal="slide-up"
                data-sal-duration="900" 
                data-sal-easing="elastic"
                >
                  Contactez-nous </h1> 
                <section id="coord">
                  <div id="coordTxt">
                    <h2
                      data-sal="slide-up"
                      data-sal-delay="500"
                      data-sal-duration="900" 
                      data-sal-easing="ease">
                        NOS COORDONNÉES
                    </h2>
                    <div className="contactH2Bot"></div>
                    <ul>
                      <li>A venir</li>
                      <li>A venir</li>
                      <li>A venir</li>
                      <li>A venir</li>
                    </ul>

                  </div>
                  <Map id="contactMap" center={position} zoom={15} style={{width: "50%", height: "250px" }} >
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    /> 
                    <Marker position={position}>
                      <Popup>
                        Icarus_tattoo 
                      </Popup>
                    </Marker>
                  </Map>
                </section>   
                <div id="contctSep"></div>
                <section id="contact">
                  <div id="contactLogo">
                    <img src={logo} alt="icarus_tattoo"/>
                  </div>
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
                          className="input is-small"
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
                          className="input is-small"
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
