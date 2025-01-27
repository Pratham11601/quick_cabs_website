// import React from "react";

// const Offbeat = ({ title }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-10 z-50 w-full">
//     <div className="w-full max-w-4xl p-6 ">
//       <p className="text-lg text-5xl font-bold text-gray-800 text-center justify-center sm:text-left">
//         {title}Offbeat
//       </p>
//     </div>
//   </div>
//   );
// };

// export default Offbeat;



import React, { useState } from "react";
import { destinations } from "../Travel/destinations";
import { Link } from "react-router-dom";  // Import Link component

const Offbeat = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    // <div className="bg-gradient-to-b from-blue-50 to-white mt-10 min-h-screen py-12 z-50 w-full">
      // <div className="container mx-auto px-4 ">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mt-10 min-h-screen py-12 z-50 w-full">
           {/* Search Section */}
           <section className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Search for Offbeat Content</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition">
                Search
              </button>
            </div>
          </section>

          {/* Introduction Section */}
          <section
            className="bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1737142928492-13e7b0efe912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              height: "500px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white h-full flex flex-col justify-end p-8">
            <div className="flex flex-col items-center justify-end text-center h-full">
            <h1 className="text-4xl font-bold mb-4 text-shadow">Offbeat Adventures</h1>
            <p className="text-xl max-w-2xl text-shadow">
              Explore the lesser-known, hidden gems of India with unique, offbeat travel experiences that will leave you spellbound.
            </p>
            </div>

            </div>
          </section>

           {/* About Section */}
          <section className="p-8 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Quick Cabs Services</h2>
            <p className="text-gray-700 leading-relaxed ">
            Quick Cab trusted name in the tour and travel industry last 15 years operating in Maharashtra and All over India.

            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
            We are offer affordable tour Packages for everyone to enjoy bagful of cheerful moments & unforgettable experience. we focused our priority on Customer satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
            Quick cab is well known for its prompt, reliable, economical services. We also provide one way drop, round trip, outstation trip and full day package. We also arrange one way, return trip, family trip and whole day tour package for local sightseeing.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
            For making reservation or booking you have to simply call our call center at +919307074457 or write to us Now get best deals from our online car rental portal at affordable rates. Our car rent service can easily pick you from area around our native city, Hotels in city, from your home to your dream destination or picnic spots. We guarantee you to offer economical package for your trip, which will have no match in the industry.
            </p>
            
          </section>

            {/* More Travel Topics Section */}
            <section className="p-8 border-t">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">More Travel Topics</h2>
              <ul className="space-y-2">
                <li className="text-blue-500 hover:underline cursor-pointer">
                  Quick Cabs reviews: What our customers say about their journeys
                </li>
                <li className="text-blue-500 hover:underline cursor-pointer">
                  Top destinations for 2025: Plan your next adventure with Quick Cabs
                </li>
                <li className="text-blue-500 hover:underline cursor-pointer">
                  Travel tips: How to make the most of your cab rides with Quick Cabs
                </li>
              </ul>
            </section>

          {/* Content Sections */}
          <div className="p-8 space-y-12">
            {/* Popular Destinations */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
                Popular Destinations
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {destinations.map((dest, index) => (
                  <Link
                    to={`/destination/${dest.id}`}  // Use Link component to navigate to destination detail page
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800">{dest.name}</h3>
                      <p className="text-gray-600">{dest.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="text-center bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Adventure Awaits
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
                Travel is more than just moving from one place to another. It's about experiencing new cultures,
                creating memories, and expanding your perspective of the world.
              </p>
              <Link to="/">
                              <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition">
                                Start Exploring
                              </button>
                            </Link>
            </section>
          </div>
        </div>
      // </div>
    // </div>
  );
};

export default Offbeat;
