import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    email: "",
    password: "",
    businessName: "",
    panSsn: "",
    gstVat: "",
    website: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="signup-bg">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-grid">
            {/* Left column */}
            <div className="signup-col">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name*"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Right column */}
            <div className="signup-col">
              <div className="input-group">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name*"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="panSsn"
                  placeholder="PAN / SSN (8-15 Characters)*"
                  minLength={8}
                  maxLength={15}
                  value={formData.panSsn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="gstVat"
                  placeholder="GST / VAT (10-20 Characters)*"
                  minLength={10}
                  maxLength={20}
                  value={formData.gstVat}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="url"
                  name="website"
                  placeholder="Website (Optional)"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password*"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
