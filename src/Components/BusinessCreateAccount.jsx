import React from "react";
import { FaUserPlus, FaCheckCircle, FaRocket, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/BusinessCreateAccount.css";
 
const BusinessCreateAccount = () => {
  const navigate = useNavigate();
 
  const redirectToSignUp = () => {
    navigate("/signup");
  };
 
  return (
    <section className="business-section">
      <div className="business-container">
        {/* Left Content */}
        <div className="business-content">
          <h2 className="business-title">Join 493+ Businesses Today!</h2>
          <p className="business-description">
            Scale faster with <span className="highlight">Kuberpays</span>.
            Unlock secure, seamless, and smart payment solutions designed for modern businesses.
          </p>
 
          {/* Features */}
          <ul className="business-features">
            <li className="feature-item">
              <FaCheckCircle className="feature-icon" /> Instant Account Setup
            </li>
            <li className="feature-item">
              <FaRocket className="feature-icon" /> Boost Your Transactions
            </li>
            <li className="feature-item">
              <FaShieldAlt className="feature-icon" /> Enterprise-Grade Security
            </li>
          </ul>
 
          {/* Button */}
          <button className="business-btn" onClick={redirectToSignUp}>
            <FaUserPlus className="button-icon" /> Create Your Account
          </button>
        </div>
 
        {/* Right Image */}
        <div className="business-image-container">
          <img
            src="https://img.freepik.com/free-vector/online-payment-concept-illustration_114360-2572.jpg"
            alt="Business Growth"
            className="business-image"
          />
        </div>
      </div>
    </section>
  );
};
 
export default BusinessCreateAccount;