import React from "react";
import "../Styles/ResellerCommission.css";
import { FaUserPlus, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import sampleImg from "../assets/reseller-side.jpg"; // <- add your image here

const ResellerCommission = () => {

  const navigate=useNavigate();


  function redirectContact(){
    navigate("/contact")
    
  }



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
          <button className="commission-btn" onClick={redirectContact}>Get Started</button>
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
