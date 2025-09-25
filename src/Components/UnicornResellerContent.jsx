import React, { useState } from "react";
import { 
  FaRocket, 
  FaMoneyBillWave, 
  FaStar, 
  FaGem, 
  FaLaptopCode, 
  FaCheckCircle 
} from "react-icons/fa";
import "../styles/UnicornResellerContent.css";

const features = [
  "98% Merchant Account Approval Rate",
  "Quick, Seamless Integrations",
  "Flexible Payment Solutions",
  "Multi-Currency Payment Processing",
  "Supports 196 Countries",
  "Settled Into Your Bank Account",
  "Exceptional Customer Service",
];

const UnicornResellerContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    alert("Application Submitted!");
  };

  return (
    <div className="unicorn-hero gradient-bg">
      <div className="unicorn-content-container">
        <h2 className="unicorn-title unic">Merchant Services Reseller</h2>

        {/* Sections */}
        <section className="unicorn-section card fade-in">
          <h3 className="section-heading">
            <FaRocket className="icon" /> Becoming an Independent Sales Agent is Easy
          </h3>
          <p className="section-text">
            Learn how you can become a merchant services reseller and generate a
            monthly income just by referring new merchants or your existing
            clients to our complete payment processing solution.
          </p>
        </section>

        <section className="unicorn-section card fade-in">
          <h3 className="section-heading">
            <FaMoneyBillWave className="icon" /> Refer Clients and Receive Monthly Commission!
          </h3>
          <p className="section-text">
            Become a merchant services reseller for Unicorn Payment and receive a
            monthly revenue share on credit card payments for the merchant
            accounts you refer.
          </p>
        </section>

        <section className="unicorn-section card unicorn-features fade-in">
          <h3 className="section-heading">
            <FaStar className="icon" /> Features You'll Enjoy
          </h3>
          <ul className="features-list">
            {features.map((feat, idx) => (
              <li key={idx} className="feature-item">
                <FaCheckCircle className="check-icon" /> {feat}
              </li>
            ))}
          </ul>
        </section>

        <section className="unicorn-section card fade-in">
          <h3 className="section-heading">
            <FaGem className="icon" /> Reliable Payouts
          </h3>
          <p className="section-text">
            Our resellers receive percentage-based residuals from the complete
            range of credit card processing services. As long as your clients are
            processing payments, you’re earning commissions!
          </p>
        </section>

        <section className="unicorn-section card fade-in">
          <h3 className="section-heading">
            <FaLaptopCode className="icon" /> Web Developer Partnership
          </h3>
          <p className="section-text">
            Build powerful e-commerce websites and offer your clients seamless,
            secure global payment solutions. With Unicorn Payment, your clients
            grow — and so do your commissions.
          </p>
          <p className="section-text">
            Our services include fraud protection, chargeback mitigation, and
            mobile-friendly checkout to give your clients the best possible
            experience.
          </p>
        </section>

        {/* Signup Form */}
        <section className="unicorn-section unicorn-form-section fade-in">
          <h3 className="section-heading">
            <FaRocket className="icon" /> Sign Up Today
          </h3>
          <form className="unicorn-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
              <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-row">
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
            <button type="submit" className="unicorn-form-btn">
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UnicornResellerContent;
