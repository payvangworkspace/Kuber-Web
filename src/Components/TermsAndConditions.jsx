import React from "react";
import {
  ShieldCheck,
  UserCheck,
  AlertCircle,
  RefreshCw,
  FileText,
  Lock,
  Gavel
} from "lucide-react";
import "../Styles/TermsAndConditions.css";
import { Link, useNavigate } from "react-router-dom";

const TermsAndConditions = () => {

  const navigate = useNavigate();

  const redirectContact = () => {
    navigate("/contact");
  };

  return (
    <div className="terms-page">
      {/* Background animated waves */}
      <div className="background-wave"></div>
      <div className="background-wave second"></div>

      {/* Header */}
      <header className="terms-header">
        <h1 className="terms-main-title">📜 Terms & Conditions</h1>
        <p className="terms-tagline">
          Welcome to <strong>Kuberpays</strong>. Please read these terms carefully.
        </p>
      </header>

      {/* Content */}
      <section className="terms-container">
        <div className="terms-grid">

          <div className="terms-card">
            <ShieldCheck className="terms-icon" />
            <h3>Acceptance of Terms</h3>
            <p>
              By accessing our services, you agree to comply with these Terms &
              Conditions. If you do not agree, please discontinue use.
            </p>
          </div>

          <div className="terms-card">
            <UserCheck className="terms-icon" />
            <h3>User Responsibilities</h3>
            <ul>
              <li>Provide valid and accurate information.</li>
              <li>Avoid misuse or exploitation of services.</li>
              <li>Respect local and international laws.</li>
            </ul>
          </div>

          <div className="terms-card">
            <Lock className="terms-icon" />
            <h3>Privacy Policy</h3>
            <p>
              Your data security is our priority. We collect, store, and process
              information in line with our{" "}
              <Link to="/privacy" className="link">
                Privacy Policy
              </Link>.
            </p>
          </div>

          <div className="terms-card">
            <AlertCircle className="terms-icon" />
            <h3>Limitation of Liability</h3>
            <p>
              Kuberpays shall not be liable for losses or damages arising from
              unauthorized access or use of our services.
            </p>
          </div>

          <div className="terms-card">
            <RefreshCw className="terms-icon" />
            <h3>Changes to Terms</h3>
            <p>
              We may update these Terms from time to time. Changes take effect
              immediately upon posting.
            </p>
          </div>

          <div className="terms-card">
            <Gavel className="terms-icon" />
            <h3>Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of your jurisdiction.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      {/* <footer className="terms-footer">
        <p>
          Have questions?{" "}
          <span className="contact-link" onClick={redirectContact}>
            Contact us
          </span>
        </p>
      </footer> */}
    </div>
  );
};

export default TermsAndConditions;
