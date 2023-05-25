import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import HighlightComponent from "../Components/HighlightComponent/HighlightComponent";
import TeamComponent from "../Components/TeamComponent/TeamComponent";
import CounterComponent from "../Components/CounterComponent/CounterComponent";
import ReviewComponent from "../Components/ReviewComponent/ReviewComponent";
import FAQComponwent from "../Components/FAQComponent/FAQComponwent";
import PricingPlan from "../Components/PricingPlan/PricingPlan";
import BlogComponent from "../Components/BlogComponent/BlogComponent";
import ContactComponent from "../Components/ContactComponent/ContactComponent";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutComponent />
      <ServiceComponent/>
      <HighlightComponent/>
      <TeamComponent/>
      <CounterComponent/>
      <ReviewComponent/>
      <FAQComponwent/>
      <PricingPlan/>
      <BlogComponent/>
      <ContactComponent/>

      <Footer />
    </div>
  );
};

export default Home;
