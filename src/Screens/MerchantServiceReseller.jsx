import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import MerchantBanner from '../Components/MerchantBanner';
import UnicornResellerContent from '../Components/UnicornResellerContent';
import ResellerShowcase from '../Components/ResellerShowcase';
import ResellerPartnership from '../Components/ResellerPartnership';
import ResellerCommission from '../Components/ResellerCommission';
import ResellerPayouts from '../Components/ResellerPayouts';
import WebDeveloperPartnership from '../Components/WebDeveloperPartnership';
import MerchantSignupForm from '../Components/MerchantSignupForm';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";

const MerchantServiceReseller = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Merchant Service Reseller | KuberPays";

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
      <MerchantBanner />
      <ResellerShowcase />
      <ResellerCommission />
      <ResellerPartnership />
      <ResellerPayouts />
      <WebDeveloperPartnership />

      {/* 👇 Signup Form Section */}
      <div id="signup-form">
        <MerchantSignupForm />
      </div>

      <Footer />
    </div>
  );
};

export default MerchantServiceReseller;
