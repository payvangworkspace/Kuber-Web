import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaKey,
  FaIdCard,
  FaShieldAlt,
  FaBolt,
  FaChartBar,
  FaFileInvoice,
  FaProjectDiagram,
  FaExclamationTriangle,
  FaCreditCard,
  FaWallet,
  FaUniversity,
  FaInternetExplorer
} from "react-icons/fa";
import "../Styles/FlowComparison.css";

// Paytech Sidebar
const PaytechSidebar = React.forwardRef(({ type }, ref) => (
  <aside className="paytech-card" ref={ref}>
    <h3 className="paytech-title">Paytech API</h3>
    <div className="paytech-items">
      {type === "before" ? (
        <>
          <div className="paytech-item"><FaCode className="paytech-icon" /> Legacy Gateway</div>
          <div className="paytech-item"><FaServer className="paytech-icon" /> Manual Auth</div>
          <div className="paytech-item"><FaDatabase className="paytech-icon" /> Single DB</div>
        </>
      ) : (
        <>
          <div className="paytech-item"><FaIdCard className="paytech-icon" /> KYC</div>
          <div className="paytech-item"><FaShieldAlt className="paytech-icon" /> Fraud Prevention</div>
          <div className="paytech-item"><FaBolt className="paytech-icon" /> One-click payments</div>
          <div className="paytech-item"><FaChartBar className="paytech-icon" /> Analytics</div>
          <div className="paytech-item"><FaFileInvoice className="paytech-icon" /> Settlement</div>
          <div className="paytech-item"><FaProjectDiagram className="paytech-icon" /> Smart Routing</div>
          <div className="paytech-item"><FaExclamationTriangle className="paytech-icon" /> Failover chains</div>
        </>
      )}
    </div>
  </aside>
));

// Step Card
function StepCard({ step, color }) {
  return (
    <div className="fc-card" style={{ borderColor: color, backgroundColor: `${color}20` }}>
      <div className="fc-card-icon" style={{ color }}>{step.icon}</div>
      <div className="fc-card-text">{step.label}</div>
    </div>
  );
}

// Main Component
export default function FlowComparison() {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const sidebarRef = useRef(null);
  const extraCardRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [cardPositions, setCardPositions] = useState([]);
  const [shopToAPI, setShopToAPI] = useState(null);

  const beforeSteps = [
    { icon: <FaCode />, label: "Customer initiates payment" },
    { icon: <FaServer />, label: "Manual verification" },
    { icon: <FaDatabase />, label: "Redirect to third-party" },
    { icon: <FaKey />, label: "Authentication delay" },
    { icon: <FaProjectDiagram />, label: "Transaction complete" },
  ];

  const afterSteps = [
    { icon: <FaCreditCard />, label: "Card Provider 1" },
    { icon: <FaCreditCard />, label: "Card Provider 2" },
    { icon: <FaCreditCard />, label: "Card Provider 3" },
    { icon: <FaWallet />, label: "APM" },
    { icon: <FaUniversity />, label: "Open Banking" },
  ];

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;
    newPos = Math.max(0, Math.min(100, newPos));
    setPos(newPos);
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    const move = (ev) => updatePos(ev.clientX);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const onTouchStart = (e) => {
    const move = (ev) => updatePos(ev.touches[0].clientX);
    const end = () => {
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", end);
    };
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", end);
  };

  useEffect(() => {
    const handle = handleRef.current;
    if (handle) {
      handle.addEventListener("mousedown", onMouseDown);
      handle.addEventListener("touchstart", onTouchStart);
    }
    return () => {
      if (handle) {
        handle.removeEventListener("mousedown", onMouseDown);
        handle.removeEventListener("touchstart", onTouchStart);
      }
    };
  }, [updatePos]);

  // Calculate end-to-end arrow positions
  useEffect(() => {
    if (!sidebarRef.current || !extraCardRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const sidebarRect = sidebarRef.current.getBoundingClientRect();
    const extraRect = extraCardRef.current.getBoundingClientRect();

    // Arrow from Your shop → Paytech
    setShopToAPI({
      x1: extraRect.right - containerRect.left,
      y1: extraRect.top + extraRect.height / 2 - containerRect.top,
      x2: sidebarRect.left - containerRect.left,
      y2: sidebarRect.top + sidebarRect.height / 2 - containerRect.top
    });

    // Arrows from Paytech → after steps
    const positions = Array.from(
      document.querySelectorAll(".fc-after .fc-steps .fc-card")
    ).map((card) => {
      const cardRect = card.getBoundingClientRect();
      return {
        x1: sidebarRect.right - containerRect.left,
        y1: sidebarRect.top + sidebarRect.height / 2 - containerRect.top,
        x2: cardRect.left - containerRect.left,
        y2: cardRect.top + cardRect.height / 2 - containerRect.top,
      };
    });
    setCardPositions(positions);
  }, [afterSteps, pos]);

  const renderCards = (steps, color) =>
    steps.map((s, i) => (
      <div className="card-parent" key={i}>
        <StepCard step={s} color={color} />
      </div>
    ));

  return (
    <section className="fc-section" aria-label="Flow comparison section">
      <div className="fc-container">
        <div className="fc-flow" ref={containerRef}>
          {/* AFTER layer */}
          <div className="fc-layer fc-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            {/* Extra card */}
            <div className="fc-extra-card" ref={extraCardRef}>
              <StepCard
                step={{ icon: <FaInternetExplorer />, label: "Your shop / website" }}
                color="#f59e0b"
              />
            </div>

            <div className="fc-content">
              <PaytechSidebar type="after" ref={sidebarRef} />
              <div className="fc-steps">{renderCards(afterSteps, "#60a5fa")}</div>

              {/* Arrow: Your shop → Paytech */}
              {shopToAPI && (
                <svg
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  <defs>
                    <marker id="arrowhead-shop" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                      <polygon points="0 0, 8 4, 0 8" fill="#f59e0b" />
                    </marker>
                  </defs>
                  <line
                    x1={shopToAPI.x1}
                    y1={shopToAPI.y1}
                    x2={shopToAPI.x2}
                    y2={shopToAPI.y2}
                    stroke="#f59e0b"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-shop)"
                  />
                </svg>
              )}

              {/* Arrows: Paytech → after-step cards */}
              {cardPositions.map((pos, i) => (
                <svg
                  key={i}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  <defs>
                    <marker id={`fc-arrowhead-${i}`} markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                      <polygon points="0 0, 8 4, 0 8" fill="#60a5fa" />
                    </marker>
                  </defs>
                  <line
                    x1={pos.x1}
                    y1={pos.y1}
                    x2={pos.x2}
                    y2={pos.y2}
                    stroke="#60a5fa"
                    strokeWidth="2"
                    markerEnd={`url(#fc-arrowhead-${i})`}
                    strokeDasharray="6 6"
                    className="fc-animated-arrow"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* BEFORE layer */}
          <div className="fc-layer fc-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <div className="fc-content">
              <PaytechSidebar type="before" />
              <div className="fc-steps">{renderCards(beforeSteps, "#22c55e")}</div>
            </div>
          </div>

          {/* Handle */}
          <div
            ref={handleRef}
            className="fc-handle"
            role="slider"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            style={{ left: `${pos}%` }}
          >
            <div className="fc-handle-line" />
            <div className="fc-handle-ball" aria-hidden>
              <div className="chevs">
                <FaChevronLeft /> <FaChevronRight />
              </div>
            </div>
          </div>

          <div className="fc-badge fc-badge-left">Before</div>
          <div className="fc-badge fc-badge-right">After</div>
          <div className="fc-percent" style={{ left: `${pos}%` }}>
            {Math.round(pos)}%
          </div>
        </div>
      </div>
    </section>
  );
}
