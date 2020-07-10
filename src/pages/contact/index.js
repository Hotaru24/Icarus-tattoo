import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import { Map,TileLayer, Marker, Popup } from 'react-leaflet';
// import Content, { HTMLContent } from '../../components/Content';
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
          <section className="section">
            <div className="container">
              <div className="content">
                <h1>Contact</h1> 
                <div>
                  {/* <PageContent className="content" content={content} /> */}
                  <Map center={position} zoom={15} style={{width: "50%", height: "250px" }} >
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
                    <label className="label" htmlFor={'name'}>
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
                    <label className="label" htmlFor={'email'}>
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
                    <label className="label" htmlFor={'message'}>
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
