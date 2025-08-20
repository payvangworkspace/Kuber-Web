import React from "react";
import "../Styles/InvoicingContent.css";

const InvoicingContent = () => {
  return (
    <section className="invoicing-section">
      <div className="invoicing-container">
        {/* Left Content */}
        <div className="invoicing-text">
          <h1 className="invoicing-title">
            GST Invoicing Software for All Businesses
          </h1>
          <p className="invoicing-intro">
            <strong>Kuber Pays</strong> provides simple and powerful invoicing software that 
            helps you create professional invoices, automate payment reminders, 
            and get paid faster online. Send and manage invoices from anywhere, anytime.
          </p>

          <div className="invoicing-features">
            <div className="feature">
              <h3>🚀 Workflow Automation</h3>
              <p>
                Automate recurring tasks like invoice generation and reminders. 
                <strong> Kuber Pays Invoice</strong> ensures you focus on growth while 
                automation takes care of routine work.
              </p>
            </div>
            <div className="feature">
              <h3>🤝 Easy Collaboration</h3>
              <p>
                Communicate with your clients in real-time. Share invoices, 
                discuss prices, and finalize deals securely in the 
                <strong> Client Portal of kuberpays.com</strong>.
              </p>
            </div>
          </div>

          <a href="/signup" className="signup-button">
            Sign Up Now
          </a>
        </div>

        {/* Right Image */}
        <div className="invoicing-image">
          <img src={"./invoicing.jpg"} alt="Invoicing Process" />
        </div>
      </div>
    </section>
  );
};

export default InvoicingContent;
