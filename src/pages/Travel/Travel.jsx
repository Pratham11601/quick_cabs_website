import React, { useState } from "react";
import { destinations } from "../Travel/destinations";
import { Link } from "react-router-dom";  // Import Link component

const Travel = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white mt-10 min-h-screen py-12 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
           {/* Search Section */}
           <section className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Search for Travel Content</h2>
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
                "url('https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              height: "500px",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white h-full flex flex-col justify-end p-8">
            <div className="flex flex-col items-center justify-end text-center h-full">
              <h1 className="text-4xl font-bold mb-4 text-shadow">Travel Guide</h1>
              <p className="text-xl max-w-2xl text-shadow">
                Embark on a journey of discovery, exploring the world's most breathtaking destinations
              </p>
            </div>

            </div>
          </section>

           {/* About Section */}
          <section className="p-8 border-t">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Quick Cabs Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Quick Cabs Services is a trusted name in chauffeur-driven car rentals. Since our establishment in 2010, we have 
              been dedicated to providing safe, affordable, and reliable cab services. With operations in over 1500 cities 
              across the country, we pride ourselves on being one of India’s most extensive and accessible car rental networks. 
              Our services include Outstation Oneway trips, Roundtrips, Hourly Rentals, and Airport Transfers, tailored to meet 
              your travel needs efficiently and comfortably.
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

            {/* Destination Details Modal */}
            {selectedDestination && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 opacity-100">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl max-w-2xl w-full shadow-xl overflow-y-auto max-h-[90vh] relative transform transition-transform duration-500 ease-in-out">
                  <div className="relative">
                    <img
                      src={selectedDestination.image}
                      alt={selectedDestination.name}
                      className="w-full h-64 object-cover rounded-t-2xl shadow-lg"
                    />
                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200 transition ease-in-out transform hover:scale-110"
                    >
                      ✖
                    </button>
                  </div>

                  <div className="p-8 bg-white rounded-b-2xl">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">{selectedDestination.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{selectedDestination.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-xl text-gray-800 mb-3">Top Highlights</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {selectedDestination.details.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xl text-gray-800 mb-3">Travel Tips</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          <li><strong>Best Time to Visit:</strong> {selectedDestination.details.bestTimeToVisit}</li>
                          <li><strong>Local Cuisine:</strong> {selectedDestination.details.cuisine}</li>
                          <li><strong>Travel Tips:</strong> {selectedDestination.details.travelTips}</li>
                        </ul>
                      </div>
                    </div>

                    {/* Subplaces Section */}
                    {selectedDestination.details.subPlaces && (
                      <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subplaces</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {selectedDestination.details.subPlaces.map((subPlace, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-4">
                              <img
                                src={subPlace.image}
                                alt={subPlace.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                              />
                              <h4 className="text-xl font-bold text-gray-800 mb-2">{subPlace.name}</h4>
                              <p className="text-gray-600 mb-2">{subPlace.history}</p>
                              <p className="text-gray-600 mb-2"><strong>Open:</strong> {subPlace.openTime}</p>
                              <p className="text-gray-600"><strong>Close:</strong> {subPlace.closeTime}</p>
                              <p className="text-gray-600 mt-2">{subPlace.info}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Conclusion */}
            <section className="text-center bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Adventure Awaits
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
                Travel is more than just moving from one place to another. It's about experiencing new cultures,
                creating memories, and expanding your perspective of the world.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition">
                Start Exploring
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
