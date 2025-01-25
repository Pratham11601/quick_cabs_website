// import React from "react";
// import { FaTaxi, FaRegStar, FaMapSigns, FaShieldAlt, FaCar } from "react-icons/fa"; // Import icons

// const App = () => {
//   return (
//     <div className="bg-gray-50">
//       {/* Ads Section */}
//       <div className="py-12 px-6">
//         <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
//           Exclusive Quick Cabs Offers
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full mx-auto">
//           {/* Card 1 */}
//           <div className="rounded-lg shadow-lg overflow-hidden bg-white p-6 flex flex-col justify-between border-l-8 border-blue-600 transform transition duration-300 hover:scale-105 hover:shadow-xl w-full">
//             <div>
//               <FaTaxi className="text-4xl text-blue-600 mb-4" />
//               <h3 className="text-2xl font-semibold text-blue-700">
//                 Flat 20% Off on All Rides
//               </h3>
//               <p className="text-gray-600 mt-4">
//                 Whether you're going to the airport or a local destination, get 20% off your ride with Quick Cabs. 
//                 Book your ride today and enjoy a smooth journey!
//               </p>
//               <p className="text-sm text-blue-600 mt-2 italic">Quick, easy, and affordable rides!</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="rounded-lg shadow-lg overflow-hidden bg-white p-6 flex flex-col justify-between border-l-8 border-orange-600 transform transition duration-300 hover:scale-105 hover:shadow-xl w-full">
//             <div>
//               <FaRegStar className="text-4xl text-orange-600 mb-4" />
//               <h3 className="text-2xl font-semibold text-orange-700">
//                 Premium Comfort at Affordable Rates
//               </h3>
//               <p className="text-gray-600 mt-4">
//                 Get luxury on the go! Choose Quick Cabs' premium rides for just ₹10/km. Comfort and style, 
//                 at rates you’ll love. 
//               </p>
//               <p className="text-sm text-orange-600 mt-2 italic">Travel in style, always!</p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="rounded-lg shadow-lg overflow-hidden bg-white p-6 flex flex-col justify-between border-l-8 border-blue-600 transform transition duration-300 hover:scale-105 hover:shadow-xl w-full">
//             <div>
//               <FaMapSigns className="text-4xl text-blue-600 mb-4" />
//               <h3 className="text-2xl font-semibold text-blue-700">
//                 Weekend Getaway at Discounted Rates
//               </h3>
//               <p className="text-gray-600 mt-4">
//                 Planning a weekend getaway? Book a round-trip with Quick Cabs and save up to 15% on your 
//                 fare. Perfect for your next adventure!
//               </p>
//               <p className="text-sm text-blue-600 mt-2 italic">Perfect for family trips and weekend getaways!</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* "WHAT SETS QUICK CABS APART?" Section in One Blue Card */}
//       <div className="  py-12 px-6">
//         <h2 className="text-3xl font-bold text-center mb-8 text-orange-600 ">
//           WHAT SETS QUICK CABS APART?
//         </h2>
//         <div className="rounded-lg shadow-lg overflow-hidden bg-blue-700 p-8 text-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {/* Feature 1 */}
//             <div className="flex flex-col items-center">
//               <FaShieldAlt className="text-5xl mb-4" />
//               <h3 className="font-semibold text-xl">Robust Security</h3>
//               <p className="text-center mt-4">We prioritize your safety with advanced security measures in all rides.</p>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex flex-col items-center">
//               <FaCar className="text-5xl mb-4" />
//               <h3 className="font-semibold text-xl">Clean and Comfortable Cars</h3>
//               <p className="text-center mt-4">Our cars are regularly cleaned and sanitized for your comfort and safety.</p>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex flex-col items-center">
//               <FaTaxi className="text-5xl mb-4" />
//               <h3 className="font-semibold text-xl">Affordable Rides</h3>
//               <p className="text-center mt-4">Enjoy competitive rates that make traveling affordable for everyone.</p>
//             </div>

//             {/* Feature 4 */}
//             <div className="flex flex-col items-center">
//               <FaMapSigns className="text-5xl mb-4" />
//               <h3 className="font-semibold text-xl">Wide Service Coverage</h3>
//               <p className="text-center mt-4">Quick Cabs operates in over 2000 cities, ensuring we're there when you need us.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCarAlt, faFileInvoice, faUserTie, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const highlights = [
//   {
//     title: "Clean and Hygienic Car",
//     icon: faCarAlt, // Font Awesome car icon
//   },
//   {
//     title: "Transparent Billing",
//     icon: faFileInvoice, // Font Awesome invoice icon
//   },
//   {
//     title: "Expert Chauffeurs",
//     icon: faUserTie, // Font Awesome user-tie icon
//   },
//   {
//     title: "2000+ cities",
//     icon: faMapMarkerAlt, // Font Awesome map-marker icon
//   },
// ];

// const Highlights = () => {
//   return (
//     <section className="py-20">
//       <h2 className="text-center text-3xl font-extrabold text-orange-600 mb-12">
//         WHAT SETS QUICK CABS APART?
//       </h2>
//       <div className="max-w-8xl mx-auto px-6">
//         <div className="bg-blue-500 rounded-xl shadow-xl p-12 flex justify-between items-center space-x-8">
//           {highlights.map((highlight, index) => (
//             <div
//               key={index}
//               className="flex items-center w-1/4 text-white space-x-6"
//             >
//               {/* Icon on the left side */}
//               <div className="bg-white rounded-full p-6 shadow-lg flex items-center justify-center">
//                 <FontAwesomeIcon
//                   icon={highlight.icon}
//                   className="text-blue-700 text-4xl"
//                 />
//               </div>
//               {/* Title text on the right side */}
//               <p className="text-lg font-semibold text-white hover:text-orange-500 transition-colors duration-300 ease-in-out">
//                 {highlight.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Highlights;



import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faFileInvoice, faUserTie, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const highlights = [
  {
    title: "Clean and Hygienic Car",
    icon: faCarAlt, // Font Awesome car icon
  },
  {
    title: "Transparent Billing",
    icon: faFileInvoice, // Font Awesome invoice icon
  },
  {
    title: "Expert Chauffeurs",
    icon: faUserTie, // Font Awesome user-tie icon
  },
  {
    title: "2000+ cities",
    icon: faMapMarkerAlt, // Font Awesome map-marker icon
  },
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-extrabold text-orange-600 mb-12">
        WHAT SETS QUICK CABS APART?
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-blue-500 p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              {/* Icon */}
              <div className="bg-white rounded-full p-6 shadow-md mb-4 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={highlight.icon}
                  className="text-blue-700 text-4xl"
                />
              </div>
              {/* Title */}
              <p className="text-lg font-semibold text-white">
                {highlight.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
