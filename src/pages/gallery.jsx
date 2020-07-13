import React from 'react';
import Layout from '../components/Layout';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const MyGallery = () => {
  return (
    <Layout>
      <h1>coucou</h1>
      
        <StaticQuery 
          query={graphql`
            {allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)|(tif)/"}, relativeDirectory: {eq: "galleryFolder"}}) {
                  edges {
                    node {
                      id
                      name
                      relativePath
                      birthTime
                      childImageSharp {
                        fluid {
                          base64
                          tracedSVG
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                          originalImg
                          originalName
                          presentationWidth
                          presentationHeight
                        }
                      }
                    }
                  }
                }
              }
          `}
          render={(data) => (
            <div style={{height : "200px", backgroundColor: "white", width: "300px"}}>
              {data.allFile.edges.map(
                (edge)=> (
                  console.log(edge.node.childImageSharp.fluid),
                  <Img 
                    style={{position: "unset", overflow: "scroll", height: "100px", width: "100px"}}
                    fluid={edge.node.childImageSharp.fluid} 
                    alt={edge.node.name} 
                    key= {edge.node.id}
                  />
                )
              )}
            </div>
          )}

        />

    </Layout>
  )
};

export default MyGallery;

