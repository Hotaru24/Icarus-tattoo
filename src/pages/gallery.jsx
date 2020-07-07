import React from 'react';
import { Gallery } from "gatsby-theme-gallery";
import Layout from '../components/Layout';

const MyGallery = () => {
  return (
    <Layout>
      <div id="galleryContainer">
        <Gallery />
      </div>
    </Layout>
  )
};

export default MyGallery;