import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/navbar";
import Hero from "./pages/Hero/hero";
import Contact from "./pages/Contact/contact";
import ContactUs from "./pages/Contact/ContactUs";
import AboutUs from "./pages/About/AboutUs";
import Footer from "./components/Footer/footer";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
    <div className="bg-white text-black overflow-x-hidden">
    <Routes> 
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={(
          <>
            <Navbar />
            <Hero />
            <Contact />
            {/* <ContactUs /> */}
            <Footer />
          </>
           )} /> 
      </Routes>
    </div>
    </Router>
  );
};

export default App;
