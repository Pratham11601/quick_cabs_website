// import React from "react";

// const Travel = ({ title }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-10 z-50 w-full">
//     <div className="w-full max-w-4xl p-6 ">
//       <p className="text-lg text-5xl font-bold text-gray-800 text-center justify-center sm:text-left">
//         {title}Travel Guide
//       </p>
//     </div>
//   </div>
//   );
// };

// export default Travel;
// import React from "react";

// const Travel = ({ title }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen mt-6 bg-gray-10 z-50 w-full">
//       <div className="w-full max-w-4xl p-6">
//         <p className="text-lg sm:text-5xl font-bold text-gray-800 text-center sm:text-left">
//                   Travel Guide
//         </p>

//         {/* Introduction Section */}
//         <section className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
//           <p className="text-lg text-gray-700 mt-2">
//             Welcome to our travel guide! Whether you're looking to explore
//             exotic destinations or find hidden gems, this guide will help you
//             plan your perfect getaway. From stunning beaches to breathtaking
//             mountains, we have you covered.
//           </p>
//         </section>

//         {/* Popular Destinations Section */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-800">Popular Destinations</h2>
//           <ul className="text-lg text-gray-700 mt-2 space-y-4">
//             <li>- Paris, France: The City of Lights awaits with its iconic Eiffel Tower, museums, and romantic ambiance.</li>
//             <li>- Tokyo, Japan: Immerse yourself in vibrant culture, stunning architecture, and the latest technology.</li>
//             <li>- New York City, USA: Explore the Big Apple’s iconic landmarks, Broadway shows, and diverse neighborhoods.</li>
//             <li>- Bali, Indonesia: A tropical paradise with stunning beaches, temples, and natural beauty.</li>
//             <li>- Barcelona, Spain: A blend of rich history, modern architecture, and Mediterranean charm.</li>
//           </ul>
//         </section>

//         {/* Travel Tips Section */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-800">Travel Tips</h2>
//           <ul className="text-lg text-gray-700 mt-2 space-y-4">
//             <li>- Plan ahead: Booking flights and accommodations early can save you money and guarantee availability.</li>
//             <li>- Pack smart: Don’t overpack—remember to pack versatile clothing and essential toiletries.</li>
//             <li>- Learn basic local phrases: A little effort in learning greetings in the local language can go a long way.</li>
//             <li>- Stay connected: Keep a portable charger and ensure your phone plan works internationally.</li>
//             <li>- Respect local customs: Be mindful of local traditions and cultures to make the most of your experience.</li>
//           </ul>
//         </section>

//         {/* Conclusion Section */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
//           <p className="text-lg text-gray-700 mt-2">
//             Travel is a wonderful way to explore the world, learn about different
//             cultures, and create lasting memories. Whether you’re a seasoned traveler
//             or a first-timer, this guide will provide you with the information you need
//             to have a seamless and enjoyable trip.
//           </p>
//           <p className="text-lg text-gray-700 mt-4">
//             So, pack your bags, get ready to discover new places, and make unforgettable
//             experiences. Safe travels!
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Travel;
import React from "react";

const Travel = ({ title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-6 bg-gray-10 z-50 w-full">
      <div className="w-full max-w-4xl p-6">
       
        {/* Introduction Section */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <img
            src="https://media.istockphoto.com/id/1830889412/photo/airport-lounge.jpg?s=1024x1024&w=is&k=20&c=6SHWG1ECHCMtI4CJLOuHydJQBvV4ZuoekIgIkQH4ZNM="
            alt="Travel Introduction"
            className="w-full h-64 object-cover mt-4 rounded-md"
            style={{ height: '400px' }} // Ensure a consistent image height
          />
          <p className="text-lg text-gray-700 mt-2">
            Welcome to our travel guide! Whether you're looking to explore
            exotic destinations or find hidden gems, this guide will help you
            plan your perfect getaway. From stunning beaches to breathtaking
            mountains, we have you covered.
          </p>
        </section>

        {/* Popular Destinations Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Popular Destinations</h2>
          <img
            src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Paris"
            className="w-full h-64 object-cover mt-4 rounded-md"
            style={{ height: '400px' }} // Ensure a consistent image height
          />
          <ul className="text-lg text-gray-700 mt-2 space-y-4">
            <li>- Paris, France: The City of Lights awaits with its iconic Eiffel Tower, museums, and romantic ambiance.</li>
            <li>- Tokyo, Japan: Immerse yourself in vibrant culture, stunning architecture, and the latest technology.</li>
            <li>- New York City, USA: Explore the Big Apple’s iconic landmarks, Broadway shows, and diverse neighborhoods.</li>
            <li>- Bali, Indonesia: A tropical paradise with stunning beaches, temples, and natural beauty.</li>
            <li>- Barcelona, Spain: A blend of rich history, modern architecture, and Mediterranean charm.</li>
          </ul>
        </section>

        {/* Travel Tips Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Travel Tips</h2>
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8VHJhdmVsJTIwY2lwfGVufDB8fHx8fDE2NzEyNzQyNzY&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Travel Tips"
            className="w-full h-64 object-cover mt-4 rounded-md"
            style={{ height: '400px' }} // Ensure a consistent image height
          />
          <ul className="text-lg text-gray-700 mt-2 space-y-4">
            <li>- Plan ahead: Booking flights and accommodations early can save you money and guarantee availability.</li>
            <li>- Pack smart: Don’t overpack—remember to pack versatile clothing and essential toiletries.</li>
            <li>- Learn basic local phrases: A little effort in learning greetings in the local language can go a long way.</li>
            <li>- Stay connected: Keep a portable charger and ensure your phone plan works internationally.</li>
            <li>- Respect local customs: Be mindful of local traditions and cultures to make the most of your experience.</li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <img
            src="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Adventure Conclusion"
            className="w-full h-64 object-cover mt-4 rounded-md"
            style={{ height: '400px' }} // Ensure a consistent image height
          />
          <p className="text-lg text-gray-700 mt-2">
            Travel is a wonderful way to explore the world, learn about different
            cultures, and create lasting memories. Whether you’re a seasoned traveler
            or a first-timer, this guide will provide you with the information you need
            to have a seamless and enjoyable trip.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            So, pack your bags, get ready to discover new places, and make unforgettable
            experiences. Safe travels!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Travel;
