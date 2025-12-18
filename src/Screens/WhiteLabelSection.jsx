import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhiteLabelContent from "../Components/WhiteLabelContent";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import "../Styles/Loader.css";

const WhiteLabelSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "White Label | KuberPayss";

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-text">Please Wait...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <WhiteLabelContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default WhiteLabelSection;
