import React from 'react';

const IndustriesSection = () => {
  const industries = [
    { name: 'Healthcare', description: 'Solutions for hospitals and clinics.' },
    { name: 'Education', description: 'Tools for schools and universities.' },
    { name: 'Retail', description: 'Innovative retail and e-commerce support.' },
    { name: 'Finance', description: 'Services for banks and financial firms.' },
    { name: 'Technology', description: 'Support for tech companies and startups.' },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Industries We Serve</h2>
        <p className="text-gray-600 mt-4">
          We provide tailored solutions to a wide range of industries.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-800">{industry.name}</h3>
            <p className="text-gray-600 mt-2">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
