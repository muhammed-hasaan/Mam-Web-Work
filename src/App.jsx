import { useState, useEffect } from "react";

import Navbar from "./Components/UniversalComponents/Navbar/Navbar";
import Hero from "./Components/HomePageComponents/HeroSection/Hero";
import Cards from "./Components/HomePageComponents/Cards/Cards";
import Form from "./Components/HomePageComponents/Form/Form";
import JoinCommunity from "./Components/HomePageComponents/JoinCommunity/JoinCommunity";
import Testimonials from "./Components/HomePageComponents/Testimonials/Testimonials";
import OperationalExcellance from "./Components/HomePageComponents/OperationalExcellence/OperationalExcellance";
import Guranteed from "./Components/HomePageComponents/Guaranteed/Guranteed";
import Insurance from "./Components/HomePageComponents/RelatedInsurance/Insurance";
import Footer from "./Components/UniversalComponents/Footer/Footer";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // const LayoutOne = () => {

  return (
    <>
      <Navbar />
      <br />
      <Hero />
      <br />
      <Cards />
      <br />
      <Form />
      <br />
      <Guranteed />
      <br />
      <OperationalExcellance />
      <br />
      <Insurance />
      <br />
      <Testimonials />
      <br />
      <JoinCommunity />
      <br />
      <Footer />
    </>
  );
};

export default App;
