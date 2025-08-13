import "../Styles/HeroSection.css";
// import CNImage from "../assets/CN.png"; // adjust path if needed

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Powering Payments in <span>Canadian</span>
        </h1>
        <p className="hero-subtitle">
          From start-ups to large enterprises and everything in between, we’ve got the
          end-to-end commerce solutions, data-driven insights, and expert local support
          businesses of all sizes count on.
        </p>
        <div className="solution-btn">
        <a href="/solutions" className="hero-button">Explore solutions</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-wrapper">
          <img
            className="hero-main-image float-in"
            src="./CN.png"
            alt="Ecommerce Business Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
