import React from "react";
import "../Styles/ResellerPartnership.css";
import {
  FaRocket,
  FaMoneyBillWave,
  FaStar,
  FaGem,
  FaGlobe,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaCheckCircle />, title: "98% Merchant Account Approval Rate" },
  { icon: <FaRocket />, title: "Quick, Seamless Integrations" },
  { icon: <FaMoneyBillWave />, title: "Flexible Payment Solutions" },
  { icon: <FaGlobe />, title: "Multi-Currency Payment Processing" },
  { icon: <FaStar />, title: "Supports 196 Countries" },
  { icon: <FaGem />, title: "Settled into Your Bank Account" },
  { icon: <FaHandshake />, title: "Exceptional Customer Service" },
];

const ResellerPartnership = () => {
  return (
    <section
      className="reseller-partnership-section"
      style={{
        background: `linear-gradient(120deg, rgba(10, 47, 92, 0.95), rgba(16, 62, 115, 0.95)),
              url("/home/bg-3.jpg") center/cover`,
      }}
    >
      {/* Text content */}
      <motion.div
        className="reseller-partnership-content"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Merchant Services Reseller Partnership</h2>
        <h3>Partner with Kuber Payment</h3>
        <p>
          Your number one processing partner, Kuber Payment is a merchant
          services provider that offers an all-inclusive feature set for payment
          services and is one of the most easily integrated solutions in the
          credit card processing industry. Our sign-up process is quick and
          straightforward, our API-hosted payment gateway allows for seamless
          integrations, and we don’t have any monthly minimums or dues.
        </p>
        <p>
          Our credit card processing resellers readily endorse our secure global
          payment gateway as the gold standard of payment processing solutions.
          When you partner with us, you will discover a no-pressure partnership
          that allows you to send us merchant account referrals and rewards
          loyalty with higher percentages.
        </p>
        <div className="reseller-partnership-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="reseller-partnership-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="reseller-partnership-icon">{feature.icon}</span>
              <span>{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image side */}
      <motion.div
        className="reseller-partnership-image"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={`/home/paymentgate.jpg`}
          alt="Merchant Services Reseller"
        />
      </motion.div>
    </section>
  );
};

export default ResellerPartnership;
