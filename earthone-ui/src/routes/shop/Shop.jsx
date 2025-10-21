import React, { useState, useEffect } from "react";
import "./shop.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import Feedback from "../../components/feedback/Feedback";
import FAQ from "../../components/faq/FAQ";
import LearnMore from "../../components/learnmore/LearnMore";
import Footer from "../../components/footer/Footer";

function Shop() {
  const [slideIndex, setSlideIndex] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (quantity, name) => {
    dispatch(addItem({ quantity, name }));
  };

  const slides = [
    "./images/monitor_aglaonema.webp",
    "./images/monitors.webp",
    "./images/monitor_paradise.webp",
    "./images/monitor_tomato.webp",
  ];

  const nextSlide = () =>
    setSlideIndex((prev) => (prev === slides.length ? 1 : prev + 1));
  const prevSlide = () =>
    setSlideIndex((prev) => (prev === 1 ? slides.length : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="shop">
        <div className="carousel-info">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`mySlides fade ${
                  index + 1 === slideIndex ? "active" : ""
                }`}
                style={{
                  display: index + 1 === slideIndex ? "block" : "none",
                  border: "none",
                }}
              >
                <img
                  src={slide}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
            <a className="prev" onClick={prevSlide}>
              &#10094;
            </a>
            <a className="next" onClick={nextSlide}>
              &#10095;
            </a>
          </div>

          {/* content */}

          <div className="info-container">
            <div>
              <h1 className="info-heading">Plant Monitor</h1>
              <h4>
                <span>⭐⭐⭐⭐⭐</span> 172 Reviews
              </h4>
              <div className="bar">
                <p>
                  Save ₹886.04 instantly! Get it for just ₹2,067.42 when you
                  become a member
                </p>
                <button className="btn-1">Join Now</button>
              </div>
              <h3 className="bundle">BUNDLE</h3>
              <div className="btn-container">
                <button className="pack-btn info-active" onClick={() => handleAddToCart(1, "1 Pack") }>1 Pack</button>
                <button className="pack-btn" onClick={() => handleAddToCart(3, "3 Pack") }>3 Pack</button>
              </div>
            </div>

            <div className="info-details">
              <p>
                Never miss a beat with your plant care, and be the envy in your
                gardening community!
              </p>
              <p>
                The EarthOne Plant Monitor guarantees foliage, yield, and
                flowering like you've never seen before!
              </p>
              <p>
                Our best-in-class soil moisture sensor will ensure that you
                never overwater or underwater your plants ever again.
              </p>
              <p>
                Our plant monitors come equipped with the following sensors:
              </p>
              <ul>
                <li>Soil Moisture</li>
                <li>Humidity</li>
                <li>Temperature</li>
                <li>Light</li>
              </ul>
              <p>Our plant monitors also boast:</p>
              <ul>
                <li>Dirt &amp; Water Resistance</li>
                <li>A Long Battery Life</li>
                <li>USB-C Charging</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="shop-para">WHAT'S INSIDE</p>
        <h1 className="shop-heading">Technical Specifications</h1>
        <div className="table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Material</th>
                <td>ABS Body / PMMA Lid</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Soil Moisture Length</th>
                <td>3.75 inches</td>
              </tr>
              <tr>
                <th>Overall Dimensions</th>
                <td>Length 7.75 in ; Width 1.5 in ; Thickness 1.625 in</td>
              </tr>
              <tr>
                <th>Battery Capacity</th>
                <td>1300 mAh</td>
              </tr>
              <tr>
                <th>Battery Life</th>
                <td>~4 Months</td>
              </tr>
              <tr>
                <th>Charging Connector</th>
                <td>USB Type C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#779d77"
            fillOpacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,90.7C240,75,300,85,360,112C420,139,480,181,540,197.3C600,213,660,203,720,218.7C780,235,840,277,900,288C960,299,1020,277,1080,240C1140,203,1200,149,1260,128C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Slider />
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#242424"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Services />
      <div className="wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#779d77"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Feedback />
      <div className="wave4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#242424"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <FAQ />
      <LearnMore />
      <Footer />
    </>
  );
}

export default Shop;
