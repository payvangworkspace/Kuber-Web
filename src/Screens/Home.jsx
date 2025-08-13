import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InnovationSection from '../Components/InnovationSection';
import BusinessSolutions from '../Components/BusinessSolutions';
import InfoCards from '../Components/InfoCards';
import BusinessStats from '../Components/BusinessStats';
import IndustriesSection from '../Components/IndustriesSection';
import ClientUnderstanding from '../Components/ClientUnderstanding';
import "../Styles/Loader.css"; // We'll create this CSS

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home | KuberPays";
    const timer = setTimeout(() => setLoading(false), 1000); // 1 sec loader
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
      <Navbar/>
      <HeroSection/>
      <InnovationSection/>
      <BusinessSolutions/>
      <InfoCards/>
      <BusinessStats/>
      <ClientUnderstanding/>
      <IndustriesSection/>
    </>
  );
};
