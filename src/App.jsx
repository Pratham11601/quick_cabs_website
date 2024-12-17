import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/navbar";
import Hero from "./pages/Hero/hero";
import Contact from "./pages/Contact/contact";
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
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
