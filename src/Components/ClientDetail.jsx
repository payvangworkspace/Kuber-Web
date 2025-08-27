import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import { FaHandsHelping, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import "../Styles/CardDetail.css"; // reuse same styling

const ClientDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Banner title="Our Approach" subtitle="How We Understand Clients" />

      <div className="card-detail-container">
        <div className="card-detail">
          <img
            src={`${import.meta.env.BASE_URL}home-facility-bg.jpg`}
            alt="Our Approach"
            className="card-detail-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${import.meta.env.BASE_URL}fallback.jpg`;
            }}
          />

          <div className="card-detail-content">
            <h2 className="card-detail-title">Understanding Our Clients</h2>
            <p className="card-detail-description">
              At KuberPays, our approach is built on **deep client understanding**. 
              We listen, learn, and adapt our payment solutions to match the unique needs 
              of businesses across industries. With innovation and security at the core, 
              we ensure our clients always stay ahead in the financial ecosystem.
            </p>

            <div className="card-detail-subsection">
              <h3>Our Core Pillars</h3>
              <ul className="card-detail-features">
                <li><FaHandsHelping className="feature-check-icon" /> Client-Centric Partnerships</li>
                <li><FaShieldAlt className="feature-check-icon" /> Secure & Transparent Transactions</li>
                <li><FaRocket className="feature-check-icon" /> Continuous Innovation & Agility</li>
                <li><FaUsers className="feature-check-icon" /> Empowering Businesses Globally</li>
              </ul>
            </div>

            <p className="card-detail-long">
              We believe that success comes from a **long-term vision**. That’s why we 
              invest in building strong client relationships, backed by world-class 
              technology and unmatched reliability.
            </p>

            <button className="card-detail-btn" onClick={() => navigate(-1)}>
              ⬅ Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ClientDetail;
