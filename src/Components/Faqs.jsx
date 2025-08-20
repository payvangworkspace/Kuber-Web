import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Faqs.css";

const faqs = [
  {
    question: "What is KuberPays?",
    answer:
      "KuberPays is a secure Canadian payment solution designed for businesses of all sizes. We support Interac®, Visa, Mastercard, and offer advanced fraud protection with Canadian data residency.",
  },
  {
    question: "Is KuberPays available only in Canada?",
    answer:
      "Yes, KuberPays is tailored for the Canadian market. All transactions and sensitive data are stored within Canadian servers, ensuring compliance with Canadian privacy laws.",
  },
  {
    question: "Does KuberPays support recurring billing?",
    answer:
      "Absolutely. You can set up recurring billing, subscriptions, and automated invoicing with just a few clicks.",
  },
  {
    question: "How secure is KuberPays?",
    answer:
      "We are PCI-DSS compliant, use bank-grade encryption, and include advanced fraud monitoring tools for every transaction.",
  },
  {
    question: "What support do you provide?",
    answer:
      "Our Canadian support team is available 24/7 via phone, chat, and email to assist your business whenever you need help.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        {/* Left Content */}
        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about KuberPays in Canada.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="faq-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="./FA4.png"
            alt="FAQ Illustration"
            className="faq-image"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
