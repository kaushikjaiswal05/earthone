import React from "react";
import "./services.css";
import VanillaTilt from "vanilla-tilt";

function Services() {
  return (
    <div className="services">
      <p>How it works</p>
      <h1>Make every plant smart</h1>
      <div className="cards">
        <div
          className="card"
          ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
        >
          <div className="card-image">
            <img src="./images/monitor_plant.webp" alt="" />
          </div>
          <div className="card-content">
            <h2>Plant Monitor</h2>
            <h5>lives in your plant</h5>
            <p>
              Accurately measures your plant's key metrics - soil moisture,
              light, temperature and humidity - as well as compound metrics like
              vapor pressure deficit (VPD) and growing degree days (GDD).
            </p>
            <button className="btn-2" style={{ fontSize: "1em" }}>
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="card"
          ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
        >
          <div className="card-image">
            <img src="./images/grow_app.webp" alt="" />
          </div>
          <div className="card-content">
            <h2>Mobile Application</h2>
            <h5>Download on your device</h5>
            <p>
              Evaluates your plant data, current weather, seasonality, and more
              to accurately inform you of your plants' needs. This app is also
              packed with many additional features to ensure your plants thrive.
            </p>
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
      </div>
    </div>
  );
}

export default Services;
