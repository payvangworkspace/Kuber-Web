import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import NFCSection from '../Components/NFCSection';
import Footer from '../Components/Footer';
import OrchestrationLayer from "../Components/OrchestrationLayer";
import FlowKuber from '../Components/FlowKuber';
import FlowComparison from '../Components/FlowComparison';
import "../Styles/Loader.css";

const NFCScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "NFC Screen | KuberPayss";

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
      <NFCSection />
      {/* <OrchestrationLayer /> */}
      {/* <FlowKuber /> */}
      <FlowComparison />
      <Footer />
    </div>
  );
};

export default NFCScreen;
