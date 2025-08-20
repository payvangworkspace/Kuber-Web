import React from "react";
import Navbar from "../Components/Navbar";
import AcceptingPayment from "../Components/AcceptingPayment";
import BusinessStats from "../Components/BusinessStats";
import ClientUnderstanding from "../Components/ClientUnderstanding";
import IndustriesSection from "../Components/IndustriesSection";
import Footer from "../Components/Footer";

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
