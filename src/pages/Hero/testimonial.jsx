
import React, { useState, useEffect } from "react";
import image1 from "../../assets/pic1.jpg";
import image2 from "../../assets/pic2.jpg";
import image3 from "../../assets/pic3.jpg";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      position: "Founder at Emily's Wellness Studio",
      text: "“The new scheduling system has been a lifesaver! It’s easy to use, and my clients love the reminders. I’m seeing more repeat bookings than ever before!”",
      image: image1,
      circularImage: image1,
      headline: "A Lifesaver for My Scheduling!",
    },
    {
      id: 2,
      name: "Michael T.",
      position: "Owner at Mike’s Barber Shop",
      text: "“I’ve seen a huge improvement in client retention since I started using the platform. The reminders have made it so easy for my clients to rebook!”",
      image: image2,
      circularImage: image2,
      headline: "Improved Retention with Ease!",
    },
    {
      id: 3,
      name: "Rachel K.",
      position: "Manager at Pure Glow Spa",
      text: "“The online booking system has been a game-changer! It’s simplified everything for both me and my clients, and I’ve noticed an uptick in bookings.”",
      image: image3,
      circularImage: image3,
      headline: "Simplified Booking and More Clients!",
    },
  ];

  // Function to update active index
  const handleCircleClick = (index) => {
    setActiveIndex(index);
  };

  // Automatically change the active index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section className="bg-white py-10 px-8 relative">
    <div className="max-w-5xl mx-auto relative">
      {/* Circular Images for Navigation (Above the Cards) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-4" style={{ top: "-80px" }}>
        {testimonials.map((testimonial, index) => (
          <img
            key={testimonial.id}
            src={testimonial.circularImage}
            alt="Navigation Circle"
            className={`w-16 h-16 rounded-full cursor-pointer border-4 ${index === activeIndex ? "border-pink-400 shadow-lg" : "border-gray-300"}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
  
      {/* Testimonial Cards */}
      <div className="relative flex overflow-hidden h-[350px] sm:h-[250px] md:h-[350px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-8 transition-transform duration-500 ease-in-out ${
              index === activeIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{ backgroundColor: "#FFEBEF", borderRadius: "12px" }}
          >
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-4 text-gray-900">
                {testimonial.headline}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
                {testimonial.text}
              </p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} Testimonial`}
                className="rounded-lg shadow-md w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
  
      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => handleCircleClick(index)}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-pink-400" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Testimonials;
