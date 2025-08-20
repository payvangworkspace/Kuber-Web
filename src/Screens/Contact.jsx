// src/Pages/Contact.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import "../Styles/Loader.css";

export const Contact = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    document.title = "Contact | KuberPays";

    if (navbarRef.current) {
      navbarRef.current.style.width = "100vw";
      console.log("Navbar adjusted for Contact page");
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
    <>
      <Navbar ref={navbarRef} />
      <ContactUs />
      <Footer />
    </>
  );
};
