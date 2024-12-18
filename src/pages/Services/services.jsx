
// import React from "react";
// import hair_cut from "../../assets/hair_cut.png";

// function Services() {
//   return (
//     <div className="flex justify-center items-center my-10">
//       <div className="bg-gray-100 shadow-lg rounded-lg p-8 w-11/12 lg:w-3/4">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">
//           Our Services
//         </h2>

//         {/* Service Items Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {/* Dynamic Service Items */}
//           {[...Array(8)].map((_, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={hair_cut}
//                 alt="Service"
//                 className="w-16 h-16 object-contain mb-3"
//               />
//               <p className="text-sm font-semibold text-gray-700 uppercase">
//                 Hair Cut
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

// import React from "react";
// import hair_cut from "../../assets/hair_cut.png";
// import { Link } from "react-router-dom";

// function Services() {
//   return (
//     <div className="flex justify-center items-center my-10">
//       {/* Main Container */}
//       <div className="bg-gray-100 rounded-lg text-center shadow-lg p-8 w-11/12 md:w-3/4">
//         {/* Header */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
//           Services Provided
//         </h2>

//         {/* Services Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
//           {/* Individual Service */}

//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Hair Cut
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Nails
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Fecial
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Coloring
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Spa
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Waxing
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Makeup
//             </span>
//           </div>
//           <div

//             className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={hair_cut}
//               alt="Service"
//               className="w-16 h-16 object-contain mb-2"
//             />
//             <span className="text-sm font-semibold text-gray-700">
//               Message
//             </span>
//           </div>
          

//         </div>
//         {/* <Link to="/book-appointment">
//         <button className="text-xl md:text-xl rounded-md border-2 border-black p-3 hover:scale-105 font-bold text-center my-6 text-gray-800">
//             Book Appointment
//           </button>
//           </Link> */}
//       </div>
//     </div>
//   );
// }

// export default Services;
//====================================================================================================================================================================


// import React from "react";
// import { FaCut, FaSpa, FaPaintBrush, FaHandPaper, FaPalette, FaSmile, } from "react-icons/fa";

// const services = [
//   { name: "Haircut", description: "Professional haircuts for men and women.", icon: <FaCut /> },
//   { name: "Nails", description: "Manicure and pedicure services.", icon: <FaHandPaper /> },
//   { name: "Massage", description: "Relaxing full-body and targeted massages.", icon: <FaSpa /> },
//   { name: "Facial", description: "Customized facials for glowing skin.", icon: <FaSmile /> },
//   { name: "Spa", description: "Rejuvenating spa treatments.", icon: <FaSpa /> },
//   { name: "Coloring", description: "Hair coloring and highlighting services.", icon: <FaPalette /> },
//   { name: "Makeup", description: "Professional makeup for any occasion.", icon: <FaPaintBrush /> },
//   { name: "Waxing", description: "Safe and gentle waxing services.", icon: <FaSpa /> },
// ];

// const ServicesPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 tracking-wide">
//           Our Services
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 text-blue-500 rounded-full mx-auto text-3xl">
//                 {service.icon}
//               </div>
//               <h2 className="text-xl font-semibold mb-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
//                 {service.name}
//               </h2>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

import React from 'react';
import { Link } from "react-router-dom";

const services = [
    { 
        title: 'Haircut', 
        description: 'Get the perfect haircut tailored to your style. Our experienced stylists offer customized consultations to understand your preferences, ensuring a fresh look that complements your personality and enhances your appearance.', 
        imageUrl: 'https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg' 
    },
    { 
        title: 'Nails', 
        description: 'Indulge in our nail care services for beautiful nails. We provide a variety of manicures and pedicures, from classic styles to trendy nail art, ensuring your nails are healthy, polished, and stunning.', 
        imageUrl: 'https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg' 
    },
    { 
        title: 'Massage', 
        description: 'Relax and rejuvenate with our therapeutic massages. Choose from deep tissue, Swedish, or aromatherapy massages to relieve stress, improve circulation, and promote overall well-being.', 
        imageUrl: 'https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg' 
    },
    { 
        title: 'Facial', 
        description: 'Refresh your skin with our luxurious facials. Using high-quality products and advanced techniques, our treatments hydrate, cleanse, and rejuvenate your skin for a radiant glow.', 
        imageUrl: 'https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg' 
    },
    { 
        title: 'Spa', 
        description: 'Experience ultimate relaxation in our spa. From hot stone therapy to full-body wraps, our spa services are designed to melt away stress and restore balance to your body and mind.', 
        imageUrl: 'https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg' 
    },
    { 
        title: 'Coloring', 
        description: 'Transform your look with our expert coloring services. From bold, trendy shades to natural tones, our stylists use high-quality products to deliver vibrant, lasting color.', 
        imageUrl: 'https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg' 
    },
    { 
        title: 'Makeup', 
        description: 'Let our professionals enhance your beauty with makeup. Whether it’s for a wedding, party, or special event, we specialize in creating looks that are glamorous yet natural.', 
        imageUrl: 'https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg' 
    },
    { 
        title: 'Waxing', 
        description: 'Achieve smooth skin with our waxing services. We offer gentle and effective treatments for all areas of the body, leaving your skin soft and hair-free for weeks.', 
        imageUrl: 'https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg' 
    },
];


const ServiceCard = ({ service }) => (
    <div className="relative bg-white text-center shadow-lg rounded-lg overflow-hidden group">
      <h2 className="text-lg m-2 font-serif text-blue-800 font-semibold">
        {service.title}
      </h2>
      <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black hidden lg:flex bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
        <div className="text-center text-white px-4">
          <p className="mt-2">{service.description}</p>
        </div>
      </div>
      <div className="w-full p-3 lg:hidden bg-white font-serif text-black">
        {service.description.slice(0, 50)}.....
      </div>
      {/* Pass service details via state */}
      {/* <Link to="/service" state={{ service }} className="absolute inset-0"></Link> */}
    </div>
  );
  
  const ServicePage = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-lg">
            Pamper yourself with our wide range of beauty and wellness services.
          </p>
        </div>
  
        <main className="container mx-auto p-6">
          <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </section>
        </main>
      </div>
    );
  };
  
  export default ServicePage;




