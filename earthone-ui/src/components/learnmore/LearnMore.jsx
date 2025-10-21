import React from "react";
import "./learnmore.css";

function LearnMore() {
  return (
    <>
      <div className="learnmore">
      <div className="learn-gradient"></div>
        <video
          src="./images/bgvideo2.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="learn-background-video"
        ></video>
        <div className="learn-content">
          <h1 className="learn-text">Smart Home Integration</h1>
          <p className="learn-para">
            Automatically water your plants, turn on the lights for them and
            more
          </p>
          <button className="learn-btn">learn more</button>
        </div>
        <div className="learn-gradient-bottom"></div>
      </div>
    </>
  );
}

export default LearnMore;
