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
      <section className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-16 overflow-hidden">
  {/* Decorative Wave */}
  <div className="absolute top-0 left-0 right-0 z-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#e5e7eb" fillOpacity="1" d="M0,256L60,234.7C120,213,240,171,360,160.7C480,150,600,160,720,181.3C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wider transform transition-all duration-500 hover:scale-105">
      Key Features
    </h2>

    {/* Horizontal Layout with Flex */}
    <div className="flex flex-wrap justify-center gap-8">
      {/* Feature 1 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-pink-500 to-purple-400 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">💆‍♀️ Relaxing Treatments</h3>
        <p className="text-sm text-gray-700">Indulge in luxurious facials, massages, and beauty treatments designed to refresh and rejuvenate.</p>
      </div>

      {/* Feature 2 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">🌸 Premium Products</h3>
        <p className="text-sm text-gray-700">We use only high-quality skincare and haircare products to ensure the best results for our clients.</p>
      </div>

      {/* Feature 3 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">💅 Nail Services</h3>
        <p className="text-sm text-gray-700">Experience flawless manicures and pedicures, customized to your personal style and preferences.</p>
      </div>

      {/* Feature 4 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">4</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">🌿 Organic Options</h3>
        <p className="text-sm text-gray-700">We offer a range of organic beauty treatments using natural ingredients for sensitive skin types.</p>
      </div>

      {/* Feature 5 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">5</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">🕒 Timely Appointments</h3>
        <p className="text-sm text-gray-700">We value your time—book your services easily and enjoy prompt, on-time service from our team.</p>
      </div>

      {/* Feature 6 */}
      <div className="w-full sm:w-1/2 md:w-1/4 text-center px-6 mb-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-gradient-to-r from-teal-500 to-lime-400 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-6 mx-auto">
          <span className="text-2xl font-bold">6</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">✨ Personalized Service</h3>
        <p className="text-sm text-gray-700">Receive tailored beauty services to match your needs and preferences, from skincare to styling.</p>
      </div>
    </div>
  </div>
</section>




     {/* Testimonials Section */}
<div className="mt-16">
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


