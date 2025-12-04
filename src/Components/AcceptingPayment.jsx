import React from "react";
import "../Styles/AcceptingPayment.css";
import { Link } from "react-router-dom";

const AcceptingPayment = () => {
  return (
    <section className="payment-section">
      <div className="payment-container">
        {/* Left Side Text */}
        <div className="payment-content">
          <h1 className="payment-title">
            The One-Stop Solution For Accepting Payments Online
          </h1>
          <p>
            Payment gateway is software that authorizes payments for online
            merchants and e-businesses. It performs the crucial role of
            processing and authorizing transactions between customers and
            merchants.
          </p>
          <p>
            Payment gateways encrypt sensitive information such as credit card
            numbers to guarantee secure transmission of payment details between
            the customer and merchant.
          </p>

          <ul className="payment-list">
            <li>
              Widest range of payment options: Debit & Credit Card, Net Banking,
              Mobile Wallet, UPI & EMI.
            </li>
            <li>

              
              A high-speed, <strong>Fast, Seamless checkout </strong>
              with zero redirect.
            </li>
            <li>Pay via QR Code, SMS, Web Link.</li>
            <li>
              Transparent and timely <strong>Kuber Pays Settlement</strong> and
              payouts.
            </li>
            <li>
              Comprehensive MIS Reporting and Insights with Live Dashboard.
            </li>
          </ul>

          <div className="signup-container">
            <Link to="https://dashboard.kuberpays.com/signup" className="signup-button">
              Sign Up Now
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="payment-image">
          <img src="/home/paymentgate.jpg" alt="Payment Gateway" />
        </div>
      </div>
    </section>
  );
};

export default AcceptingPayment;
