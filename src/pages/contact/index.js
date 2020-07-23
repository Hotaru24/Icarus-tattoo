import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';
import gsap from 'gsap'
import "../../Style/contact.css";


const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Index = (props) => {

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
 
  const position = [44.85402, -0.598465];



    if (typeof window !== 'undefined') {
      return (
        <Layout>
          <section id="contactPage" className="section">
            <div className="container">
              <div className="content">
                <h1 
                data-sal="slide-up"
                data-sal-duration="900" 
                data-sal-easing="elastic"
                >
                  Contactez nous !</h1> 
                <div id="coord">
                  <div id="coordTxt">
                    <h2
                      data-sal="slide-up"
                      data-sal-delay="500"
                      data-sal-duration="900" 
                      data-sal-easing="ease">
                        Coordonnées
                    </h2>
                    <p >A venir</p>
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
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label 
                      className="label" 
                      htmlFor={'name'}
                      data-sal="slide-up"
                      data-sal-delay="500"
                      data-sal-duration="900" 
                      data-sal-easing="ease">
                        Nom
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label 
                    className="label" 
                    htmlFor={'email'}
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-duration="900" 
                    data-sal-easing="ease">
                     Adresse mail
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label 
                    className="label" 
                    htmlFor={'message'}
                    data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-duration="900" 
                    data-sal-easing="ease">
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={handleChange}
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
              </div>
            </div>
          </section>
        </Layout>
      )
    }
    return null
};

export default Index;
