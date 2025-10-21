import React, { useState } from "react";
import "./paylater.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function PayLater() {
  const [item, setItem] = useState(2);
  const [total, setTotal] = useState(254.48);
  const pricePerItem = 127.24;

  const handlePlusClick = () => {
    setItem((prevItem) => {
      const newItem = prevItem + 1;
      setTotal(parseFloat((newItem * pricePerItem).toFixed(2))); // Update total based on new item count
      return newItem;
    });
  };

  const handleMinusClick = () => {
    setItem((prevItem) => {
      if (prevItem > 2) {
        const newItem = prevItem - 1;
        setTotal(parseFloat((newItem * pricePerItem).toFixed(2))); 
        return newItem;
      }
      return prevItem;
    });
  };

  return (
    <>
      <Navbar />
      <div className="pay-later">
        <video
          src="./images/bgvideo.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video-3"
        ></video>
        <div className="pl-content">
          <h1 className="pl-text">Grow Now, Pay Later</h1>
        </div>
      </div>
      <div className="gradient" style={{ height: "200px" }}></div>
      <div className="services" style={{ marginTop: "30px" }}>
        <p>Get the device for less than the cost of a cup of coffee</p>
        <h1>Grow now, pay later</h1>
        <div className="cards">
          <div
            className="card"
            ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
          >
            <div className="card-image">
              <img src="./images/monitor_plant.webp" alt="" />
            </div>
            <div className="card-content">
              <h2>Flexible Payments</h2>
              <h5>No upfront costs</h5>
              <p>
                The more, the better! Our program is tailored to your garden.
                Pay for your monitor at your own pace while enjoying all the
                features our devices and subscriptions offer. No huge upfront
                costs, no compromise on quality.
              </p>
              <button className="btn-2" style={{ fontSize: "1em" }}>
                Get Started
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
              <h2>All features</h2>
              <h5>More than a monitor</h5>
              <p>
                With our program not only do you get our smart plant monitors
                for a minimal monthly fee, but you also get access to all of our
                membership benefits. No hidden fees, no additional costs. Just
                the best experience for you and your garden.
              </p>
              <button
                className="btn-2"
                style={{ textAlign: "center", width: "180px" }}
              >
                <span>View features</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#779d77"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="pl-product">
        <p>Make it yours</p>
        <h1>Create your own bundle</h1>

        <div className="pl-product-card">
          <img src="./images/monitors.webp" alt="" />
          <h2>Plant Monitor</h2>

          <p>
            <span onClick={handleMinusClick}>-</span>
            {item}
            <span onClick={handlePlusClick}>+</span>
          </p>

          <button className="pl-btn2">
            <span>Give us a try - ₹{total}/month </span>
          </button>
        </div>
      </div>
      <div className="wave4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#242424"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,117.3C840,128,960,192,1080,197.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="pl-plans">
        <p>How it works</p>
        <h1>Manage your Devices</h1>
        <div className="pl-plans-card">
          <div
            className="card"
            ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
          >
            <h2>By Joining</h2>
            <p>
              Joining the program is simple: select the devices you want, and
              we'll ship them to you. You can add more devices at any time which
              will update your monthly fee. With the monthly fee of the devices
              you also get all our membership benefits included.
            </p>
          </div>
          <div
            className="card"
            ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
          >
            <h2>Cancel</h2>
            <p>
              Your monthly payments contribute toward the tab of each device,
              which decreases gradually with each payment. If you wish to cancel
              your hardware program early, you must pay off the remaining tab
              for each device. This will deactivate your devices.
            </p>
          </div>
          <div
            className="card"
            ref={(el) => el && VanillaTilt.init(el, { max: 10, speed: 400 })}
          >
            <h2>Ownership</h2>
            <p>
              Ownership of the devices is straightforward: after completing 24
              monthly payments, the devices are yours to keep. If you prefer to
              own your devices faster, you can settle the full term balance at
              anytime in our device management portal.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PayLater;
