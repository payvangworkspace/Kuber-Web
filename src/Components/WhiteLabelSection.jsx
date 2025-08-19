import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhiteLabelContent from "./WhiteLabelContent";
import BusinessStats from "./BusinessStats";
import ClientUnderstanding from "./ClientUnderstanding";
import IndustriesSection from "./IndustriesSection";

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
