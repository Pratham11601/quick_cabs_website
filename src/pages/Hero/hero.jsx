import React from "react";
import Testimonial from "../Hero/testimonial";
import image from "../../assets/banner1.jpg";

const Hero = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#0c0c24] text-white flex flex-col md:flex-row items-center p-8 md:p-10">
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
    <h1 className="text-4xl sm:text-5xl md:text-7xl mb-8 font-bold leading-tight transition-transform duration-500 transform hover:scale-105 hover:text-pink-400">
      Schedule <span className="text-pink-400 underline">like a pro.</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 opacity-90 transition-opacity duration-500 hover:opacity-100 hover:text-yellow-400 hover:scale-105">
      SyncBook empowers independent beauty, wellness, and lifestyle professionals to manage their bookings effortlessly, grow their businesses, and provide exceptional service to clients.
    </p>
    <button className="text-base sm:text-lg bg-yellow-400 text-black px-6 py-3 font-bold rounded hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:text-white hover:shadow-xl">
      Get Started
    </button>
  </div>
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={image}
      alt="banner"
      className="rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 w-full sm:w-3/4 md:w-full"
    />
  </div>
</section>

      {/* Features Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
  <h2 className="text-4xl font-extrabold text-center mb-10">
    SyncBook got everything you need
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
    {/* Feature 1: Scheduling */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-bounceIn hover:animate-pulse transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">🗓️ SCHEDULING</h3>
      <p className="text-xs sm:text-sm md:text-base">Schedule appointments and control your calendar using our powerful platform.</p>
    </div>
    {/* Feature 2: Reminders */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-pulse hover:animate-bounceIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">🔔 REMINDERS</h3>
      <p className="text-xs sm:text-sm md:text-base">Reduce no-shows by sending appointment confirmation, reminder, and follow-up messages.</p>
    </div>
    {/* Feature 3: Online Booking */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-zoomIn hover:animate-bounceIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">🌟 ONLINE BOOKING</h3>
      <p className="text-xs sm:text-sm md:text-base">Enable your customers to easily book appointments based on your schedule.</p>
    </div>
    {/* Feature 4: Payments */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-bounceIn hover:animate-zoomIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">💳 PAYMENTS</h3>
      <p className="text-xs sm:text-sm md:text-base">Take deposits at booking and offer a seamless checkout experience.</p>
    </div>
    {/* Feature 5: Services */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-zoomIn hover:animate-bounceIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">🛠️ SERVICES</h3>
      <p className="text-xs sm:text-sm md:text-base">Manage your list of service offerings and prices to keep your customers up to date.</p>
    </div>
    {/* Feature 6: Client Management */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-fadeUp hover:animate-pulse transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">👥 CLIENT MANAGEMENT</h3>
      <p className="text-xs sm:text-sm md:text-base">Stay organized and communicate with all your clients in one place.</p>
    </div>
    {/* Feature 7: Marketing */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-bounceIn hover:animate-zoomIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">📣 MARKETING</h3>
      <p className="text-xs sm:text-sm md:text-base">Grow your business by sending mass messages like promotions and rebooking reminders.</p>
    </div>
    {/* Feature 8: Reports */}
    <div className="group p-3 sm:p-4 md:p-6 bg-[#0c0c24] text-white rounded-lg transform hover:scale-105 hover:animate-bounceIn hover:animate-zoomIn transition-all duration-300">
      <h3 className="text-pink-400 text-sm sm:text-base md:text-lg font-bold mb-2">📊 REPORTS</h3>
      <p className="text-xs sm:text-sm md:text-base">Review your business performance to simplify taxes and identify new ways to grow.</p>
    </div>
  </div>
</section>


     {/* Testimonials Section */}
<div className="mt-10">
  <Testimonial />
</div>


      {/* Services Provided */}
      <section className="bg-gradient-to-r from-pink-50 to-indigo-50 py-16 px-8">
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Exclusive Services</h2>
  <div className="grid grid-cols-4 md:grid-cols-4 gap-4 text-center">
    {/* Service 1: Haircut */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">✂️</div>
      <p className="text-lg font-semibold text-gray-700">Haircut</p>
    </div>
    {/* Service 2: Nails */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">💅</div>
      <p className="text-lg font-semibold text-gray-700">Nails</p>
    </div>
    {/* Service 3: Facial */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">💆‍♀️</div>
      <p className="text-lg font-semibold text-gray-700">Facial</p>
    </div>
    {/* Service 4: Coloring */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">🎨</div>
      <p className="text-lg font-semibold text-gray-700">Coloring</p>
    </div>
    {/* Service 5: Spa */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">🧖‍♀️</div>
      <p className="text-lg font-semibold text-gray-700">Spa</p>
    </div>
    {/* Service 6: Waxing */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">🧴</div>
      <p className="text-lg font-semibold text-gray-700">Waxing</p>
    </div>
    {/* Service 7: Makeup */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">💄</div>
      <p className="text-lg font-semibold text-gray-700">Makeup</p>
    </div>
    {/* Service 8: Massage */}
    <div className="transform transition duration-300 hover:scale-105 hover:bg-pink-100 p-4">
      <div className="text-5xl mb-4">💆</div>
      <p className="text-lg font-semibold text-gray-700">Massage</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
