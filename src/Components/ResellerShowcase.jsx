import React from "react";
import "../Styles/ResellerShowcase.css";
import { FaUserTie, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

// No need for useNavigate here
const ResellerShowcase = () => {

  const handleScroll = () => {
    const element = document.getElementById("signup-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="reseller-container">
      <div className="reseller-content">
        <h2 className="reseller-title">
          <FaUserTie className="icon" /> Becoming an Independent Sales Agent is Easy
        </h2>
        <p className="reseller-text">
          Learn how you can become a merchant services reseller and generate a
          monthly income just by referring new merchants or your existing clients
          to our complete payment processing solution.
        </p>
        <div className="reseller-icons">
          <div className="reseller-icon-card">
            <div className="containers">
              <FaMoneyBillWave className="icon money" />
            </div>
            <p className="p-info">Earn Recurring Income</p>
          </div>
          <div className="reseller-icon-card">
            <div className="containers">
              <FaHandshake className="icon handshake" />
            </div>
            <p className="p-info">Partner with Us</p>
          </div>
        </div>
        {/* 👇 Scroll to signup form */}
        <button 
          className="reseller-btn" 
          onClick={handleScroll} 
          style={{ cursor: "pointer" }}
        >
          Get Started
        </button>
      </div>

      <div className="reseller-image-card">
        <img src={"/home/about-us.jpg"} alt="Reseller Program" className="reseller-img" />
      </div>
    </section>
  );
};

export default ResellerShowcase;
