import React from "react";
import Hero from "../Home/Hero";
import Features from "../Home/Features";
import Services from "../Home/Services";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      <Services />
    </div>
  );
};

export default Home;
