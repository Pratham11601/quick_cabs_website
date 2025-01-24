import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams to access the route parameter
import { destinations } from "../Travel/destinations"; // Import destinations data (or fetch from API)

const DestinationDetails = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [destination, setDestination] = useState(null);

  // Find the destination by its 'id'
  useEffect(() => {
    const dest = destinations.find((dest) => dest.id === parseInt(id));
    setDestination(dest);
  }, [id]);

  // If destination is not found or loading, show loading message
  if (!destination) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      {/* <div className="container mx-auto px-4"> */}
        {/* <div className="bg-white shadow-2xl rounded-2xl overflow-hidden"> */}
          {/* Destination Details */}
          <section className="p-8">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{destination.name}</h1>
            <p className="text-xl text-gray-700 mb-6">{destination.description}</p>

            {/* Travel Tips Section */}
            <div className="bg-gray-100 p-6 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Travel Tips</h2>
              <ul className="space-y-4">
                <li><strong>Best Time to Visit:</strong> {destination.details.bestTimeToVisit}</li>
                <li><strong>Local Cuisine:</strong> {destination.details.cuisine}</li>
                <li><strong>Travel Tips:</strong> {destination.details.travelTips}</li>
              </ul>
            </div>

            {/* Subplaces Section */}
            {destination.details.subPlaces && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Destinations to Explore</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {destination.details.subPlaces.map((subPlace, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
                      <img
                        src={subPlace.image}
                        alt={subPlace.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-semibold text-orange-800 mb-2">{subPlace.name}</h3>
                      <p className="text-gray-600 mb-2"><strong>Open:</strong> {subPlace.openTime}</p>
                      <p className="text-gray-600 mb-2"><strong>Close:</strong> {subPlace.closeTime}</p>
                      <p className="text-gray-600 mb-2"><strong>History:</strong> {subPlace.history}</p>
                      
                      <p className="text-gray-600 font-bold text-orange-800">{subPlace.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-8 text-center">
              <Link
                to="/travel-guides"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Explore More Destinations
              </Link>
            </div>
          </section>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default DestinationDetails;
