import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaStoreAlt,
  FaChartLine,
} from "react-icons/fa";
import "../Styles/CardDetail.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import  Banner  from "./Banner";

const cards = [
  {
    id: "secure-payments",
    title: "Secure Payments",
    subtitle: "PCI DSS Level 1 Compliant",
    description:
      "We ensure top-grade encryption and PCI DSS Level 1 compliance to keep your transactions safe and secure.",
    longDescription:
      "Our payment gateway uses advanced fraud detection, tokenization, and end-to-end encryption. Trusted by enterprises and startups alike, KuberPays ensures zero compromise on your customers' sensitive data.",
    features: [
      "End-to-end encryption",
      "PCI DSS Level 1 certified",
      "Fraud detection & prevention",
      "Tokenized card storage",
    ],
    icon: <FaShieldAlt className="card-feature-icon" />,
    img: "online.jpg",
  },
  {
    id: "multi-channel",
    title: "Multi-Channel Support",
    subtitle: "Online, In-store & Mobile",
    description:
      "Accept payments seamlessly across online stores, mobile apps, and in-store POS terminals.",
    longDescription:
      "KuberPays enables omnichannel payments, so your business never misses a customer. Whether online, offline, or hybrid, manage all transactions under one platform with real-time sync.",
    features: [
      "Supports web, mobile & POS",
      "Unified dashboard for all channels",
      "QR code payments",
      "Seamless customer experience",
    ],
    icon: <FaStoreAlt className="card-feature-icon" />,
    img: "flat.avif",
  },
  {
    id: "dashboard",
    title: "Powerful Dashboard",
    subtitle: "Real-Time Analytics",
    description:
      "Track and manage payments with detailed analytics, reports, and real-time insights.",
    longDescription:
      "With our intelligent dashboard, gain instant access to transaction reports, settlement history, and customer insights. Make data-driven decisions to boost sales and improve operations.",
    features: [
      "Real-time analytics",
      "Customizable reports",
      "Settlement tracking",
      "Role-based access controls",
    ],
    icon: <FaChartLine className="card-feature-icon" />,
    img: "carry.avif",
  },
];

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = cards.find((c) => c.id === id);

  if (!card) return <h2 style={{ padding: "20px" }}>Card not found</h2>;

  return (
    <>
      <Navbar />
      <Banner/>
      <div className="card-detail-container">
        <div className="card-detail">
          <img
            src={`${import.meta.env.BASE_URL}${card.img}`}
            alt={card.title}
            className="card-detail-img"
          />
          <div className="card-detail-content">
            {/* Top section with card-specific icon */}
            <div className="card-detail-header">
              {card.icon}
              <div>
                <h2 className="card-detail-title">{card.title}</h2>
                <h4 className="card-detail-subtitle">{card.subtitle}</h4>
              </div>
            </div>

            <p className="card-detail-description">{card.description}</p>
            <p className="card-detail-long">{card.longDescription}</p>

            {/* Features Section with check icons */}
            <ul className="card-detail-features">
              {card.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="feature-check-icon" /> {feature}
                </li>
              ))}
            </ul>

            <button className="card-detail-btn" onClick={() => navigate(-1)}>
              ⬅ Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardDetail;
