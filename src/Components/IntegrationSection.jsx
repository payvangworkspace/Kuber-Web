import React from "react";
import { motion } from "framer-motion";
import { 
  FaApple, FaPython, FaGem, FaCodeBranch, 
  FaJs, FaJava, FaAndroid, FaPhp 
} from "react-icons/fa";
import "../Styles/IntegrationSection.css";

const techItems = [
  { name: "iOS", icon: <FaApple className="icon" /> },
  { name: "Python", icon: <FaPython className="icon" /> },
  { name: "Ruby", icon: <FaGem className="icon" /> },
  { name: "Webhooks", icon: <FaCodeBranch className="icon" /> },
  { name: "Javascript", icon: <FaJs className="icon" /> },
  { name: "Java", icon: <FaJava className="icon" /> },
  { name: "Android", icon: <FaAndroid className="icon" /> },
  { name: "PHP", icon: <FaPhp className="icon" /> }
];

const IntegrationSection = () => {
  return (
    <div className="integration-container">
      <motion.div 
        className="integration-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="integration-content">
          <h2 className="title">Seamless Integration</h2>
          <p className="description">
            Integrating payments with <span className="highlight">Kuber Payss </span> 
            is effortless. Use SDKs, REST APIs, and plugins across major platforms with 
            <span className="highlight"> real-time performance</span>.
          </p>
          <p className="sub-heading">Integrate easily with:</p>
          <ul className="integration-list">
            <li>Client APIs for PHP, Python, JAVA, Node.js, .NET</li>
            <li>Web Checkout: JavaScript</li>
            <li>Mobile SDKs: iOS / Android</li>
            <li>Plugins: Prestashop, OpenCart, WooCommerce, Magento</li>
            <li>Hybrid Apps: Cordova</li>
          </ul>
          <p className="final-note">
            With detailed documentation, reference apps, and 24/7 support, 
            you can launch payments in minutes — <span className="highlight">not weeks</span>.
          </p>
        </div>

        {/* Right Icons */}
        <motion.div 
          className="technology-icons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="tech-item"
            >
              <div className="icon-wrapper">
                {tech.icon}
              </div>
              <p className="tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntegrationSection;
