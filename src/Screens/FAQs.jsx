import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Faqs from '../Components/Faqs';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";

const FAQs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "FAQs | KuberPays";

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
      <Faqs />
      <Footer />
    </>
  );
};

export default FAQs;
