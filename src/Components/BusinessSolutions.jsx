import React from "react";
import "../Styles/BusinessSolutions.css";
import {
  FaLock,
  FaBolt,
  FaChartLine,
  FaCreditCard,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaLock />, title: "Secure Transactions" },
  { icon: <FaBolt />, title: "Instant Processing" },
  { icon: <FaChartLine />, title: "Real-Time Analytics" },
  { icon: <FaCreditCard />, title: "Multiple Payment Methods" },
  { icon: <FaShieldAlt />, title: "Advanced Fraud Protection" },
  { icon: <FaGlobe />, title: "Global Payment Support" },
];

const BusinessSolutions = () => {
  return (
    <section
      className="business-section"
      style={{
        background: `linear-gradient(120deg, rgba(10, 47, 92, 0.95), rgba(16, 62, 115, 0.95)),
              url("./bg-3.jpg") center/cover;`,
      }}
    >
      {/* Text content */}
      <motion.div
        className="business-content"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Powerful Payment Infrastructure</h2>
        <p>
          Build, scale, and optimize your payment experience with our secure and
          high-performance infrastructure. Designed for modern businesses, our
          platform ensures seamless transactions, real-time insights, and global
          reach.
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

      {/* Image side */}
      <motion.div
        className="business-image"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={`/home/IG.png`} alt="Payment Infrastructure" />
      </motion.div>
    </section>
  );
};

export default BusinessSolutions;