import React from "react";

const Features = () => {
  return (
    <div className="py-16 px-5 bg-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">High-Quality Services</h3>
          <p>We provide the best services tailored to your needs.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
          <p>Enjoy competitive pricing without compromising on quality.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
          <p>Your happiness is our priority, every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
