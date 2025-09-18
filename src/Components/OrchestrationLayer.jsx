import React, { useEffect, useRef, useState } from "react";
import {
  FaCloud,
  FaRoute,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaBolt,
} from "react-icons/fa";
import "../Styles/OrchestrationLayer.css";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    id: "ingest",
    icon: <FaCloud />,
    title: "Ingest",
    subtitle: "Collect payments from channels (web, mobile, POS).",
    bullets: ["Webhook & SDK intake", "Normalize payloads", "Device binding"],
    color: "linear-gradient(135deg,#4fb2ff,#1a9ad6)",
  },
  {
    id: "route",
    icon: <FaRoute />,
    title: "Route",
    subtitle: "Intelligent routing based on rules, cost & success rates.",
    bullets: ["Dynamic rules engine", "A/B routing & failover", "Cost-aware selection"],
    color: "linear-gradient(135deg,#7ae0c7,#36b3a8)",
  },
  {
    id: "process",
    icon: <FaCogs />,
    title: "Process",
    subtitle: "Perform EMV / tokenization & fraud checks in-line.",
    bullets: ["EMV contactless flows", "Tokenization", "Fraud scoring"],
    color: "linear-gradient(135deg,#ffd166,#ff9a3c)",
  },
  {
    id: "secure",
    icon: <FaShieldAlt />,
    title: "Secure",
    subtitle: "End-to-end encryption, compliance & dispute handling.",
    bullets: ["PCI Level 1", "End-to-end encryption", "Chargeback support"],
    color: "linear-gradient(135deg,#9aa7ff,#6b7dff)",
  },
  {
    id: "settle",
    icon: <FaChartLine />,
    title: "Settle & Monitor",
    subtitle: "Settlements, reporting and real-time dashboards.",
    bullets: ["Realtime dashboards", "Settlement reconciliation", "Alerts & SLA monitoring"],
    color: "linear-gradient(135deg,#ff7bb5,#ff5a8f)",
  },
];

export default function OrchestrationLayer() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate();

  // Observe when component enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // autoplay active step when in view
  useEffect(() => {
    if (!inView || !autoPlay) return;
    let i = 0;
    const tick = setInterval(() => {
      setActive((s) => (s + 1) % steps.length);
      i++;
      if (i >= steps.length * 2) {
        clearInterval(tick);
        setAutoPlay(false);
      }
    }, 1400);
    return () => clearInterval(tick);
  }, [inView, autoPlay]);

  // compute packet left position percentage
  const packetLeft = (active / (steps.length - 1)) * 100;

  function goDemo() {
    navigate("/contact");
  }
  function goDocs() {
    navigate("/developer");
  }

  return (
    <section
      className={`orch-section ${inView ? "orch-in" : ""}`}
      ref={ref}
      aria-labelledby="orch-title"
    >
      <div className="orch-inner">
        <header className="orch-header">
          <span className="orch-kicker">How it works</span>
          <h2 id="orch-title" className="orch-title">
            Our Payment Orchestration Layer in Action
          </h2>
          <p className="orch-lead">
            Dynamic routing, secure processing and real-time monitoring — stitched into a single orchestration
            layer that optimizes authorization success, reduces cost, and scales with your business.
          </p>
        </header>

        <div className="orch-body">
          {/* LEFT CARDS */}
          <div className="orch-left" role="list">
            {steps.map((s, i) => (
              <button
                key={s.id}
                role="listitem"
                aria-pressed={active === i}
                className={`orch-step ${active === i ? "is-active" : ""}`}
                onMouseEnter={() => { setActive(i); setAutoPlay(false); }}
                onFocus={() => { setActive(i); setAutoPlay(false); }}
                onClick={() => setActive(i)}
                style={{ "--accent": s.color }}
                title={`${s.title} — ${s.subtitle}`}
              >
                <div className="step-left">
                  <div className="step-icon" aria-hidden>
                    {s.icon}
                  </div>
                </div>
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  <div className="step-sub">{s.subtitle}</div>
                </div>
                <div className="step-arrow" aria-hidden>›</div>
              </button>
            ))}
          </div>

          {/* MIDDLE PIPELINE */}
          <div className="orch-center" aria-hidden>
            <svg className="orch-bg-wave" viewBox="0 0 800 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#0b9ad6" stopOpacity="0.06" />
                  <stop offset="1" stopColor="#7ae0c7" stopOpacity="0.04" />
                </linearGradient>
              </defs>
              <path d="M0 80 C150 20, 350 140, 800 60 L800 120 L0 120 Z" fill="url(#g1)"></path>
            </svg>

            <div className="pipeline">
              <div className="pipeline-track" role="presentation">
                {steps.map((_, idx) => (
                  <div key={idx} className={`node ${idx <= active ? "node-on" : ""}`} />
                ))}
                <div
                  className="packet"
                  style={{ left: `calc(${packetLeft}% )` }}
                  aria-hidden
                >
                  <FaBolt />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DETAIL */}
          <aside className="orch-right" aria-live="polite">
            <div className="detail">
              <div className="detail-head">
                <div className="detail-icon" style={{ background: steps[active].color }}>
                  {steps[active].icon}
                </div>
                <div>
                  <h3 className="detail-title">{steps[active].title}</h3>
                  <p className="detail-sub">{steps[active].subtitle}</p>
                </div>
              </div>

              <div className="detail-bullets" role="list">
                {steps[active].bullets.map((b, j) => (
                  <div key={j} className="bullet" role="listitem">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                      <path fill="#4fb2ff" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="detail-ctas">
                <button className="btn btn-outline request-btn" onClick={goDemo}>Request Demo</button>
                <button className="btn outline" onClick={goDocs}>Developer Docs</button>
              </div>
            </div>

            <div className="detail-stats" aria-hidden>
              <div className="stat">
                <div className="stat-num">&gt;99.97%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat">
                <div className="stat-num">100ms</div>
                <div className="stat-label">Median auth latency</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
