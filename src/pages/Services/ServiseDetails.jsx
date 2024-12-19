// import React from "react";
// import { useLocation, Link } from "react-router-dom";

// const ServiceDetail = () => {
//   const location = useLocation();
//   const service = location.state?.service;

//   // Handle case where service is not passed
//   if (!service) {
//     return (
//       <div className="text-center p-6">
//         <p>Service details not found.</p>
//         <Link to="/" className="text-blue-600 hover:underline">
//           Back to Services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 text-center">
//         <h1 className="text-4xl font-bold">{service.title}</h1>
//       </div>
//       <main className="container mx-auto p-6">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover" />
//           <div className="p-6">
//             <p className="text-lg">{service.description}</p>
//             <Link to="/" className="block mt-4 text-blue-600 hover:underline">
//               Back to Services
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ServiceDetail;

import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaUserAlt, FaGift, FaImages } from 'react-icons/fa'; // Importing icons

const ServiceDetail = () => {
  const location = useLocation();
  const service = location.state;
  console.log("servise")
  console.log(service)

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-700 text-center">
          No service details available. Please go back to the services page.
        </p>
      </div>
    );
  }

  // Additional description for each service
  const additionalDescriptions = {
    Haircut: "Our professional haircut services are tailored to meet your unique style and preferences. Whether you're looking for a trendy cut or a classic look, our skilled stylists will ensure you leave feeling confident and refreshed.",
    Nails: "Indulge in our beautiful nail treatments designed to pamper and enhance your nails. From manicures to pedicures, we offer a variety of styles and colors to suit your taste.",
    Massage: "Experience ultimate relaxation with our massage therapies. Our trained therapists use various techniques to relieve tension and promote overall well-being.",
    Facial: "Rejuvenate your skin with our facial treatments. Each session is customized to address your specific skin concerns, leaving you with a radiant complexion.",
    Spa: "Escape into luxury with our spa experiences. Enjoy a range of treatments that nourish your body and mind in a serene environment.",
    Coloring: "Explore vibrant hair coloring options that bring out your personality. Our color specialists will help you achieve the perfect shade that complements your look.",
    Makeup: "Our professional makeup services are perfect for any occasion. Whether it's a special event or just a night out, we ensure you look stunning.",
    Waxing: "Achieve smooth skin with our waxing solutions. We use high-quality products that provide long-lasting results while minimizing discomfort."
  };

  const { images, features, targetAudience, recommendedProducts } = service;

  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-white flex items-center justify-center flex-wrap rounded-xl shadow-lg mt-12 space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">{service.icon}{service.name}</h2>
      {/* Section 1: Description */}
      <div className="flex flex-col md:flex-row w-full p-8 rounded-md bg-blue-50 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.img
            src={images.first_img}
            alt={service.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {/* <h2 className="text-3xl font-semibold text-gray-800 mb-2">{service.icon}{service.name}</h2> */}
          <p className="text-gray-700 text-lg leading-relaxed text-center">{service.description} {additionalDescriptions[service.name]}</p>
        </div>
      </div>

      {/* Section 2: Features */}
      <div className="flex flex-col md:flex-row w-full p-8 rounded-md bg-green-50 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaRegCheckCircle className="text-green-600" />
            <span>Features</span>
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.img
            src={images.second_img}
            alt={service.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Section 3: Target Audience */}
      <div className="flex flex-col md:flex-row w-full p-8 rounded-md bg-yellow-50 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.img
            src={images.third_img}
            alt={service.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaUserAlt className="text-yellow-600" />
            <span>Target Audience</span>
          </h2>
          <p className="text-gray-600">{targetAudience}</p>
        </div>
      </div>

      {/* Section 4: Recommended Products */}
      <div className="flex flex-col md:flex-row w-full p-8 rounded-md bg-purple-50 items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaGift className="text-purple-600" />
            <span>Recommended Products</span>
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {recommendedProducts.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.img
            src={images.fourth_img}
            alt={service.name}
            className="w-full md:w-64 h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-px">
          Book Now
        </button>
      </div> */}
    </motion.div>
  );
};

export default ServiceDetail;