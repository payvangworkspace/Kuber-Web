import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/InnovationSection.css';

const InnovationSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      id: "secure-payments",
      img: "/card/online.jpg",
      title: "Secure Payments",
      subtitle: "PCI DSS Level 1 Compliant",
      description:
        "We ensure top-grade encryption and PCI DSS Level 1 compliance to keep your transactions safe and secure.",
    },
    {
      id: "multi-channel",
      img: "/card/flat.avif",
      title: "Multi-Channel Support",
      subtitle: "Online, In-store & Mobile",
      description:
        "Accept payments seamlessly across online stores, mobile apps, and in-store POS terminals.",
    },
    {
      id: "dashboard",
      img: "/card/carry.avif",
      title: "Powerful Dashboard",
      subtitle: "Real-Time Analytics",
      description:
        "Track and manage payments with detailed analytics, reports, and real-time insights.",
    },
  ];

  return (
    <section className="innovation-section">
      {/* Top Section */}
      <div className="top-content" data-aos="fade-up">
        <div className="headline">
          <h5>KUBER PAYS</h5>
          <h2>"Smarter Payments, Trusted by Thousands"</h2>
        </div>
        <p className="description">
          At Kuber Pays, we empower your business with secure, fast, and seamless
          payment solutions. Whether you're scaling up or just starting out,
          our platform is designed to support your growth with robust APIs,
          insightful analytics, and unmatched reliability.
        </p>
      </div>

      {/* Cards Section */}
      <div className="innovation-card-section">
        {cards.map((card, idx) => (
          <div
            className="innovation-card"
            key={card.id}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <img
              src={card.img}
              alt={card.subtitle}
              className="innovation-card-image"
            />
            <div className="innovation-card-content">
              <div className="innovation-card-text">
                <h4 className="innovation-card-title">{card.title}</h4>
                <h3 className="innovation-card-subtitle">{card.subtitle}</h3>
              </div>

              <div className="innovation-card-hover-footer">
                <span
                  onClick={() => navigate(`/card/${card.id}/`)}
                  style={{ cursor: "pointer" }}
                >
                  Learn More
                </span>
                <FaArrowRight className="hover-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="footer-text" data-aos="fade-up" data-aos-delay="600">
        Join thousands of businesses using Kuber Pays to simplify payments.{" "}
        <Link to="/company" className="explore-link">
          Learn more about us
        </Link>
      </p>
    </section>
  );
};

export default InnovationSection;
