import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InnovationSection from '../Components/InnovationSection';
import BusinessSolutions from '../Components/BusinessSolutions';
import InfoCards from '../Components/InfoCards';
import BusinessStats from '../Components/BusinessStats';
import IndustriesSection from '../Components/IndustriesSection';
import ClientUnderstanding from '../Components/ClientUnderstanding';
import "../Styles/Loader.css";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    document.title = "Home | KuberPays";

    if (navbarRef.current) {
      navbarRef.current.style.width = "100vw";
      console.log("Hellow")
    }

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className='loader-text'>Please Wait...</div>
      </div>
    );
  }

  return (
    <>
      <Navbar ref={navbarRef} />
      <HeroSection />
      <InnovationSection />
      <BusinessSolutions />
      <InfoCards />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
    </>
  );
};
