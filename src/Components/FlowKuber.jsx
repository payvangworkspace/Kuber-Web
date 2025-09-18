import React, { useState, useEffect } from "react";
import {
  Cloud,
  Shuffle,
  Cog,
  ShieldCheck,
  BarChart2,
  DollarSign,
} from "lucide-react";
import "../Styles/FlowKuber.css";

const steps = [
  {
    id: "ingest",
    title: "Ingest",
    subtitle: "Collect payments across channels (web, app, POS).",
    icon: <Cloud size={26} />,
  },
  {
    id: "route",
    title: "Route",
    subtitle: "Intelligent routing to optimize cost & success rates.",
    icon: <Shuffle size={26} />,
  },
  {
    id: "process",
    title: "Process",
    subtitle: "Tokenization, authentication & risk scoring.",
    icon: <Cog size={26} />,
  },
  {
    id: "secure",
    title: "Secure",
    subtitle: "Encryption, fraud prevention & compliance.",
    icon: <ShieldCheck size={26} />,
  },
  {
    id: "settle",
    title: "Settle & Monitor",
    subtitle: "Automated settlements, reporting & insights.",
    icon: <BarChart2 size={26} />,
  },
  {
    id: "revenue",
    title: "Revenue",
    subtitle: "Ensure seamless customer experience & maximize ROI.",
    icon: <DollarSign size={26} />,
  },
];

function FlowKuber() {
  const [active, setActive] = useState(0);

  // Auto cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flowkuber-section">
      <div className="flowkuber-inner">
        <h2 className="flowkuber-heading">Payment Orchestration Flow</h2>
        <p className="flowkuber-subhead">
          A streamlined pipeline for secure, scalable, and intelligent payments.
        </p>
        <div className="flowkuber-body">
          <div className="flowkuber-left">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                className={`flowkuber-step ${active === idx ? "active" : ""}`}
                onMouseEnter={() => setActive(idx)}
              >
                <div className="step-icon">{step.icon}</div>
                <div className="step-text">
                  <div className="step-title">{step.title}</div>
                  <div className="step-subtitle">{step.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="flowkuber-center">
            <div className="pipeline-track">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`node ${idx <= active ? "on" : ""}`}
                  style={{ left: `${(idx / (steps.length - 1)) * 100}%` }}
                />
              ))}
              <div
                className="packet"
                style={{ left: `${(active / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="flowkuber-right">
            <div className="flowkuber-detail">
              <div className="detail-icon">{steps[active].icon}</div>
              <div className="detail-info">
                <h3>{steps[active].title}</h3>
                <p>{steps[active].subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlowKuber;
