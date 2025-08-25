import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
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

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // ✅ Show popup on successful submit
    setShowPopup(true);

    // Auto-close popup after 3 sec
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
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

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-[#0f172a] p-8 rounded-2xl text-center shadow-xl border border-cyan-500/30 max-w-sm"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center">
                  <FiCheckCircle className="text-5xl text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-300">
                Your account has been created successfully. Please login to
                continue.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignUp;
