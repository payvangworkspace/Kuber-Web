import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import VirtualAccountContent from "../Components/VirtualAccountContent";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import Footer from "../Components/Footer";
import "../Styles/Loader.css";

const VirtualAccountSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Virtual Account | KuberPayss";

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
      <VirtualAccountContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default VirtualAccountSection;
