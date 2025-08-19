import React from "react";
import Navbar from "./Navbar";
import InvoicingContent from "./InvoicingContent";
import BusinessStats from "./BusinessStats";
import ClientUnderstanding from "./ClientUnderstanding";
import IndustriesSection from "./IndustriesSection";
import Footer from "./Footer";

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