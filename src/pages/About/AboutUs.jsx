// 
import React from 'react';



function AboutUs() {
  return (
    <div>


      {/* Hero Section */}
      <section className="bg-[#fff5f3] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
            We empower professionals in beauty, wellness, and beyond
          </h1>
          <p className="text-xl text-gray-700">
            Our team is full of colorful personalities — each bringing a unique spark to Gargi
          </p>
        </div>

        {/* Image Carousel */}
        <div className="container mx-auto px-4">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            className="animate-fadeInUp"
            arrows={true} // Make sure arrows are enabled
            customLeftArrow={
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-500 p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300">
                ←
              </button>
            }
            customRightArrow={
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-500 p-2 rounded-full opacity-70 hover:opacity-100 transition-all duration-300">
                →
              </button>
            }
          >
            {cardImages.map((imageSrc, index) => (
              <div key={index} className="p-4">
                <img
                  src={imageSrc}
                  alt={`Product ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Keep in Touch Section */}
      <section className="bg-[#1a1625] min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-primary text-6xl font-bold mb-6">Keep in touch</h1>
        <p className="text-white text-xl mb-8">
          Download the app and start booking<br />
          for free with Gargi today
        </p>

        <div className="flex space-x-6">
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            <Facebook size={24} />
          </a>
        </div>
      </section>


    </div>
  );
}

export default AboutUs;
