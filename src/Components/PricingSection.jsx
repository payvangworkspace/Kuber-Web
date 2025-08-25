import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/PricingSection.css";

export default function PricingSection() {
  const [cycle, setCycle] = useState("monthly"); // kept in case you re-enable later
  const navigate = useNavigate();

  return (
    <section className="pricing-section">
      {/* animated gradient background */}
      <div className="pricing-bg" />

      <motion.div
        className="pricing-container"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="pricing-title"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Simple, Transparent Pricing <span>for Canada</span> 🇨🇦
        </motion.h2>

        <motion.p
          className="pricing-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Built for Canadian businesses with Interac® support, data residency, and
          predictable billing. Switch anytime—no hidden fees.
        </motion.p>

        {/* Contact Sales instead of pricing cards */}
        <motion.div
          className="contact-sales-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <p className="contact-sales-text">
            For detailed pricing, please contact our Sales team.
          </p>
          <button
            className="cta primary"
            onClick={() => navigate("/contact")}
          >
            Contact Sales
          </button>
        </motion.div>

        <motion.p
          className="fineprint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Prices shown in Canadian dollars (CAD). Taxes may apply. Interac® is a
          registered trademark of Interac Corp. Used under license.
        </motion.p>
      </motion.div>
    </section>
  );
}
