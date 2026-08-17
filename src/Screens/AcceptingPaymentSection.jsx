import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import AcceptingPayment from "../Components/AcceptingPayment";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import Footer from "../Components/Footer";
import "../Styles/Loader.css";

const AcceptingPaymentSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Payment Gateway| KuberPays";

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
      <AcceptingPayment />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default AcceptingPaymentSection;
