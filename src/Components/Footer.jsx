import React from 'react';
import '../Styles/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <img
            className="footer-logo"
            src="./logo2.png"  // Public folder image
            alt="Kuberpays Logo"
          />
          <div className="footer-info">
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              113 Lakeshore Rd, West, Suite-163,<br />
              Mississauga ON L5H 1E9, Bifro House, Canada
            </p>
            <p className="footer-link" onClick={() => (window.location.href = "tel:+1-647-619-0777")}>
              <FaPhoneAlt className="footer-icon" /> +1-647-619-0777
            </p>
            <p className="footer-link" onClick={() => (window.location.href = "mailto:info@kuberpayment.com")}>
              <FaEnvelope className="footer-icon" /> info@kuberpayment.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kuberpays. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
