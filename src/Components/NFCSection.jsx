import React from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaShieldAlt,
  FaWifi,
  FaBolt,
  FaCreditCard,
  FaQrcode,
} from "react-icons/fa";
import "../Styles/NFCSection.css";

const NFCSection = () => {
  return (
    <section className="nfc-section" aria-labelledby="nfc-heading">
      {/* Hero */}
      <div className="nfc-hero">
        <div className="nfc-hero-overlay" />
        <div className="nfc-hero-inner">
          <h2 id="nfc-heading" className="nfc-title">NFC Payments — Tap & Go</h2>
          <p className="nfc-subtitle">
            Accept contactless payments securely and instantly using compatible
            smartphones or terminals. Fast setup, enterprise-grade security, and
            seamless reconciliation.
          </p>

          <div className="nfc-cta">
            <Link to="/contact" className="nfc-btn nfc-btn-primary" aria-label="Get started with NFC">
              Get Started
            </Link>
            <Link to="/developer" className="nfc-btn nfc-btn-outline" aria-label="View developer docs">
              Developer Docs
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="nfc-wrap">
        {/* Features */}
        <div className="nfc-features">
          <article className="nfc-feature">
            <div className="nfc-feature-icon"><FaMobileAlt /></div>
            <h3>Phone as POS</h3>
            <p>Turn a compatible smartphone into a secure point-of-sale — no extra terminal required.</p>
          </article>

          <article className="nfc-feature">
            <div className="nfc-feature-icon"><FaShieldAlt /></div>
            <h3>EMV & Tokenization</h3>
            <p>EMV contactless flows and tokenized card storage keep data safe and compliant.</p>
          </article>

          <article className="nfc-feature">
            <div className="nfc-feature-icon"><FaWifi /></div>
            <h3>Offline Support</h3>
            <p>Offline capture with automatic retry and reconciliation when the connection returns.</p>
          </article>

          <article className="nfc-feature">
            <div className="nfc-feature-icon"><FaBolt /></div>
            <h3>Fast Onboarding</h3>
            <p>Enable devices and staff in minutes with role-based access and device binding.</p>
          </article>
        </div>

        {/* How it works */}
        <div className="nfc-how">
          <h4>How it works</h4>
          <ol className="nfc-steps" aria-label="NFC steps">
            <li>
              <div className="step-index">1</div>
              <div className="step-body">
                <strong>Enter Amount</strong>
                <span> — Merchant enters amount in the mobile app.</span>
              </div>
            </li>
            <li>
              <div className="step-index">2</div>
              <div className="step-body">
                <strong>Customer taps card</strong>
                <span> — NFC-enabled debit/credit card is tapped on merchant’s phone.</span>
              </div>
            </li>
            <li>
              <div className="step-index">3</div>
              <div className="step-body">
                <strong>SDK processes securely</strong>
                <span> — EMV transaction data is captured and sent to backend/acquirer.</span>
              </div>
            </li>
            <li>
              <div className="step-index">4</div>
              <div className="step-body">
                <strong>Receipt generated</strong>
                <span> — Merchant and customer get instant confirmation.</span>
              </div>
            </li>
          </ol>
        </div>

        {/* Accepts */}
        <div className="nfc-accepts">
          <div className="nfc-accepts-left">
            <div className="nfc-accepts-item"><FaCreditCard /> <span>Contactless EMV</span></div>
            <div className="nfc-accepts-item"><FaQrcode /> <span>QR fallback</span></div>
            {/* <div className="nfc-accepts-item"><FaMobileAlt /> <span>Apple Pay / Google Pay</span></div> */}
          </div>
          <div className="nfc-accepts-right">
            <div className="nfc-badges">
              <span className="nfc-badge">PCI DSS Level 1</span>
              <span className="nfc-badge">EMV Contactless</span>
              <span className="nfc-badge">Tokenization</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="nfc-bottom">
          <div className="nfc-bottom-left">
            <h5>Ready to accept tap-to-pay?</h5>
            <p className="muted">Reduce queue time and increase conversion at checkout.</p>
          </div>
          <div className="nfc-bottom-right">
            <Link to="/pricing" className="nfc-btn nfc-btn-primary">See Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFCSection;
