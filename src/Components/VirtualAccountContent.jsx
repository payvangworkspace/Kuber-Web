import React from "react";
import "../Styles/VirtualAccountContent.css";
import { Link } from "react-router-dom";

const VirtualAccountContent = () => {
  return (
    <div className="virtual-account-section">
      {/* Title */}
      <h1 className="virtual-account-title">
        Smarter Transaction Banking with Virtual Accounts
      </h1>

      {/* Content */}
      <div className="virtual-account-content">
        <p>
          Corporates today need better control and visibility over their cash{" "}
          <strong>INFLOW</strong> and <strong>OUTFLOW</strong>—and liquidity
          positions. This has led to the adoption of smarter transaction banking
          alternatives like virtual accounts.
        </p>

        <p>
          Virtual Accounts allow businesses to make and receive payments via{" "}
          <strong>NEFT, RTGS, IMPS</strong> on behalf of one physical account.
        </p>

        <p>
          They also provide the ability to{" "}
          <strong>reconcile payments in real time</strong>.{" "}
          <strong>Kuber Pays</strong> offers on-demand Virtual Accounts to its
          corporate clients for seamless transactions.
        </p>

        {/* Inline image */}
        <div className="virtual-account-images">
          <img src="./about-us.jpg" alt="Virtual Account Process" />
        </div>

        {/* Benefits List */}
        <h3 className="benefits-title">Benefits of Virtual Accounts</h3>
        <ul className="virtual-account-benefits">
          <li>
            Ideal for corporates with multiple banking relationships and complex
            accounting structures.
          </li>
          <li>
            Simplifies cash and liquidity management, supports inter-company
            loans, and improves STP (straight-through processing) in
            reconciliation.
          </li>
          <li>
            A <strong>Virtual Account Management (VAM)</strong> platform enables
            creation, management, and monitoring of virtual accounts effectively.
          </li>
          <li>
            We provide a self-servicing <strong>VAM engine</strong>, a unified
            dashboard view, advanced reporting modules, and integrated payments
            management.
          </li>
          <li>
            Helps corporates gain clear insights while banks manage client
            relationships efficiently.
          </li>
        </ul>
      </div>

      {/* Main Illustration */}
      <div className="virtual-account-image full-width">
        <img src="./Virtual-Accounts.jpg" alt="VAM Dashboard" />
      </div>

      {/* Signup Button */}
      <div className="signup-container">
        <Link to="https://dashboard.kuberpays.com/signup" className="signup-button">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default VirtualAccountContent;
