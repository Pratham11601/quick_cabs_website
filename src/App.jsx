// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Component imports
// import Navbar from "./components/Navbar/navbar";
// import Hero from "./pages/Hero/hero";
// import Contact from "./pages/Contact/contact";
// import ContactUs from "./pages/Contact/ContactUs";
// import AboutUs from "./pages/About/AboutUs";
// import Footer from "./components/Footer/footer";
// import Services from "./pages/Services/services";
// import MyAppointments from "./pages/Services/MyAppointments";
// import BookAppointment from "./pages/Services/BookAppointment";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <Router>
//     <div className="bg-white text-black overflow-x-hidden">
//     <Routes> 
//           <Route path="/contactus" element={<ContactUs />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/book-appointment" element={<BookAppointment />} />
//           <Route path="/my-appointments" element={<MyAppointments />} />
//           <Route path="/" element={(
//           <>
//             <Navbar />
//             <Hero />
//             <Contact />
//             {/* <ContactUs /> */}
//             <Footer />
//           </>
//            )} /> 
//       </Routes>
//     </div>
//     </Router>
//   );
// };

// export default App;

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
import Services from "./pages/Services/services";
import MyAppointments from "./pages/Services/MyAppointments";
import BookAppointment from "./pages/Services/BookAppointment";

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
          <Route path="/contactus" element={<ContactUs />} />

          {/* Route for AboutUs page */}
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Route for Services page */}
          <Route path="/services" element={<Services />} />

          {/* Route for BookAppointment page */}
          <Route path="/book-appointment" element={<BookAppointment />} />

          {/* Route for MyAppointments page */}
          <Route path="/my-appointments" element={<MyAppointments />} />

          {/* Default Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Contact />
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

