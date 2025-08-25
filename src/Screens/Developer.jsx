import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import IntegrationSection from "../Components/IntegrationSection";
import Footer from "../Components/Footer";
import BusinessCreateAccount from "../Components/BusinessCreateAccount";
import "../Styles/Loader.css";
import MerchantIntegration from "../Components/MerchantIntegration";

export const Developer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Developer | KuberPays";

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
      
      <IntegrationSection />
   
      <BusinessCreateAccount />
      <Footer />
    </>
  );
};
