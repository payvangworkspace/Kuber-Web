import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import WhiteLabelContent from "../Components/WhiteLabelContent";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";

const WhiteLabelSection = () => {
  return (
    <>
      <Navbar />
      <WhiteLabelContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default WhiteLabelSection;
