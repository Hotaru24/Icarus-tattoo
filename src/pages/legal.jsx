import React from 'react';
import Layout from '../components/Layout';

const Legal = () => {
  return (
    <Layout>
      <h1>Mentions légales</h1>
      <h2>Identification</h2>
        <p>
        Adresse de domicile
        Numéro de téléphone et adresse de courrier électronique
        Nom du directeur ou du codirecteur de la publication et celui du responsable de la rédaction s'il en existe
        Nom, dénomination ou raison sociale et adresse et numéro de téléphone de l'hébergeur de son site</p>
        <ul>
          <li>Propriétaire : Quentin Gruau</li>
          <li>Adresse : </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <h2>Activité</h2>
        <p>Numéro d'inscription au répertoire des métiers</p>
      <h2>Cookies et données personnelles</h2>
        <p>Le site n'utilise pas de cookies et n'utilise pas les données personnelles de ses utilisateurs. 
          L'hébergeur Netlify conserve quant à lui un journal des accès et les adresse IP des visiteurs pendant moins de 30 jours. <br/>
          Pour plus d'informations se référer aux <a title="RGPD-Netlify" href="https://www.netlify.com/gdpr/" target="_blank">RGPD de Netlify</a>.
          </p>
    </Layout>
  )
};


export default Legal;