import React from "react";
import Navbar from "./Navbar";
import AcceptingPayment from "./AcceptingPayment";
import BusinessStats from "./BusinessStats";
import ClientUnderstanding from "./ClientUnderstanding";
import IndustriesSection from "./IndustriesSection";
import Footer from "./Footer";

const AcceptingPaymentSection = () => {
  return (
    <>
      <Navbar />
      <AcceptingPayment />
      <BusinessStats />
      <ClientUnderstanding />
      <IndustriesSection />
      <Footer />
    </>
  );
};

export default AcceptingPaymentSection;
