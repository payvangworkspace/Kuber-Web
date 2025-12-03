import React from 'react';
import '../Styles/Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <img
            className="footer-logo"
            src={`${import.meta.env.BASE_URL}logo2.png`}
            alt="Kuberpays Logo"
          />
          <div className="footer-info">
 <p className="footer-address">
  <FaMapMarkerAlt className="footer-icon" />
  <span>
    113 Lakeshore Rd, West, Suite-163,<br />
    Mississauga ON L5H 1E9, Bifro House, Canada
  </span>
</p>

<p className="footer-link" onClick={() => (window.location.href = "tel:+1-647-619-0777")}>
  <FaPhoneAlt className="footer-icon" /> +1-647-619-0777
</p>

<p className="footer-link" onClick={() => (window.location.href = "mailto:info@kuberpayment.com")}>
  <FaEnvelope className="footer-icon" /> info@kuberpayment.com
</p>

<p className="footer-lei">
  <FaIdCard className='footer-icon'/>  
  LEI: 9845007B948E6F7FB644
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
