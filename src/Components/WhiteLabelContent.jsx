import React from "react";
import "../Styles/WhiteLabelContent.css";
import { Link } from "react-router-dom";

const WhiteLabelContent = () => {
  return (
    <section className="whitelabel-section">
      <div className="whitelabel-container">
        {/* Left Text Section */}
        <div className="whitelabel-text">
          <h1 className="title">Branding Customization</h1>
          <p>
            White-label technology is a ready-made licensed software developed by one
            company and rebranded by another to make it appear as their own. In today’s
            competitive environment, white-label solutions allow businesses to launch
            products quickly, gain recognition, and scale without heavy upfront
            investment.
          </p>

          <p>
            <strong>Kuber Pays</strong> offers white-label solutions that allow easy
            customization of checkout look-and-feel with your business logo and brand
            color. Focus on your customers while we handle the technology.
          </p>

          <h2>How does it work?</h2>
          <p>
            Our vendor platform is plug-and-play — you add your company’s name, logo,
            icons, URLs, emails, and branding elements to align it with your corporate
            identity. Once customized, you can sell and manage the product as your own,
            scaling faster and more securely.
          </p>

          <h3>Benefits of White-Label Solutions</h3>
          <ul className="benefits-list">
            <li><strong>Scale your offering:</strong> Add new services instantly.</li>
            <li><strong>Scale your costs:</strong> No IT setup or development overhead.</li>
            <li><strong>Boost revenue:</strong> Adopt a proven ROI-driven model.</li>
            <li><strong>Grow reputation:</strong> Be the go-to “local expert.”</li>
            <li><strong>Improve retention:</strong> More services = more loyal clients.</li>
            <li><strong>Focus on your brand:</strong> We handle fulfillment, you handle growth.</li>
          </ul>

          <p className="cta-text">
            White-label opportunities help you grow your brand, reputation, offerings,
            and revenue exponentially.
          </p>

          <div className="signup-container">
            <Link to="/contact" className="signup-button">Contact Us Now</Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="whitelabel-image">
          <img src={"./white-label.jpg"} alt="White Label Solutions" />
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelContent;
