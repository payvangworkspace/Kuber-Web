import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import CompanyOverview from "../Components/CompanyOverview";
import Footer from "../Components/Footer";
import "../Styles/Loader.css";

const Company = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    document.title = "Company | KuberPays";

    if (navbarRef.current) {
      navbarRef.current.style.width = "100vw";
    }

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
      <Navbar ref={navbarRef} />
      <CompanyOverview />
      <Footer />
    </div>
  );
};

export default Company;
