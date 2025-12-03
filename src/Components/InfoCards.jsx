// InfoCards.jsx
import React from "react";
import "../Styles/InfoCards.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMousePointer, FaLock, FaBolt, FaChartBar } from "react-icons/fa";

const cardData = [
  {
    id: "drag-drop",
    image: `/home/remote.jpg`,
    title: "Drag-and-Drop Functionality",
    description:
      "Effortlessly manage your workflow with intuitive drag-and-drop features.",
    longDescription:
      "Our drag-and-drop interface ensures that managing payments, customers, and workflows is as easy as moving tiles. This saves time and boosts productivity across your teams.",
    features: [
      "Simple workflow automation",
      "No coding required",
      "Customizable UI elements",
      "Seamless integrations",
    ],
    icon: <FaMousePointer className="card-feature-icon" />,
  },
  {
    id: "transparent-pricing",
    image: `/home/split.jpg`,
    title: "Transparent Pricing",
    description:
      "Straightforward pricing model with no hidden fees.",
    longDescription:
      "We believe in clarity. Our pricing is flat, with no hidden charges, so you can scale without surprises. You only pay for what you use, nothing more.",
    features: [
      "Flat transaction fees",
      "No monthly charges",
      "Volume-based discounts",
      "Clear billing dashboard",
    ],
    icon: <FaLock className="card-feature-icon" />,
  },
  {
    id: "enterprise-security",
    image: `/home/retail.jpg`,
    title: "Enterprise-Grade Security & Speed",
    description:
      "Top-tier security, efficiency, and reliability for every transaction.",
    longDescription:
      "With military-grade encryption and lightning-fast processing, your transactions are always safe and instant. Our systems handle high volume while ensuring compliance.",
    features: [
      "Bank-level security protocols",
      "AI-powered fraud detection",
      "99.99% uptime",
      "Optimized for speed",
    ],
    icon: <FaBolt className="card-feature-icon" />,
  },
  {
    id: "advanced-dashboard",
    image: `/home/dashboard.jpg`,
    title: "Advanced Dashboard",
    description:
      "Gain real-time insights and analytics to make informed decisions.",
    longDescription:
      "Our dashboard gives you the power of data. From transactions to settlements, everything is presented in real-time, helping you take strategic decisions.",
    features: [
      "Real-time analytics",
      "Custom reports",
      "Multi-user access",
      "Export to CSV/Excel",
    ],
    icon: <FaChartBar className="card-feature-icon" />,
  },
];

const InfoCards = () => {
  return (
    <div className="card-container-wrapper">
      <div className="intro-text">
        <h2>Why Choose Our Services?</h2>
        <p>
          Discover the features that make our platform efficient, secure, and
          user-friendly. These services are designed to enhance your workflow
          and provide exceptional support.
        </p>
      </div>

      <motion.div
        className="card-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {cardData.map((card) => (
          <div className="info-card" key={card.id}>
            <img
              src={card.image}
              alt={card.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${import.meta.env.BASE_URL}fallback.jpg`;
              }}
            />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link to={`/info/${card.id}`} className="read-more">
                {card.linkText || "Learn More"} →
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfoCards;
export { cardData }; // 👈 export for detail page
