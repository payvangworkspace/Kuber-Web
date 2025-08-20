import React, { useEffect, useRef, useState } from "react";
import {
  FaCogs,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "../Styles/FeatureSection.css";

const features = [
  {
    icon: <FaCogs />,
    title: "Seamless Automation",
    description:
      "Streamline your workflows with advanced automation tools designed to save time and reduce manual effort.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration Made Easy",
    description:
      "Empower your team with real-time communication, shared dashboards, and better decision-making tools.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise-Grade Security",
    description:
      "Protect your business data with multi-layer encryption, access controls, and compliance standards.",
  },
  {
    icon: <FaChartLine />,
    title: "Data-Driven Insights",
    description:
      "Gain powerful insights with interactive reports and AI-powered analytics for smarter strategies.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Developer Friendly",
    description:
      "Clean APIs, SDKs, and integrations for rapid customization and scalability.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimized",
    description:
      "Access your business insights on the go with our responsive mobile-first design.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Powered",
    description:
      "Secure cloud infrastructure ensures uptime, scalability, and performance.",
  },
  {
    icon: <FaHandshake />,
    title: "Dedicated Support",
    description:
      "Our team is available 24/7 to help you succeed at every step of your journey.",
  },
];

const FeatureSection = () => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setDirection(-1);
        } else if (scrollLeft <= 10) {
          setDirection(1);
        }

        sliderRef.current.scrollBy({ left: 250 * direction, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="feature-section">
      <div className="feature-header">
        <h2>
          Why Choose <span>Kuber ERP</span>?
        </h2>
        <p>
          We always strive to understand our customers' expectations and exceed them. By listening, innovating, and improving, we ensure seamless experiences and reliable solutions. Your satisfaction is our priority.
        </p>
      </div>

      <div className="feature-slider-container">
       

        <div className="feature-slider" ref={sliderRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-p">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        
      </div>
      <div className="button-placer">
       {/* Left Button */}
       <div className="left-right">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        {/* Right Button */}
        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
