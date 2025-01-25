// // src/components/IntroSection.jsx
// import React from "react";
// import Image from '../../assets/cabs6.jpg';

// const Section = () => {
//   return (
//     <section className="bg-gray-100 py-10 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Text Section */}
//         <div className="text-gray-700">
//           <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
//             India's Largest Intercity and Local Cab Services
//           </h2>
//           <p className="text-base mb-4">
//             We are <span className="font-semibold">Savaari Car Rentals</span>, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade, we are uniquely placed as the largest chauffeur-driven car rental company in India in terms of geographical reach.
//           </p>
//       {/* Header Section */}
//       <header className="bg-blue-50 p-6 border-b border-gray-200">
//         <h1 className="text-3xl font-bold text-blue-700 mb-4">
//           Exploring India, one road trip at a time
//         </h1>
//         <p className="text-lg">
//           To us, a road trip is one of the most exhilarating ways to travel the length and breadth of India. There's always something to look at, something to explore, and something to experience.
//         </p>
//         <p className="text-lg mt-4">
//           Why not sit back and take our <span className="font-semibold">chauffeur-driven cabs</span> on your next vacation? We operate in <span className="font-semibold">2000+ cities across India</span> to make your travel memorable.
//         </p>
//       </header>

//       {/* Content Section */}
//       <main className="p-6">
//         {/* First Content Block */}
//         <section className="mb-12">
//           <p className="text-lg">
//             We love that you're free to stop to breathe in clean air, learn about cultures, and taste local food when you travel by cabs. These wholesome experiences make traveling better and enrich our lives.
//           </p>
//           <p className="text-lg mt-4">
//             No city is too big or small. From Khajuraho to Alleppey to Tranquebar, we help you explore everything there is to see around you.
//           </p>
//         </section>

//         {/* Booking Information Section */}
//         <section className="mb-12">
//           <p className="text-lg">
//             To make planning your vacation easier, you can book a cab on our website, or call us on 
//             <a href="tel:9045450000" className="text-blue-500 font-semibold"> 9045450000</a> to discuss your itinerary.
//           </p>
//           <p className="text-lg mt-4">
//             You can also use our <a href="#" className="text-blue-500 font-semibold">cab booking app</a> to reduce the hassles of travel. From the moment you book to when you return home, we ensure you have an unforgettable experience.
//           </p>
//         </section>

//         {/* Second Content Block */}
//         <section className="bg-blue-50 p-6 rounded-lg">
//           <h2 className="text-2xl font-bold text-blue-700 mb-4">
//             No matter where you travel – we've got a cab for you
//           </h2>
//           <p className="text-lg">
//             Planning a weekend getaway? Our outstation cab services will help you explore the best destinations, visit must-see places, and taste the best local food. 
//           </p>
//           <p className="text-lg mt-4">
//             Need a one-way cab or airport transfer? We've got you covered. Try our new one-way services or local taxi packages to make your day trips easier and more enjoyable.
//           </p>
//         </section>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-gray-100 p-4 text-center border-t border-gray-200 mt-6">
//         <p className="text-sm text-gray-500">
//           Trust us when we say: <span className="font-semibold">Travel begins with Savaari.</span>
//         </p>
//       </footer>
//     </div>
//         {/* Image Section */}
//         <div className="flex justify-center">
//         <img
//             src={Image}
//             alt="Car Interior"
//             className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md"
//         />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Section;




import React from "react";
import Image from '../../assets/cabs6.jpg';

const Section = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 ">
      <div className=" max-w-8xl mx-auto ml-10  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 leading-tight">
            India's Largest Intercity and Local Cab Services
          </h2>
          <p className="text-base md:text-lg mb-4 leading-relaxed">
            We are <span className="font-semibold">Quick Cabs Rentals</span>, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade, we are uniquely placed as the largest chauffeur-driven car rental company in India in terms of geographical reach.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Car Interior"
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-md md:max-w-lg"
          />
        </div>
      </div>

      <div className="max-w-8xl mx-auto mt-10">
        {/* Header Section */}
        <header className=" bg-blue-50 p-6 border-b border-gray-200 rounded-lg items-center">
          <h1 className=" ml-4 text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Exploring India, one road trip at a time
          </h1>
          <p className="ml-4 text-lg leading-relaxed">
            To us, a road trip is one of the most exhilarating ways to travel the length and breadth of India. There's always something to look at, something to explore, and something to experience.
          </p>
          <p className="ml-4 text-lg mt-4 leading-relaxed">
            Why not sit back and take our <span className="font-semibold">chauffeur-driven cabs</span> on your next vacation? We operate in <span className="font-semibold">2000+ cities across India</span> to make your travel memorable.
          </p>
        </header>

        {/* Content Section */}
        <main className="p-6">
          {/* First Content Block */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              We love that you're free to stop to breathe in clean air, learn about cultures, and taste local food when you travel by cabs. These wholesome experiences make traveling better and enrich our lives.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              No city is too big or small. From Khajuraho to Alleppey to Tranquebar, we help you explore everything there is to see around you.
            </p>
          </section>

          {/* Booking Information Section */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              To make planning your vacation easier, you can book a cab on our website, or call us on 
              <a href="tel:9045450000" className="text-blue-500 font-semibold"> 9045450000</a> to discuss your itinerary.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              You can also use our <a href="#" className="text-blue-500 font-semibold">cab booking app</a> to reduce the hassles of travel. From the moment you book to when you return home, we ensure you have an unforgettable experience.
            </p>
          </section>

          {/* Second Content Block */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              No matter where you travel – we've got a cab for you
            </h2>
            <p className="text-lg leading-relaxed">
              Planning a weekend getaway? Our outstation cab services will help you explore the best destinations, visit must-see places, and taste the best local food. 
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Need a one-way cab or airport transfer? We've got you covered. Try our new one-way services or local taxi packages to make your day trips easier and more enjoyable.
            </p>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-100 p-4 text-center border-t border-gray-200 mt-6 rounded-lg">
          <p className="text-sm text-gray-500">
            Trust us when we say: <span className="font-semibold text-blue-500">Travel begins with Quick Cabs.</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Section;
