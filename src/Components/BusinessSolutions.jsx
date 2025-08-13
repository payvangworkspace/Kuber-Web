import React from "react";
import "../Styles/BusinessSolutions.css";
import {
  FaMoneyCheckAlt,
  FaCode,
  FaHandshake,
  FaGlobe,
  FaBuilding,
  FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaMoneyCheckAlt />, title: "Deposit Checks Instantly" },
  { icon: <FaCode />, title: "A Powerful Open API" },
  { icon: <FaHandshake />, title: "Affiliates & Partnerships" },
  { icon: <FaGlobe />, title: "Coverage Around The World" },
  { icon: <FaBuilding />, title: "Business Without Borders" },
  { icon: <FaPaintBrush />, title: "Web Design" },
];

const BusinessSolutions = () => {
  return (
    <section className="business-section">
      {/* Text content */}
      <motion.div
        className="business-content"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Small to Medium-Sized Businesses</h2>
        <p>
          Our tailored solutions help small and medium-sized businesses simplify
          payments, enhance operations, and scale efficiently.
        </p>
        <div className="features-list">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="icon">{feature.icon}</span>
              <span>{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image side with delay for premium effect */}
      <motion.div
        className="business-image"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src="./IG.png" alt="Business Solutions" />
      </motion.div>
    </section>
  );
};

export default BusinessSolutions;
