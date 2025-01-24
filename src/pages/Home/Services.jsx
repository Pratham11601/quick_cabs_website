import React from "react";

const Services = () => {
  const services = [
    {
      title: "Local Car Rentals",
      description: "Convenient and affordable car rentals for local travel needs.",
      icon: "🚗",
    },
    {
      title: "Outstation Taxi",
      description: "Reliable taxi services for outstation travel.",
      icon: "🛣️",
    },
    {
      title: "One-Way Cabs",
      description: "Flexible and cost-effective one-way cab options.",
      icon: "🔀",
    },
    {
      title: "Corporate Car Rental",
      description: "Professional car rental solutions for businesses.",
      icon: "🏢",
    },
    {
      title: "Airport Taxi",
      description: "Timely and comfortable airport pickup and drop services.",
      icon: "✈️",
    },
    {
      title: "Tempo Travellers & Minibuses",
      description: "Group travel made easy with spacious minibuses and tempo travellers.",
      icon: "🚌",
    },
  ];

  return (
    <div className="py-16 px-5 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
