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
            {allInstaNode {
              edges {
                node {
                  localFile {
                    childImageSharp {
                      fluid {
                        base64
                        originalImg
                        originalName
                        presentationHeight
                        presentationWidth
                        sizes
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                        tracedSVG
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
            console.log(data),
            <div style={{height : "200px", backgroundColor: "white", width: "300px", overflow: "hiden"}}>
              {data.allInstaNode.edges.map(
                (edge)=> (

                  <Img 
                    style={{position: "unset", overflow: "scroll", height: "100px", width: "100px"}}
                    fluid={edge.node.localFile.childImageSharp.fluid} 
                    alt={edge.node.localFile.childImageSharp.fluid.originalName} 
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

