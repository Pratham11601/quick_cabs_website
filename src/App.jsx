
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
import Home from "./pages/Home/Home";  
import Book from "./pages/CabBook/Book"; 
import Offbeat from "./pages/Offbeat/Offbeat";
import Travel from "./pages/Travel/Travel";
import DestinationDetails from "./pages/Travel/DestinationDetails";
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
        <Navbar />

        <Routes>
         
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/book-cab" element={<Book />} />
          <Route path="/offbeat" element={<Offbeat />} />
          <Route path="/travel-guides" element={<Travel />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/web-stories" element={<WebStories />} />
          <Route path="/terms" element={<TermsConditions />} /> 
          <Route path="/privacy" element={<PrivacyPolicy />} />


         {/* Default Route */}
          <Route
            path="/"
            element={
              <>
                <Home /> 
                            
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

