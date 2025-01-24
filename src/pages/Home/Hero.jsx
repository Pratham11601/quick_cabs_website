import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20 px-5 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg md:text-xl">
        Discover amazing experiences and create unforgettable memories.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-500">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
