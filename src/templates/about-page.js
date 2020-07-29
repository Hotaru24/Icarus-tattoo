import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import  {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import soulignement from "../../public/img/soulignement.png";
import img1 from "../../public/img/aboutImg1.png";
import img2 from "../../public/img/aboutImg2.png";
import img3 from "../../public/img/aboutImg3.png";
import "../Style/aboutPage.css";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  //------------------_gsap_---------------------
  gsap.registerPlugin(ScrollTrigger);

    gsap.to("#img1", {
      scrollTrigger:{
        trigger: "#img1",
        start: "top 15%",
        end: "bottom 40%",
        toggleActions: "restart reverse",
      },
      y: 55,
      x: -5,
      duration:10,
      ease: "elastic"
    })
    gsap.to("#img2", {
      scrollTrigger:{
        trigger: "#img2",
        start: "top center",
        end: "bottom 100px",
        toggleActions: "restart reverse",
      },
      y: 40,
      x: 10,
      duration:10,
      ease: "elastic"
    })
    gsap.to("#img3", {
      scrollTrigger:{
        trigger: "#img3",
        start: "top 50%",
        toggleActions: "restart reverse",
      },
      rotation: 360,
      duration:15,
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
      <div id="aboutLeft">
        <img id="img2" src={img2} alt="image2"/>
        <img id="img3" src={img3} alt="image3"/>
      </div>
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
