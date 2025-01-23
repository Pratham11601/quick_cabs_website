// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home"; // Import Home component
// import Book from "./pages/CabBook/Book"; 
// import "./App.css";
// import Offbeat from "./pages/Offbeat/Offbeat";
// import Travel from "./pages/Travel/Travel";
// import WebStories from "./pages/Webstories/WebStories";

// function App() {
//   return (
//     <Router>
//       {/* Include the Navbar */}
//       <Navbar />
//       {/* <Home /> */}

//       {/* Define Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home Route */}
//         <Route path="/book-cab" element={<Book />} />
//         <Route path="/offbeat" element={<Offbeat />} />
//         <Route path="/travel-guides" element={<Travel />} />
//         <Route path="/web-stories" element={<WebStories />} />
        
//         {/* Add more routes here for other pages */}
//       </Routes>

//       {/* Include the Footer */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"; // Import Home component
import Book from "./pages/CabBook/Book"; 
import "./App.css";
import Offbeat from "./pages/Offbeat/Offbeat";
import Travel from "./pages/Travel/Travel";
import WebStories from "./pages/Webstories/WebStories";

function App() {
  return (
    
<Router>
<div className="bg-white text-black overflow-x-hidden">
      {/* Include the Navbar */}
      <Navbar />
      {/* <Home /> */}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/book-cab" element={<Book />} />
        <Route path="/offbeat" element={<Offbeat />} />
        <Route path="/travel-guides" element={<Travel />} />
        <Route path="/web-stories" element={<WebStories />} />
        
        {/* Add more routes here for other pages */}
      </Routes>

      {/* Include the Footer */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;

