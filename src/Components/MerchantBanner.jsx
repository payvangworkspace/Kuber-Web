import React from "react";
import "../styles/MerchantBanner.css";
import { Link } from "react-router-dom";

const MerchantBanner = () => {
  return (
    <section className="merchant-banner">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">
            Become a <span>Merchant Service Reseller</span>
          </h1>
          <p className="banner-subtitle">
            Partner with us to deliver secure, reliable, and scalable payment
            solutions while growing your business revenue.
          </p>
          <Link to="/contact" className="banner-btn">
            Get Started
          </Link>
        </div>

        <div className="banner-image">
          <div className="image-glass">
            <img src={"./dashboard.jpg"} alt="Merchant Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantBanner;
