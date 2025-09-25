import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaLock, FaMobileAlt, FaCreditCard } from "react-icons/fa";
import "../Styles/CardDetail.css";

const ClientDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card-detail-container">
        <div className="card-detail">
          <img
            src={`${import.meta.env.BASE_URL}webdev-partner.jpg`}
            alt="Web Developer Partnership"
            className="card-detail-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}client2.jpg`;
            }}
          />

          <div className="card-detail-content">
            <h2 className="card-detail-title">Web Developer Partnership</h2>
            <p className="card-detail-description">
              You build top-notch e-commerce websites for your clients to help
              their businesses flourish, and recommending our all-inclusive
              payment platform will allow your clients to accept payments
              securely from customers around the globe.
            </p>

            <div className="card-detail-subsection">
              <h3>Key Highlights</h3>
              <ul className="card-detail-features">
                <li>
                  <FaGlobe className="feature-check-icon" /> Global Payment
                  Acceptance
                </li>
                <li>
                  <FaLock className="feature-check-icon" /> Industry-Leading
                  Security
                </li>
                <li>
                  <FaCreditCard className="feature-check-icon" /> Alternative
                  Payment Methods
                </li>
                <li>
                  <FaMobileAlt className="feature-check-icon" /> Mobile-Friendly
                  Checkout
                </li>
              </ul>
            </div>

            <p className="card-detail-long">
              Put cutting-edge payment processing tools at your clients’
              fingertips. Kuber Payment’s flexible payment services are designed
              to offer an exceptional payment processing experience for
              businesses worldwide, backed by 24/7 security, chargeback
              mitigation, and fraud protection.
            </p>

            <button className="card-detail-btn" onClick={() => navigate(-1)}>
              ⬅ Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetail;
