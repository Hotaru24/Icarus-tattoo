import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import "../../Style/mainBlog.css";

const BlogIndexPage = () => {

  return (
    <Layout>
    <header id="blogCover" className="full-width-image-container margin-top-0">
      <h1 className="has-text-weight-bold is-size-1">
        Actu
      </h1>
    </header>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )  
};

export default BlogIndexPage;
