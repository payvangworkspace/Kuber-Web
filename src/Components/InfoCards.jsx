import React from "react";
import "../Styles/InfoCards.css";
import { motion } from "framer-motion";

const cardData = [
  {
    image: `${import.meta.env.BASE_URL}remote.jpg`,
    title: "Drag and Drop Functionality",
    description:
      "Effortlessly manage your workflow with intuitive drag-and-drop features, providing seamless control and efficiency for your business operations.",
    linkText: "Read More",
  },
  {
    image: `${import.meta.env.BASE_URL}split.jpg`,
    title: "Transparent Pricing",
    description:
      "Enjoy a straightforward pricing model with no hidden fees. Our end-to-end payment gateway ensures cost-effectiveness with no monthly charges post-integration.",
    linkText: "Read More",
  },
  {
    image: `${import.meta.env.BASE_URL}retail.jpg`,
    title: "Optimized Performance",
    description:
      "Enhance your payment process with advanced optimization, ensuring top-tier security, efficiency, and reliability for every transaction.",
    linkText: "Read More",
  },
  {
    image: `${import.meta.env.BASE_URL}dashboard.jpg`,
    title: "Advanced Dashboard",
    description:
      "Gain real-time insights and analytics to make informed decisions. Access key stats and generate customizable reports with ease.",
    linkText: "Read More",
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
        {cardData.map((card, index) => (
          <div className="info-card" key={index}>
            <img
              src={card.image}
              alt={card.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${import.meta.env.BASE_URL}fallback.jpg`; // optional fallback
              }}
            />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href="#!" className="read-more">
                {card.linkText} &rarr;
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfoCards;
