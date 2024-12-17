
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

import React from "react";
import hair_cut from "../../assets/hair_cut.png";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="flex justify-center items-center my-10">
      {/* Main Container */}
      <div className="bg-gray-100 rounded-lg text-center shadow-lg p-8 w-11/12 md:w-3/4">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
          Services Provided
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {/* Individual Service */}

          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Hair Cut
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Nails
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Fecial
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Coloring
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Spa
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Waxing
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Makeup
            </span>
          </div>
          <div

            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 w-32 h-32 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={hair_cut}
              alt="Service"
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-semibold text-gray-700">
              Message
            </span>
          </div>
          

        </div>
        <Link to="/book-appointment">
        <button className="text-xl md:text-xl rounded-md border-2 border-black p-3 hover:scale-105 font-bold text-center my-6 text-gray-800">
            Book Appointment
          </button>
          </Link>
      </div>
    </div>
  );
}

export default Services;

