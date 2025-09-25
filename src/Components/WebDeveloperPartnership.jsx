import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaLock, FaMobileAlt, FaCreditCard } from "react-icons/fa";
import "../Styles/WebDeveloperPartnership.css";

const WebDeveloperPartnership = () => {
  const navigate = useNavigate();

  const redirectToAbout = () => {
    navigate("/client");
  };

  return (
    <section className="webdev-partnership">
      <div className="webdev-wrapper">
        {/* Left Content */}
        <div className="webdev-content">
          <h2 className="webdev-heading">Web Developer Partnership</h2>
          <p className="webdev-subtitle">
            Offer Your Clients a Reliable Payment Solution
          </p>

          <p className="webdev-text">
            You build top-notch e-commerce websites for your clients to help
            their businesses flourish, and recommending our all-inclusive
            payment platform will allow your clients to accept payments securely
            from customers around the globe.
          </p>
          <p className="webdev-text">
            Put cutting-edge payment processing tools at your clients’
            fingertips. Kuber Payment’s flexible payment services are designed
            to offer an exceptional payment processing experience for businesses
            worldwide, backed by 24/7 security, chargeback mitigation, and
            fraud protection.
          </p>

          {/* Feature Highlights */}
          <div className="webdev-features">
            <div className="feature-card">
              <div className="icon-parent">
              <FaGlobe className="feature-icon" />
              </div>
              <span>Global Payment Acceptance</span>
            </div>
            <div className="feature-card">
               <div className="icon-parent">
              <FaLock className="feature-icon" />
              </div>
              <span>Industry-Leading Security</span>
            </div>
            <div className="feature-card">
               <div className="icon-parent">
              <FaCreditCard className="feature-icon" />
              </div>
              <span>Alternative Payment Methods</span>
            </div>
            <div className="feature-card">
               <div className="icon-parent">
              <FaMobileAlt className="feature-icon" />
              </div>
              <span>Mobile-Friendly Checkout</span>
            </div>
          </div>

          <button className="webdev-btn" onClick={redirectToAbout}>
            Explore Partnership
          </button>
        </div>

        {/* Right Side Image */}
        <div className="webdev-image">
          <img
            src={`${import.meta.env.BASE_URL}webdev-partner.jpg`}
            alt="Developers partnership"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}client2.jpg`;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WebDeveloperPartnership;
