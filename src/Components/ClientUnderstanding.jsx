import React from "react";
import { useNavigate } from "react-router-dom";

const ClientUnderstanding = () => {
  const navigate=useNavigate();
const redirectToAbout=()=>{
navigate("/about")
}


  
  return (
    <section className="client-section">
      <div className="client-container">
        <div className="client-text">
            <div className="client-text-parent">
          <h2 className="client-title">Understanding Our Clients</h2>
          </div>
          <p className="client-description">
            We recognize the unique needs of our clients, delivering innovative payment solutions that streamline complex transactions.
            Our commitment to excellence ensures we remain at the forefront of the ever-evolving payments landscape.
            By staying ahead, we empower our clients with a competitive advantage in their industries.
          </p>
          <p className="client-description">
            Backed by cutting-edge security and seamless technology, we provide a robust platform that enhances your business operations and ensures maximum efficiency.
          </p>
          <div className="client-btn">
          <button className="client-button" onClick={redirectToAbout}>Learn More</button>
          </div>
        </div>
        <div className="client-image">
          <img src="/home-facility-bg.jpg" alt="Client engaging with technology" />
        </div>
      </div>
    </section>
  );
};

export default ClientUnderstanding;

// CSS (Separate file: ClientUnderstanding.css)
const styles = `
.client-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  transition: all 0.3s ease-in-out;
  height: 70vh;
}

.client-text-parent{

text-align:center;
margin-bottom:15px


}

.client-container {
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.client-text {
  flex: 1;
  text-align: left;
}

.client-title {
  font-size: 2.5rem;          /* updated to match info-card h3 */
  font-weight: 600;          /* medium-bold like info-card titles */
  color: #333;
  margin-bottom: 1.2rem;
  text-transform: none;      /* remove uppercase for modern look */
  line-height: 1.3;
}

.client-description {
  font-size: 1rem;           /* match info-card paragraph */
  color: #555;               /* same gray tone */
  line-height: 1.6;          /* smoother spacing */
  margin-bottom: 1rem;
  margin-top:28px
  
}
.client-btn{

text-align:center;



}

.client-button {
  background: linear-gradient(135deg, #e63946, #d62828); /* match info-card accent */
  color: white;
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top:20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
}

.client-button:hover {
  background: linear-gradient(135deg, #d62828, #b71c1c);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(230, 57, 70, 0.4);
}

.client-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 16px;        /* slightly more rounded */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);  /* match info-card shadow */
  transition: transform 0.3s ease-in-out;
}

.client-image img:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 900px) {
  .client-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .client-text {
    text-align: center;
  }

  .client-button {
    display: inline-block;
  }
}

`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
