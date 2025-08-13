import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/BusinessStats.css";

const stats = [
  { label: "Trusted by", value: 19, suffix: "+" },
  { label: "Feedback", value: 4000, suffix: "k" },
  { label: "Branches", value: 12, suffix: "+" },
  { label: "Workers", value: 65, suffix: "+" },
];

const BusinessStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="business-stats-section">
      <div className="overlay"></div> {/* dark overlay */}
      <motion.div
        className="stats-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="stats-title">We Always Strive for Excellence</h2>
        <p className="stats-description">
          Our commitment to quality and customer satisfaction drives us to deliver the best solutions for businesses worldwide.
        </p>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-box" key={stat.label}>
              <motion.span
                className="stat-value"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {counts[index]}
                {stat.suffix}
              </motion.span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessStats;
