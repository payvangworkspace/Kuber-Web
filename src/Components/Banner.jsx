import React from "react";
import "../Styles/Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = ({ title, subtitle, description }) => {

    const navigate=useNavigate();

    function redirectHome(){
        navigate("/")
        
    }
  return (
    <section className="mx-banner">
      <div className="mx-banner-overlay"></div>
      <div className="mx-banner-content">
        <h1 className="mx-banner-title">{title || "Welcome to Our Platform"}</h1>
        <h3 className="mx-banner-subtitle">{subtitle || "Simplifying Digital Payments"}</h3>
        <p className="mx-banner-description">
          {description ||
            "Manage your invoices, transactions, and financial operations effortlessly with our secure and scalable platform. Experience the future of payments today."}
        </p>
        <div className="mx-banner-buttons">
          {/* <button className="btn-primary">Get Started</button> */}
          <button className="btn-secondary" onClick={redirectHome}>Home</button>
        </div>
      </div>
      <div className="mx-banner-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>
    </section>
  );
};

export default Banner;