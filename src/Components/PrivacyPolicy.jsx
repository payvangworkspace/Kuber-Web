import React from "react";
import "../Styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>
        <div className="privacy-content">
          <p>
            At <strong>KuberPays</strong>, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email, phone number, 
            financial details, and usage data when you interact with our platform.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to provide services, process transactions, enhance security, 
            and improve your overall user experience.
          </p>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell your data. Information may be shared with trusted partners 
            only for payment processing, compliance, or service improvements.
          </p>

          <h2>4. Security Measures</h2>
          <p>
            We implement strict security protocols, including encryption, firewalls, and 
            regular monitoring to protect your information.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our platform uses cookies to personalize your experience and analyze site traffic. 
            You can disable cookies via your browser settings.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. 
            Please contact our support team to exercise these rights.
          </p>

          <h2>7. Updates to this Policy</h2>
          <p>
            KuberPays may update this Privacy Policy from time to time. 
            Changes will be posted on this page with the updated date.
          </p>

          <p className="last-note">
            If you have any questions regarding this Privacy Policy, please contact us at 
            <strong> support@kuberpays.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
