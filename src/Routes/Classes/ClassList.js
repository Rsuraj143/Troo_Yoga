import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Footer from "../../Components/Footer/Footer";
import ServiceListComponent from "../../Components/ServiceComponent/ServiceListComponent";
import HighlightComponent from "../../Components/HighlightComponent/HighlightComponent";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import CounterComponent from "../../Components/CounterComponent/CounterComponent";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import PricingPlan from "../../Components/PricingPlan/PricingPlan";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import useDocumentTitle from "../../PageTitle";

const ClassList = () => {
  useDocumentTitle("TRoo Yoga | Class Lists")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <ServiceListComponent />
      <HighlightComponent />
      <TeamComponent />
      <CounterComponent />
      <ReviewComponent />
      <PricingPlan />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default ClassList;
