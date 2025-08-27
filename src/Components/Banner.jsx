import React from "react";
import "../Styles/Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = ({ title, subtitle, description }) => {

    const navigate=useNavigate();



    function redirectHome(){
        navigate("/")
        
    }



  return (
    <section className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">{title || "Welcome to Our Platform"}</h1>
        <h3 className="banner-subtitle">{subtitle || "Simplifying Digital Payments"}</h3>
        <p className="banner-description">
          {description ||
            "Manage your invoices, transactions, and financial operations effortlessly with our secure and scalable platform. Experience the future of payments today."}
        </p>
        <div className="banner-buttons">
          {/* <button className="btn-primary">Get Started</button> */}
          <button className="btn-secondary" onClick={redirectHome}>Home</button>
        </div>
      </div>
      <div className="banner-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>
    </section>
  );
};

export default Banner;