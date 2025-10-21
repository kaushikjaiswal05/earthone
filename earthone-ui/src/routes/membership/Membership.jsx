import React, { useState } from "react";
import "./membership.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Membership() {
  const [activePlan, setActivePlan] = useState("monthly");

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
  };

  return (
    <>
      <Navbar />
      <div className="membership">
        <h1>Pricing &Plans</h1>
        <p>
          Our devices works great on their own, but our membership plan can
          enhance your experience with added features and discounts!
        </p>
        <div className="plan-btns">
          <span
            className={activePlan === "monthly" ? "plan-active" : ""}
            onClick={() => handlePlanClick("monthly")}
          >
            Monthly
          </span>
          <span
            className={activePlan === "yearly" ? "plan-active" : ""}
            onClick={() => handlePlanClick("yearly")}
          >
            Annual
          </span>
        </div>

        <div className="plans">
          <div className="plan basic">
            <div className="plan-name">
              <h2>Essenital</h2>
              <span>Popular</span>
            </div>
            <p>
              Your first step to a smarter garden, a plan with everything you
              need to get started!
            </p>
            <h1>
              ₹ {activePlan === "monthly" ? "299.00" : "249.00"}
              <sub>{activePlan === "monthly" ? "/month" : "/year"}</sub>
            </h1>
            <button>Join Now</button>
            <ul>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>20% store discount
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Smart Home
                Integration
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant
                Recommendations
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Score History
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Unlimited Journal
                Entries
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Unlimited
                pull-to-refresh
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Chat With A
                Botanist (25/day)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant
                Identification (25/day)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant Doctor
                (5/month)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Automation per
                device ($10/device)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Custom metric
                graphs
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Data export
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Historical data
                retention (2 years)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Weather
                Integration
              </li>
            </ul>
          </div>
          <div className="plan premium">
            <h2 className="plan-name" style={{ color: "#fff" }}>
              Pro
            </h2>
            <p>
              Elevate your gardening with a plan made for the ultimate green
              thumb experience!
            </p>
            <h1>
              ₹ {activePlan === "monthly" ? "599.00" : "459.00"}
              <sub>{activePlan === "monthly" ? "/month" : "/year"}</sub>
            </h1>
            <button>Join Now</button>
            <ul>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>30% store discount
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Smart Home
                Integration
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant
                Recommendations
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Score History
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Unlimited Journal
                Entries
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Unlimited
                pull-to-refresh
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Chat With A
                Botanist (100/day)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant
                Identification (100/day)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Plant Doctor
                (25/month)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Automation per
                device ($50/device)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Custom metric
                graphs
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Data export
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Historical data
                retention (Forever)
              </li>
              <li>
                <span style={{ marginRight: "10px" }}>✔</span>Weather
                Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Membership;
