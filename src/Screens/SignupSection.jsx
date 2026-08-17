import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import SignUp from './SignUp';
import Footer from '../Components/Footer';
import "../Styles/Loader.css";

const SignupSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Sign Up | KuberPays";

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
      <SignUp />
      <Footer />
    </>
  );
};

export default SignupSection;
