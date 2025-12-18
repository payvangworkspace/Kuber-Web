import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import InvoicingContent from "../Components/InvoicingContent";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import Footer from "../Components/Footer";
import "../Styles/Loader.css";

const InvoiceSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Invoice | KuberPayss";

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
      <InvoicingContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default InvoiceSection;
