import React from "react";
import "./blog.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="blogs">
        <div className="blog-item">
          <img src="./images/blog1.webp" alt="" />
          <a href="">Understanding your plant health</a>
          <p>July 29, 2024</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog2.webp" alt="" />
          <a href="">Plants need darkness too</a>
          <p>July 29, 2024</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog3.webp" alt="" />
          <a href="">Vapour pressure deficit (VPD)...</a>
          <p>June 24, 2024</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog4.webp" alt="" />
          <a href="">Integrating Earthone with...</a>
          <p>Mar 5, 2024</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog5.webp" alt="" />
          <a href="">Smart Gardening have your plants...</a>
          <p>January 30, 2024</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog6.webp" alt="" />
          <a href="">What if your soil moisture meter...</a>
          <p>Nov 1, 2023</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog7.webp" alt="" />
          <a href="">Earthone vs Flore: What is the best...</a>
          <p>Oct 5, 2023</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog8.webp" alt="" />
          <a href="">Indoor gardening tips and tricks</a>
          <p>Aug 29, 2023</p>
        </div>
        <div className="blog-item">
          <img src="./images/blog9.webp" alt="" />
          <a href="">5 key benefits of using plant...</a>
          <p>April 18, 2023</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
