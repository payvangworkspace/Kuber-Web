import React from "react";
import "../Styles/ResellerPayouts.css";
import { FaHandshake, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const ResellerPayouts = () => {
  // 👇 Smooth scroll to signup form
  const handleScroll = () => {
    const element = document.getElementById("signup-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="payouts-container">
      <div className="payouts-wrapper">
        {/* Left: Card */}
        <motion.div
          className="payouts-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="icon-wrapper">
            <FaHandshake className="payouts-icon" />
            <FaMoneyBillWave className="payouts-icon" />
          </div>
          <h2 className="payouts-title">Reliable Payouts</h2>
          <p className="payouts-text">
            Kuber Payment’s merchant services resellers receive
            percentage-based residuals from our complete range of credit card
            processing services. As long as your clients are actively processing
            payments, you will be making money!
          </p>
          <p className="payouts-note">
            <span>*</span> Ask About Our New Reseller Loyalty Offer
          </p>

          {/* 👇 Scroll to signup form */}
          <button className="payouts-btn" onClick={handleScroll}>
            Connect Us
          </button>
        </motion.div>

        {/* Right: Image */}
        <div className="payouts-image">
          <img src={"./payout2.jpg"} alt="Reseller Payouts" />
        </div>
      </div>
    </section>
  );
};

export default ResellerPayouts;
