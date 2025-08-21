import React from "react";
import "../Styles/InvoicingContent.css";
import { Workflow, Users } from "lucide-react"; // Professional icons

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
            <strong>Kuber Pays</strong> provides powerful invoicing software that
            helps you create professional invoices, automate payment reminders,
            and get paid faster online. Manage everything from anywhere, anytime.
          </p>

          <div className="invoicing-features">
            <div className="feature">
              <div className="feature-icon-c">
                <Workflow size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Workflow Automation</h3>
                <p>
                  Automate recurring tasks like invoice generation and reminders. 
                  <strong> Kuber Pays Invoice</strong> lets you focus on growth while automation 
                  handles the routine.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-c">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Seamless Collaboration</h3>
                <p>
                  Communicate with your clients in real-time. Share invoices,
                  discuss pricing, and finalize deals securely inside the
                  <strong> Client Portal</strong>.
                </p>
              </div>
            </div>
          </div>

          <a href="/signup" className="signup-button">
            Get Started
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
