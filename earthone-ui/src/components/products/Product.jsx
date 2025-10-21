import React from "react";
import "./product.css";
import { NavLink } from "react-router-dom";

function Product() {
  return (
    <div className="product-section">
      <p>let's grow</p>
      <h1>Your Connected Plant Monitor</h1>
      <div className="products">
        <div className="product">
          <img src="./images/monitor_aglaonema.webp" alt="" />
          <h2>Plant Monitor</h2>
          <h3>
            ₹2,953.45{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "#ccc",
                marginLeft: "10px",
              }}
            >
              ₹3,375.50
            </span>
          </h3>
          <div className="box">
            <div>
              <p>
                Save ₹886.04 instantly! Get it for just ₹2,067.42 when you
                become a member
              </p>
            </div>
            <NavLink to="/membership">
              <button className="btn-1">Join Now</button>
            </NavLink>
          </div>
        </div>
        <div className="product">
          <img src="./images/monitors.webp" alt="" />
          <h2>Grow now, pay later</h2>
          <h3>
            ₹1.50{" "}
            <span style={{ fontSize: "0.9em", marginLeft: "7px" }}>
              per device
            </span>
          </h3>
        </div>
      </div>
      <NavLink to="/shop">
        <button className="buy-btn">Shop Now</button>
      </NavLink>
    </div>
  );
}

export default Product;
