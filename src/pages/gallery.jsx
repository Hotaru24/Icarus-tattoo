import React from 'react';
import Layout from '../components/Layout';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import "../Style/gallery.css";

const MyGallery = () => {
  return (
    <Layout>
      <div id="galleryPageBody">
        <StaticQuery 
          query={graphql`
            {allInstaNode {
              edges {
                node {
                  localFile {
                    childImageSharp {
                      fluid {                        
                        originalName          
                        src                                            
                      }
                      id
                    }
                  }
                }
              }
            }
              }
          `}

          render={(data) => (
            <div id="galleryComponent">
              {data.allInstaNode.edges.map(
                (edge)=> (
                  <div className="gallery-container">
                    <div className="gallery-item">
                        <Img                           
                          fluid={edge.node.localFile.childImageSharp.fluid} 
                          alt={edge.node.localFile.childImageSharp.fluid.originalName} 
                          key= {edge.node.id}
                        />
                      <div class="text">+</div>    
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        />
      </div>
      


    </Layout>
  )
};

export default MyGallery;

