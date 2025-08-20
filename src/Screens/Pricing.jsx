import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PricingSection from '../Components/PricingSection';
import "../Styles/Loader.css";

export default function Pricing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Pricing | KuberPays";

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
      <PricingSection />
      <Footer />
    </>
  );
}
