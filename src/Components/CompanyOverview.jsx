import React from "react";
import { motion } from "framer-motion";
import "../Styles/CompanyOverview.css";
import {
  FaBullseye,
  FaCreditCard,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

const CompanyOverview = () => {
  return (
    <section className="company-overview">
      {/* Animated Background Gradient Overlay */}
      <div className="background-animation"></div>

      <motion.div
        className="overview-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="overview-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About <span>Kuber Payss</span>
        </motion.h2>

        {/* Animated Image */}
        <motion.img
          src="/home/company.png" // put your image inside public/ folder
          alt="About Kuber Payss"
          className="overview-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="overview-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <strong>Kuber Payss</strong> is a next-generation digital payments platform
          designed to empower businesses of all sizes. We make accepting, routing,
          and reconciling payments seamless with intelligent automation, real-time
          analytics, and unmatched reliability—helping businesses scale faster while
          keeping payments simple, secure, and effortless.
        </motion.p>

        {/* Feature / Value Cards */}
        <div className="overview-cards">
          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
          >

            <div className="icon-container">
   <FaBullseye className="icon" />


            </div>
         
            <h3>Our Mission</h3>
            <p>
              To simplify and accelerate digital payments for every business—delivering
              transparent pricing, instant setup, and customer-first experiences.
            </p>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
             <div className="icon-container">
            <FaCreditCard className="icon" />
            </div>
            <h3>What We Do</h3>
            <p>
              From cards, UPI, and netbanking to wallets, payouts, invoicing, and
              virtual accounts—we power every payment flow through one unified platform.
            </p>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
               <div className="icon-container">
            <FaShieldAlt className="icon" />
            </div>
            <h3>Trust & Security</h3>
            <p>
              Built on enterprise-grade PCI-DSS compliance with advanced risk controls
              and fraud detection, ensuring maximum security and peace of mind.
            </p>
          </motion.div>

          <motion.div
            className="overview-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220 }}
          >
             <div className="icon-container">
            <FaChartLine className="icon" />
            </div>
            <h3>Our Vision</h3>
            <p>
              To power borderless commerce with intelligent infrastructure,
              real-time insights, and 99.99% uptime—enabling businesses to grow
              confidently on a global scale.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompanyOverview;
