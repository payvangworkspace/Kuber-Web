import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    panSsn: "",
    gstVat: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="signup-bg">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="signup-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="logo-container">
            <img src={"./logo2.png"} alt="Website Logo" className="main-logo" />
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="signup-title">Create Account</h2>

        {/* Form */}
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-parent">
          <div className="part-1">
          <motion.input className="fields"
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="text"
            name="company"
            placeholder="Company Name*"
            value={formData.company}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          </div>

          <div className="part-2">
          <motion.input className="fields"
            type="text"
            name="businessName"
            placeholder="Business Name*"
            value={formData.businessName}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="text"
            name="panSsn"
            placeholder="PAN / SSN (8-15 Characters)*"
            value={formData.panSsn}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="text"
            name="gstVat"
            placeholder="GST / VAT (10-20 Characters)*"
            value={formData.gstVat}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input className="fields"
            type="url"
            name="website"
            placeholder="Website (Optional)"
            value={formData.website}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
           <motion.input className="fields"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password*"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          </div>
          </div>
           <div className="signup-parent">
          <motion.button 
            type="submit"
            className="signup-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
          </div> 
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;
