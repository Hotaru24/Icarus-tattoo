import React from 'react';
import Layout from '../components/Layout';
import { graphql} from 'gatsby';
import Img from 'gatsby-image';
import "../Style/gallery.css";


//query from instagram
export const pageQuery = graphql`
  {
    allInstaNode {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid {
                originalName
                src
              }
            }
          }
        }
      }
    }
  }`

const Gallery = (props) => {

  // const [modal, setmodal] = useState("none");

  // const toggleModal = () => {
  //   modal === "block" ? setmodal("none") : setmodal("block")    
  // };


  return (
    <Layout>
      <div id="galleryPageBody">
        <div id="galleryComponent">
          {props.data.allInstaNode.edges.map(
            (edge)=> (                  
              <div className="gallery-container" data-sal="slide-up"
              data-sal-delay="300" data-sal-easing="ease">
                <a href={`https://www.instagram.com/p/${edge.node.id}/`} target="_blank" rel="noreferrer"> 
                  <div className="gallery-item">
                    <Img                           
                      fluid={edge.node.localFile.childImageSharp.fluid} 
                      alt={edge.node.localFile.childImageSharp.fluid.originalName} 
                      key= {edge.node.id}
                    />                   
                    <div className="text">+</div>                       
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
};

export default Gallery;

