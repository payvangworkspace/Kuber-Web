import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import "../Styles/SignIn.css";
import Sign from '../Components/Sign';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";

export const SignIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Sign In | KuberPayss";

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
    <div className="sign-outer">
      <Navbar />
      <Sign />
      <Footer />
    </div>
  );
};
