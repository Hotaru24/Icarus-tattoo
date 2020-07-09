import React from 'react';
import Layout from '../components/Layout';
import "../Style/legal.css";

const Legal = () => {
  return (
    <Layout>
      <div id="legalBody">
        <div id="titleContainer"> 
          <h1>MENTIONS LEGALES</h1>
        </div>        
        <section>
          <h2>IDENTIFICATION</h2>
            <ul>
              <li>Propriétaire : Quentin Gruau  -  Icarus_tattoo</li>
              <li>Adresse : 57 avenue du bocage, 33200 Bordeaux</li>
              <li>Messagerie : <a title="messenger" href="https://www.facebook.com/Icarus_tattoo-275162819748784">messenger</a> </li>
              <li>Téléphone : 0648916550</li>
              <li>Coordonnées hébergeur : 
                <div id="netlify">
                  NETLIFY<br/>
                  Adresse : 2325 3rd St #215, San Francisco, CA 94107, États-Unis <br/>
                  Téléphone : +1 415-691-1573
                </div>
              </li>
            </ul>
        </section>
        <section>
          <h2>ACTIVITE</h2>
            <p>Numéro dentreprise : à venir</p>
        </section>
        <section>
          <h2>COOKIES ET DONNEES PERSONNELLES</h2>
            <p>Le site n'utilise pas de cookies et n'utilise pas les données personnelles de ses utilisateurs.<br/> 
              L'hébergeur Netlify conserve quant à lui un journal des accès et les adresse IP des visiteurs pendant moins de 30 jours. 
              Pour plus d'informations se référer aux <a title="RGPD-Netlify" href="https://www.netlify.com/gdpr/" target="_blank" rel="noreferrer">RGPD de Netlify</a>.
            </p>
        </section>
        <section>
          <h2>PROPRIÉTÉ INTELLECTUELLE – DROIT D’AUTEURS – COPYRIGHT</h2>
            <p>Le contenu de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle.<br/> 
              Icarus_Tattoo conserve tous les droits patrimoniaux et moraux liés aux documents de ce site, 
              sous réserve des droits dont bénéficient les auteurs d’oeuvres publiées sur ce site. Ainsi, tous les droits de reproduction, 
              sur supports électroniques ou papiers, sont-ils réservés, y compris pour les documents téléchargeables et les représentations 
              iconographiques et/ou photographiques.<br/> Les visiteurs du présent site Internet s’interdisent la collecte, la captation, 
              la déformation ou l’utilisation, des informations auxquelles ils ont accès.<br/>
              Icarus_Tattoo poursuivra en justice toute tentative de détournement des documentations du site.</p>
        </section>
        <section>
          <h2>CONCEPTION DU SITE</h2>
            <p>Florent Pasquet - développeur web & mobile<br/>
            <a title="Site Florent Pasquet" href="https://florent-pasquet.netlify.com/">https://florent-pasquet.netlify.com/</a>

            </p>
        </section>
      </div>
    </Layout>
  )
};


export default Legal;