import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";

const PrivacyPolicySection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Privacy Policy | KuberPayss";

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
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPolicySection;
  