import React, { useState, useEffect } from 'react';
import image1 from "../../assets/image7.jpg";
import image2 from "../../assets/bride.jpg";
import image3 from "../../assets/makeup1.jpg";
import image4 from "../../assets/image5.jpg";

// Testimonial data
const testimonials = [
  {
    quote: "The makeup artist transformed my look for my wedding day! I felt beautiful and confident. The makeup stayed on all day, and I received so many compliments!",
    name: "Sarah J.",
  },
  {
    quote: "I had my first photoshoot and the makeup artist made me feel like a star. The look was perfect for the camera, and I loved how my makeup turned out!",
    name: "Emily R.",
  },
  {
    quote: "She made my prom night unforgettable! The makeup was flawless and enhanced my features so naturally. I received so many compliments throughout the evening!",
    name: "Olivia W.",
  },
  {
    quote: "The makeup artist really understood my skin tone and gave me a fresh, natural look that lasted for hours! I will definitely book again for my next event.",
    name: "Rachel T.",
  },
];

const MakeupArtist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // 3 seconds interval for auto slide
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto my-2">

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[350px] sm:h-[400px] lg:h-[600px] w-full rounded-xl mb-6 sm:mb-8 lg:mb-12" style={{ backgroundImage: `url(${image1})` }}>
      <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="relative z-10 text-center text-white py-10 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-6">Enhance Your Beauty with Expert Makeup Artistry</h1>
          <p className="text-sm sm:text-lg lg:text-xl mb-8 sm:mb-10">Bridal, Photoshoots, Events - We make every occasion unforgettable.</p>
          <a href="#contact" className="bg-primary text-white py-2 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-semibold hover:bg-primary-dark transition-all">
            Book Your Session
          </a>
        </div>
      </div>

      {/* Additional Sections 1 */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-xl" id="transform">
  <div className="text-left lg:w-1/2 p-4 sm:p-8">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-snug text-shadow-md">
      Elevate Your Style
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
      Embrace the transformation! Our expert makeup artists specialize in bringing out your inner beauty, whether it’s for an unforgettable wedding day, a captivating photoshoot, or a special celebration. Let us help you look and feel your best!
    </p>
    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
      Experience a personalized touch with makeup designed to suit your unique features. We offer a range of services tailored to make you feel radiant and confident for any event.
    </p>
  </div>
  <div className="lg:w-1/2 p-4 sm:p-10">
    <img 
      src={image2} 
      alt="Transform Your Look"
      className="w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
    />
  </div>
</div>


      {/* Additional Sections 2*/}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between mb-6 sm:mb-8 lg:mb-14">
        <div className="text-left lg:w-1/2 p-4 sm:p-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-snug">Meet the Artist</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
            Our makeup artist is a skilled professional with years of experience creating stunning looks for all occasions. From bridal makeup to editorial shoots, their artistry enhances natural beauty with a touch of glamour.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-600">
            <li>Expert in bridal makeup, photoshoots, and special events</li>
            <li>Uses premium quality products for long-lasting results</li>
            <li>Provides personalized makeup consultations</li>
          </ul>
        </div>
        <div className="lg:w-1/2 p-4 sm:p-6">
          <img 
            src={image3} 
            alt="Makeup Artist" 
            className="w-[600px] h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Additional Sections 3*/}
      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between mb-6 sm:mb-8 lg:mb-14 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-xl"  id="our-story">
        <div className="text-left lg:w-1/2 p-4 sm:p-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Always Innovating, Always Improving
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
            We are always on the lookout for the latest trends, products, and techniques to ensure our clients receive the best possible service.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
            Our dedication to innovation means we are constantly improving, ensuring your experience with us is fresh, exciting, and always top-notch.
          </p>
        </div>
        <div className="lg:w-1/2 p-4 sm:p-6 relative z-20">
          <img
            src={image4}
            alt="Innovative Beauty"
            className="w-[600px] h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-6 sm:mb-8 lg:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 text-center">What Our Clients Say</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="flex flex-col items-center w-full sm:w-[600px] md:w-[750px] lg:w-[900px] mx-4"> 
            <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 shadow-xl rounded-lg p-6 sm:p-10 mb-4 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out overflow-hidden">
              <blockquote className="italic text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <p className="text-lg font-semibold text-gray-900 mt-6">
                – {testimonials[currentIndex].name}
              </p>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center space-x-4 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'} transition-all`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default MakeupArtist;
