import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/PricingSection.css";

const BASE_PLANS = [
  {
    id: "starter",
    name: "Starter",
    monthly: 19,
    yearly: 15, // billed monthly equivalent (C$180/yr)
    features: [
      "1 Business Account",
      "Free Interac® e-Transfers (limited)",
      "Basic Analytics & Reports",
      "Email Support (Business Hours)",
      "Secure Canadian Data Residency",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 49,
    yearly: 39, // (C$468/yr)
    features: [
      "Up to 5 Business Accounts",
      "Unlimited Interac® e-Transfers",
      "Advanced Analytics & Export",
      "Priority Support",
      "Multi-Currency (CAD / USD)",
      "Automated Reconciliation",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null, // custom
    yearly: null,
    features: [
      "Unlimited Accounts & Teams",
      "White-Label & Custom Branding",
      "Premium API & Webhooks",
      "Dedicated Account Manager",
      "24/7 Canadian Support",
      "Custom SLAs & Pricing",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  const [cycle, setCycle] = useState("monthly"); // 'monthly' | 'yearly'

  const plans = useMemo(() => {
    // Map plans to display price text based on billing cycle
    return BASE_PLANS.map((p) => {
      if (p.id === "enterprise") {
        return { ...p, priceText: "Custom", period: "" };
      }
      const value = cycle === "monthly" ? p.monthly : p.yearly;
      return {
        ...p,
        priceText: `C$${value}`,
        period: cycle === "monthly" ? "/month" : "/month (billed yearly)",
      };
    });
  }, [cycle]);

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

        {/* Billing cycle toggle */}
        <motion.div
          className="billing-toggle"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          role="group"
          aria-label="Billing cycle selector"
        >
          <button
            className={`toggle-option ${cycle === "monthly" ? "active" : ""}`}
            onClick={() => setCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`toggle-option ${cycle === "yearly" ? "active" : ""}`}
            onClick={() => setCycle("yearly")}
          >
            Yearly
            <span className="save-pill">Save ~20%</span>
          </button>
          <div className={`toggle-glider ${cycle}`} />
        </motion.div>

        {/* Cards */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`price-card ${plan.highlight ? "highlight" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {plan.badge && <span className="badge">{plan.badge}</span>}

              <div className="card-head">
                <h3>{plan.name}</h3>
                <p className="price">
                  {plan.priceText}
                  <span className="period">{plan.period}</span>
                </p>
              </div>

              <ul className="feature-list">
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`cta ${plan.highlight ? "primary" : "outline"}`}>
                {plan.cta}
              </button>

              {!plan.highlight && (
                <div className="hover-glow" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>

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
