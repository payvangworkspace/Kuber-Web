import React from 'react'
import "../Styles/ClientDetailInfo.css";

const ClientDetailInfo = () => {
  return (
    <div>
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
      
    </div>
  )
}

export default ClientDetailInfo
