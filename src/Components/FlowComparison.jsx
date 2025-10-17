import React, { useState } from "react";
import {
  FaUserCheck,
  FaShieldAlt,
  FaCreditCard,
  FaChartBar,
  FaExchangeAlt,
  FaBolt,
  FaProjectDiagram,
  FaStore,
  FaLaptop,
  FaCog,
  FaUniversity,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../Styles/FlowComparison.css";
import MovingArrow from "./MovingArrow";
import FlowBefore from "./FlowBefore";
// import FlowComparisonBefore from "./FlowComparisonBefore"; // your Before component

const features = [
  { label: "KYC", icon: <FaUserCheck /> },
  { label: "Fraud Prevention", icon: <FaShieldAlt /> },
  { label: "One-click payments", icon: <FaCreditCard /> },
  { label: "Analytics", icon: <FaChartBar /> },
  { label: "Settlements", icon: <FaExchangeAlt /> },
  { label: "Smart Routing", icon: <FaBolt /> },
  { label: "Failover chains", icon: <FaProjectDiagram /> },
];

const providers = [
  { label: "Card provider 1", icon: <FaCreditCard /> },
  { label: "Card provider 2", icon: <FaCreditCard /> },
  { label: "Card provider 3", icon: <FaCreditCard /> },
  { label: "APM", icon: <FaLaptop /> },
  { label: "Open Banking", icon: <FaUniversity /> },
];

const FlowComparison = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % 2);
  const handlePrev = () => setIndex((prev) => (prev === 0 ? 1 : 0));

  return (
    <div className="tx-slider-manual">
      {/* ===== Slider Track ===== */}
      <div
        className="tx-slider-track-manual"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
       {/* Before last section here */}
     <div className="before-parent-container">

<div className="inside-before-container">
<FlowBefore/>



</div>
     </div>
        <section className="tx-after tx-slide-manual">
  <div className="tx-bg">
            <div className="tx-main">
              {/* ===== Shop Box ===== */}
              <div className="tx-shop">
                <FaStore className="tx-shop-icon" />
                <div>
                  Your shop /
                  <br />
                  website
                </div>
              </div>
 
              {/* ===== Shop → API Arrow ===== */}
              <div className="paytech-api-arrow">
                <MovingArrow />
              </div>
 
              {/* ===== Paytech API Box ===== */}
              <div className="tx-api-box">
                <div className="tx-api-title">
                  <FaCog className="tx-api-cog" />
                  <span>Paytech API</span>
                </div>
 
                <div className="tx-feature-list">
                  {features.map((f) => (
                    <div className="tx-feature" key={f.label}>
                      <span className="tx-feature-icon">{f.icon}</span>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* ===== Divider & Provider Arrows ===== */}
              <div className="side-arrow-parent"></div>
              <span className="mx-line-arrow"></span>
 
              {/* ===== Providers ===== */}
              <div className="tx-providers" style={{ width: "18vw" }}>
                {providers.map((p) => (
                  <div
                    key={p.label}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="card-provider-arrow">
                      <MovingArrow />
                    </div>
 
                    <div className="tx-provider-card" id="tx-provider-card">
                      <span className="tx-provider-icon">{p.icon}</span>
                      <span>{p.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>
      </div>

      {/* ===== Navigation Buttons ===== */}
      <button className="tx-nav-btn left" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="tx-nav-btn right" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default FlowComparison;
