import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import "../../Style/blog.css";

const BlogIndexPage = () => {

  return (
    <Layout>
    <header 
      id="blogHeader" 
      className="full-width-image-container margin-top-0"
      data-sal="zoom-out"
      data-sal-delay="100"
      data-sal-duration="1500" 
      data-sal-easing="ease"
    >
      <h1 
      className="has-text-weight-bold is-size-1"
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="900" 
      data-sal-easing="ease"
      >
        Actu
      </h1>
    </header>
      <section id="mainBlogBody" className="section">
        <div className="container">
          <div>
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )  
};

export default BlogIndexPage;
