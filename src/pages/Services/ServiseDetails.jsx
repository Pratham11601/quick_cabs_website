import React from "react";
import { useLocation, Link } from "react-router-dom";

const ServiceDetail = () => {
  const location = useLocation();
  const service = location.state?.service;

  // Handle case where service is not passed
  if (!service) {
    return (
      <div className="text-center p-6">
        <p>Service details not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">{service.title}</h1>
      </div>
      <main className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <p className="text-lg">{service.description}</p>
            <Link to="/" className="block mt-4 text-blue-600 hover:underline">
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
