
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/navbar";

import AboutUs from "./pages/About/AboutUs";
import Footer from "./components/Footer/footer";

import TermsConditions from './pages/TermsConditions'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import Home from "./pages/Home/Home"; // Import Home component
import Book from "./pages/CabBook/Book"; 
import Offbeat from "./pages/Offbeat/Offbeat";
import Travel from "./pages/Travel/Travel";
import WebStories from "./pages/Webstories/WebStories";

 

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
        {/* Navbar is displayed on all pages */}
        <Navbar />

        <Routes>
          {/* Route for ContactUs page */}
        

          {/* Route for AboutUs page */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/book-cab" element={<Book />} />
        <Route path="/offbeat" element={<Offbeat />} />
        <Route path="/travel-guides" element={<Travel />} />
        <Route path="/web-stories" element={<WebStories />} />


           
             <Route path="/terms" element={<TermsConditions />} /> 
             <Route path="/privacy" element={<PrivacyPolicy />} />




          {/* Default Route */}
          <Route
            path="/"
            element={
              <>
                <Home /> 
                {/* Footer is displayed on all pages */}
                
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

