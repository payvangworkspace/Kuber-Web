import React from "react";
import Navbar from "./Navbar";
import VirtualAccountContent from "./VirtualAccountContent";
import BusinessStats from "./BusinessStats";
import ClientUnderstanding from "./ClientUnderstanding";
import IndustriesSection from "./IndustriesSection";
import Footer from "./Footer";

const VirtualAccountSection = () => {
  return (
    <>
      <Navbar />
      <VirtualAccountContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default VirtualAccountSection;
