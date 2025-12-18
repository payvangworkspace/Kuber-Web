import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import FeaturesSection from '../Components/FeaturesSection';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";
import BusinessCreateAccount from '../Components/BusinessCreateAccount';

const SolutionAndFeatures = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Solutions & Features | KuberPayss";

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
      <FeaturesSection />
      <BusinessCreateAccount/>
      <Footer />
    </>
  );
};

export default SolutionAndFeatures;
