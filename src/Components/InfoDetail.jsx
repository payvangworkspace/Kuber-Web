import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import { cardData } from "./InfoCards"; // reuse data
import "../Styles/CardDetail.css";

const InfoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = cardData.find((c) => c.id === id);

  if (!card) return <h2 style={{ padding: "20px" }}>Card not found</h2>;

  return (
    <>
      <Navbar />
      <Banner title={card.title} subtitle={card.subtitle || "Feature Details"} />
      <div className="card-detail-container">
        <div className="card-detail">
          <img
            src={card.image} 
            alt={card.title}
            className="card-detail-img"
          />
          <div className="card-detail-content">
            <div className="card-detail-header">
              {card.icon}
              <div>
                <h2 className="card-detail-title">{card.title}</h2>
              </div>
            </div>

            <p className="card-detail-description">{card.description}</p>
            <p className="card-detail-long">{card.longDescription}</p>

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

export default InfoDetail;
