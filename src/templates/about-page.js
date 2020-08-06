import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import  {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import soulignement from "../../src/img/soulignement.png";
import img1 from "../../src/img/aboutImg1.png";
import "../Style/aboutPage.css";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  //------------------_gsap_---------------------
  gsap.registerPlugin(ScrollTrigger);

    gsap.to("#img1", {
      scrollTrigger:{
        trigger: "#img1",
        start: "top 15%",
        end: "bottom 60%",
        toggleActions: "restart reverse",
      },
      y: 55,
      x: -5,
      duration:10,
      ease: "elastic"
    })



  return (
  <>
    <header id="aboutCover" className="full-width-image-container margin-top-0">
      <h1 
      className="has-text-weight-bold is-size-1"
      data-sal="slide-up"
      data-sal-delay="500"
      data-sal-duration="900" 
      data-sal-easing="ease">
        Présentation
      </h1>
    </header>
    <div id="aboutContainer">
      <section id="aboutBody" className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div id="topAbout">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}              
                  </h2>
                <img src={soulignement} alt=""/>
                </div>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="aboutRight">
        <img id="img1" src={img1} alt="image1"/>
      </div>
    </div>

  </>
  )
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
