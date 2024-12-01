import React from 'react'
import './Blog.css'
import Image1 from '../../assests/blog-1.svg'
import Image2 from '../../assests/blog-2.svg'
import Image3 from '../../assests/blog-3.svg'
const Blog = () => {
  return (
   <section className="blog container section" id="blog">
    <h2 className="section__title">Latest Posts</h2>

    <div className="blog__container grid">

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">API</span></a>
          <a href="#"><img src={Image1} alt="" className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Application Programming Interface</h3>
          <div className="blog__meta">
            <span>09 October, 2024</span>
            <span className="blog__dot">.</span>
            <span>Haseeb</span>
          </div> 
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">AI</span></a>
          <a href="#"><img src={Image2} alt="" className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Artificial Intelligence</h3>
          <div className="blog__meta">
            <span>15 November 2024</span>
            <span className="blog__dot">.</span>
            <span>Haseeb</span>
          </div> 
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="#"><span className="blog__category">APEX</span></a>
          <a href="#"><img src={Image3} alt=""
           className="blog__img" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Salesforce APEX</h3>
          <div className="blog__meta">
            <span>10 March, 2024</span>
            <span className="blog__dot">.</span>
            <span>Haseeb</span>
          </div> 
        </div>
      </div>

    

    </div>
   </section>
  )
}

export default Blog
