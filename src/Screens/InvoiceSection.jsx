import React from "react";
import Navbar from "../Components/Navbar";
import InvoicingContent from "../Components/InvoicingContent";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import Footer from "../Components/Footer";

const InvoiceSection = () => {
  return (
    <>
      <Navbar />
      <InvoicingContent />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default InvoiceSection;