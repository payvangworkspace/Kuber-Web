import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import TermsAndConditions from '../Components/TermsAndConditions';
import Footer from '../Components/Footer';
import BusinessCreateAccount from '../Components/BusinessCreateAccount';
import "../Styles/Loader.css";

export const TermsandConditions = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Terms & Conditions | Kubers";

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
    <div>
      <Navbar />
      <TermsAndConditions />
      <BusinessCreateAccount />
      <Footer />
    </div>
  );
};
