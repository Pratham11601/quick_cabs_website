// import React from "react";
// import Image from "../../assets/cabs2.jpg";
// import Image1 from "../../assets/cabs3.jpg";
// import Image2 from "../../assets/cabs5.jpg";

// const services = [
//   {
//     title: "ROUNDTRIP CABS",
//     description:
//       "Our premium roundtrip services will pamper you with an absolutely comfortable drive from your doorstep & back. Our chauffeurs are not only courteous but are also expert travel companions that will make your road travel memorable. Affordable Luxury, as we’d like to call it.",
//     iconFeatures: ["Expert Chauffeurs", "Safety Certified", "Multiple Stops"],
//     image: Image,  },
//   {
//     title: "ONEWAY DROPS",
//     description:
//       "Our network of over 15 lakh one way routes ensures that there is no corner of the country that you can’t travel with us. Pay only one side charge at rock bottom rates. If you need to be somewhere, we’ll get you there.",
//     iconFeatures: ["15 Lakh Routes", "Lowest Fares", "All Inclusive Prices"],
//     image: Image1,  },
//   {
//     title: "LOCAL RENTALS",
//     description:
//       "Book our flexible hourly rental cabs and get chauffeured within the city for your business meetings or shopping chores. Our local rentals are available for 4 hours, 8 hours or 12 hours, based on your needs. Explore your city like a local.",
//     iconFeatures: ["Flexible Packages", "Cab At Your Disposal", "Multiple Stops"],
//     image: Image2,  },
  
// ];

// const Services = () => {
//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">OUR SERVICES</h2>
//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-lg font-semibold text-blue-600 mb-3">{service.title}</h3>
//             <p className="text-gray-700 mb-4">{service.description}</p>
//             <ul className="flex flex-wrap gap-2 mt-2">
//               {service.iconFeatures.map((feature, idx) => (
//                 <li
//                   key={idx}
//                   className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
//                 >
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;




import React from "react";
import Image from "../../assets/cabs2.jpg";
import Image1 from "../../assets/cabs3.jpg";
import Image2 from "../../assets/cabs5.jpg";

const services = [
  {
    title: "ROUNDTRIP CABS",
    description:
      "Our premium roundtrip services will pamper you with an absolutely comfortable drive from your doorstep & back. Our chauffeurs are not only courteous but are also expert travel companions that will make your road travel memorable. Affordable Luxury, as we’d like to call it.",
    iconFeatures: ["Expert Chauffeurs", "Safety Certified", "Multiple Stops"],
    image: Image,
  },
  {
    title: "ONEWAY DROPS",
    description:
      "Our network of over 15 lakh one way routes ensures that there is no corner of the country that you can’t travel with us. Pay only one side charge at rock bottom rates. If you need to be somewhere, we’ll get you there.",
    iconFeatures: ["15 Lakh Routes", "Lowest Fares", "All Inclusive Prices"],
    image: Image1,
  },
  {
    title: "LOCAL RENTALS",
    description:
      "Book our flexible hourly rental cabs and get chauffeured within the city for your business meetings or shopping chores. Our local rentals are available for 4 hours, 8 hours or 12 hours, based on your needs. Explore your city like a local.",
    iconFeatures: ["Flexible Packages", "Cab At Your Disposal", "Multiple Stops"],
    image: Image2,
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
        OUR SERVICES
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-105 p-6 flex flex-col items-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-gray-700 mb-4 text-center">{service.description}</p>
            <ul className="flex flex-wrap gap-3 justify-center mt-4">
              {service.iconFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
