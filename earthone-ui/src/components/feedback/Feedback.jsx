import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const slides = [
    {
      title: "Smart Plant Monitoring",
      description:
        "Transform your gardening - Our state-of-the-art IoT sensors carefully track critical metrics like soil moisture, light, humidity, and temperature, ensuring your plants grow in the perfect conditions. Experience the ease of plant care, right at your fingertips.",
    },
    {
      title: "Science-based plant analysis",
      description:
        "Created by plant scientists, get a deep dive into your plant's health. Visualize growth patterns through historical graphs and even export your data for personalized analysis. Tailor your plant care strategies with precision and see remarkable results.",
    },
    {
      title: "Real-time alerts",
      description:
        "Our system constantly monitors your plants' key health data so you can be notified if any issues arise. From watering reminders, when to repot and more - set up custom notifications within the app to ensure your plants receive timely care for optimal growth.",
    },
    {
      title: "AI-powered plant guidance",
      description:
        "Get instant disease diagnosis, plant identification and expert advice from our botanists. Our intelligent assistant is here to ensure your plants are thriving, sifting through our extensive plant database and your plant's metrics to provide personalized care tips.",
    },
    {
      title: "Crop Forecasting",
      description:
        "Plan your crop with accuracy using our harvest time predictor. Using advanced machine learning models, we forecast the optimal harvest date based on your seed date and sensor data. Get maximum yield and enjoy the fruits of your labor at the right time!",
    },
    {
      title: "Sharing is Caring",
      description:
        "Connect with others by inviting them to see and join your garden. Perfect when you're away - a friend can easily come by to water your plants, keeping your garden thriving. Share updates, celebrate growth milestones, and enjoy a community gardening experience!",
    },
  ];
  return (
    <div className="feedback">
      <p>Have plant care in your back pocket</p>
      <h1>Green thumb for everyone</h1>
      <div className="pot-mobile">
        <img className="pot" src="./images/tomato_device.webp" alt="" />
        <div className="mobile-frame">
          <img className="frame" src="./images/iphone_frame.webp" alt="" />
          <video
            className="video"
            crossOrigin=""
            aria-hidden="true"
            preload="metadata"
            src="https://cdn.shopify.com/videos/c/o/v/5c10f8592d41445085cd013da4dd9239.mp4"
            playsInline=""
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div
        style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem 3rem" }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                color: "white",
                padding: "20px",
                background: "#333",
              }}
            >
              <h3 className="carousel-heading">{slide.title}</h3>
              <p className="carousel-description">{slide.description}</p>
            </div>
          ))}
        </Slider>
        <p className="download">Download to get all these features and more</p>
        <div className="buttons">
          <button
            className="btn-2"
            style={{ textAlign: "left", width: "210px" }}
          >
            <i className="fa-brands fa-apple"></i>
            <span
              style={{
                fontSize: "0.7em",
                textAlign: "left",
                marginLeft: "55px",
                fontWeight: "300",
              }}
            >
              Download on the
            </span>
            <br />
            <span style={{ marginLeft: "55px" }}>App Store</span>
          </button>
          <button
            className="btn-2"
            style={{ textAlign: "left", width: "210px", padding: "0.5em" }}
          >
            <i className="fa-brands fa-google-play"></i>
            <span
              style={{
                fontSize: "0.7em",
                textAlign: "left",
                marginLeft: "55px",
                fontWeight: "300",
              }}
            >
              Get it on
            </span>
            <br />
            <span style={{ marginLeft: "55px" }}>Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
