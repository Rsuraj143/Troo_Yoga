import React from "react";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PricingComponent from "../../Components/PricingPlan/PricingComponent";
import PricingPlan from "../../Components/PricingPlan/PricingPlan";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import useDocumentTitle from "../../PageTitle";

const PricingCard = () => {
  useDocumentTitle("TRoo Yoga | Pricing Card")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <PricingComponent />
      <PricingPlan />
      <ContactComponent />

      <Footer />
    </div>
  );
};

export default PricingCard;
