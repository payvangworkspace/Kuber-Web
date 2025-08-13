import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Styles/InnovationSection.css';

const InnovationSection = () => {
  const navigate = useNavigate();

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      img: 'online.jpg',
      title: 'Secure Payments',
      subtitle: 'PCI DSS Level 1 Compliant',
    },
    {
      img: 'flat.avif',
      title: 'Multi-Channel Support',
      subtitle: 'Online, In‑store & Mobile',
    },
    {
      img: 'carry.avif',
      title: 'Powerful Dashboard',
      subtitle: 'Real-Time Analytics',
    },
  ];

  const redirectContact = () => {
    navigate('/contact');
  };

  return (
    <section className="innovation-section">
      {/* Top Section */}
      <div className="top-content" data-aos="fade-up">
        <div className="headline">
          <h5>KUBERPAYS</h5>
          <h2>"Smarter Payments, Trusted by Thousands"</h2>
        </div>
        <p className="description">
          At KuberPays, we empower your business with secure, fast, and seamless
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
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <img
              src={`${card.img}`}
              alt={card.subtitle}
              className="innovation-card-image"
            />
            <div className="innovation-card-content">
              <div className="innovation-card-text">
                <h4 className="innovation-card-title">{card.title}</h4>
                <h3 className="innovation-card-subtitle">{card.subtitle}</h3>
              </div>
              <div className="innovation-card-hover-footer">
                <span onClick={redirectContact} style={{ cursor: 'pointer' }}>
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
        Join thousands of businesses using KuberPays to simplify payments.{' '}
        <Link to="/about" className="explore-link">
          Learn more about us
        </Link>
      </p>
    </section>
  );
};

export default InnovationSection;
