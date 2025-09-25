import React from "react";
import "../Styles/ResellerCommission.css";
import { FaUserPlus, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";

const ResellerCommission = () => {
  const handleScroll = () => {
    const element = document.getElementById("signup-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="commission-container">
      <div className="commission-wrapper">
        {/* Left: Card */}
        <motion.div
          className="commission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="icon-wrapper">
            <FaUserPlus className="commission-icon" />
            <FaDollarSign className="commission-icon" />
          </div>
          <h2 className="commission-title">
            Refer Clients and Receive Monthly Commission!
          </h2>
          <p className="commission-text">
            Become a merchant services reseller for{" "}
            <span>Kuber Payment</span> and receive a monthly revenue share on
            credit card payments for the merchant accounts you refer.
          </p>
          {/* 👇 Scroll to signup form */}
          <button className="commission-btn" onClick={handleScroll}>
            Get Started
          </button>
        </motion.div>

        {/* Right: Image */}
        <div className="commission-image">
          <img src={"./IN-2.jpg"} alt="Reseller" />
        </div>
      </div>
    </section>
  );
};

export default ResellerCommission;
