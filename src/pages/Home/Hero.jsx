// import React, { useState } from "react";
// import Image from '../../assets/home2.jpg';

// function App() {
//   const [tripType, setTripType] = useState("one-way");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [pickupDate, setPickupDate] = useState("2025-01-26"); // Default Pick Up Date
//   const [pickupTime, setPickupTime] = useState("07:00"); // Default Pick Up Time
//   const [returnDate, setReturnDate] = useState("2025-01-26"); // Default Return Date
//   const [city, setCity] = useState(""); // For Local tab city field

//   const handleSearch = () => {
//     if (
//       (tripType === "local" && city && pickupDate && pickupTime) ||
//       (tripType !== "local" && from && to && pickupDate && pickupTime && (tripType !== "round-trip" || returnDate))
//     ) {
//       alert(
//         tripType === "local"
//           ? `Searching local rides in ${city} on ${pickupDate} at ${pickupTime}`
//           : `Searching cabs from ${from} to ${to} on ${pickupDate} at ${pickupTime} ${tripType === "round-trip" ? `and returning on ${returnDate}` : ""}`
//       );
//     } else {
//       alert("Please fill all the fields.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center p-5"
//       style={{
//         backgroundImage: `url(${Image})`,
//         backgroundRepeat: 'no-repeat', 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Heading Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-7xl font-bold text-white">SERVICES ACROSS 2000+ CITIES</h1>
//         <p className="text-2xl text-white mt-6">
//           Book your rides easily and quickly with our reliable service!
//         </p>
//       </div>

//       {/* Form Section */}
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
//         <div className="flex justify-around border-b-2 pb-3">
//           {["one-way", "round-trip", "local"].map((type) => (
//             <button
//               key={type}
//               onClick={() => setTripType(type)}
//               className={`py-2 px-4 font-semibold ${
//                 tripType === type
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-black border"
//               } rounded-lg`}
//             >
//               {type.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-wrap justify-between mt-4 gap-4">
//           {/* Fields for one-way or round-trip */}
//           {tripType !== "local" && (
//             <>
//               <div className="flex-1">
//                 <label className="block text-gray-700 font-medium mb-1">From</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Pickup City"
//                   value={from}
//                   onChange={(e) => setFrom(e.target.value)}
//                   className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className="flex-1">
//                 <label className="block text-gray-700 font-medium mb-1">To</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Drop City"
//                   value={to}
//                   onChange={(e) => setTo(e.target.value)}
//                   className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </>
//           )}

//           {/* Local Trip Section */}
//           {tripType === "local" && (
//             <div className="flex-1">
//               <label className="block text-gray-700 font-medium mb-1">CITY</label>
//               <input
//                 type="text"
//                 placeholder="Enter City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           )}

//           <div className="flex-1">
//             <label className="block text-gray-700 font-medium mb-1">Pick Up</label>
//             <input
//               type="date"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Only for Round Trip: Add Return Date between Pick Up and Pick Up At */}
//           {tripType === "round-trip" && (
//             <div className="flex-1">
//               <label className="block text-gray-700 font-medium mb-1">Return</label>
//               <input
//                 type="date"
//                 value={returnDate}
//                 onChange={(e) => setReturnDate(e.target.value)}
//                 className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           )}

//           <div className="flex-1">
//             <label className="block text-gray-700 font-medium mb-1">Pick Up At</label>
//             <input
//               type="time"
//               value={pickupTime}
//               onChange={(e) => setPickupTime(e.target.value)}
//               className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         </div>

//         <div className="mt-6 text-center">
//           <button
//             onClick={handleSearch}
//             className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600"
//           >
//             Explore Cabs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import Image from '../../assets/home2.jpg';

// function App() {
//   const [tripType, setTripType] = useState("one-way");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [pickupDate, setPickupDate] = useState("2025-01-26");
//   const [pickupTime, setPickupTime] = useState("07:00");
//   const [returnDate, setReturnDate] = useState("2025-01-26");
//   const [city, setCity] = useState("");
//   const [pickupHour, setPickupHour] = useState(12);
// const [pickupMinute, setPickupMinute] = useState(0);
// const [pickupAMPM, setPickupAMPM] = useState('AM');


//   const handleSearch = () => {
//     if (
//       (tripType === "local" && city && pickupDate && pickupTime) ||
//       (tripType !== "local" && from && to && pickupDate && pickupTime && (tripType !== "round-trip" || returnDate))
//     ) {
//       alert(
//         tripType === "local"
//           ? `Searching local rides in ${city} on ${pickupDate} at ${pickupTime}`
//           : `Searching cabs from ${from} to ${to} on ${pickupDate} at ${pickupTime} ${tripType === "round-trip" ? `and returning on ${returnDate}` : ""}`
//       );
//     } else {
//       alert("Please fill all the fields.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-5"
//       style={{
//         backgroundImage: `url(${Image})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
//           SERVICES ACROSS 2000+ CITIES
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl text-white mt-4">
//           Book your rides easily and quickly with our reliable service!
//         </p>
//       </div>

//       {/* Form Section */}
//       <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-5xl">
//         <div className="flex justify-around border-b-2 pb-3">
//           {["one-way", "round-trip", "local"].map((type) => (
//             <button
//               key={type}
//               onClick={() => setTripType(type)}
//               className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base ${
//                 tripType === type
//                   ? "bg-blue-500 text-white"
//                   : "bg-white text-black border"
//               } rounded-lg`}
//             >
//               {type.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Input Fields */}
//         <div className="flex flex-wrap justify-between mt-4 gap-4">
//           {tripType !== "local" && (
//             <>
//               <div className="flex-1 min-w-[150px]">
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   From
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Pickup City"
//                   value={from}
//                   onChange={(e) => setFrom(e.target.value)}
//                   className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 />
//               </div>

//               <div className="flex-1 min-w-[150px]">
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   To
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Drop City"
//                   value={to}
//                   onChange={(e) => setTo(e.target.value)}
//                   className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 />
//               </div>
//             </>
//           )}

//           {tripType === "local" && (
//             <div className="flex-1 min-w-[150px]">
//               <label className="block text-gray-700 font-medium mb-1 text-sm">
//                 CITY
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter City"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//               />
//             </div>
//           )}

//           <div className="flex-1 min-w-[150px]">
//             <label className="block text-gray-700 font-medium mb-1 text-sm">
//               Pick Up
//             </label>
//             <input
//               type="date"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//             />
//           </div>

//           {tripType === "round-trip" && (
//             <div className="flex-1 min-w-[150px]">
//               <label className="block text-gray-700 font-medium mb-1 text-sm">
//                 Return
//               </label>
//               <input
//                 type="date"
//                 value={returnDate}
//                 onChange={(e) => setReturnDate(e.target.value)}
//                 className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//               />
//             </div>
//           )}

//           {/* <div className="flex-1 min-w-[150px]">
//             <label className="block text-gray-700 font-medium mb-1 text-sm">
//               Pick Up At
//             </label>
//             <input
//               type="time"
//               value={pickupTime}
//               onChange={(e) => setPickupTime(e.target.value)}
//               className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//             />
//           </div> */}
//          <div className="flex-1 min-w-[150px]">
//   <label className="block text-gray-700 font-medium mb-1 text-sm">
//     Pick Up At
//   </label>
//   <div className="flex items-center">
//     <input
//       type="time"
//       value={pickupTime}
//       onChange={(e) => setPickupTime(e.target.value)}
//       className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//     />
//     <select
//       value={pickupAMPM}
//       onChange={(e) => setPickupAMPM(e.target.value)}
//       className="ml-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//     >
//       <option value="AM">AM</option>
//       <option value="PM">PM</option>
//     </select>
//   </div>
// </div>


//         </div>

//         <div className="mt-6 text-center">
//           <button
//             onClick={handleSearch}
//             className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-orange-600 text-sm sm:text-base"
//           >
//             Explore Cabs
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import Image from '../../assets/home2.jpg';

function App() {
  const [tripType, setTripType] = useState("one-way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pickupDate, setPickupDate] = useState("2025-01-26");
  const [pickupTime, setPickupTime] = useState("07:00");
  const [returnDate, setReturnDate] = useState("2025-01-26");
  const [city, setCity] = useState("");
  const [pickupHour, setPickupHour] = useState(12);
  const [pickupMinute, setPickupMinute] = useState(0);
  const [pickupAMPM, setPickupAMPM] = useState('AM');

  const handleTripTypeChange = (type) => {
    setTripType(type);
    // Reset states based on trip type
    if (type === "one-way" || type === "round-trip") {
      setFrom("");
      setTo("");
      setCity("");
    }
    if (type === "local") {
      setFrom("");
      setTo("");
    }
    if (type !== "round-trip") {
      setReturnDate("");  // Clear return date for non-round trips
    }
  };

  const handleSearch = () => {
    if (
      (tripType === "local" && city && pickupDate && pickupTime) ||
      (tripType !== "local" && from && to && pickupDate && pickupTime && (tripType !== "round-trip" || returnDate))
    ) {
      alert(
        tripType === "local"
          ? `Searching local rides in ${city} on ${pickupDate} at ${pickupTime}`
          : `Searching cabs from ${from} to ${to} on ${pickupDate} at ${pickupTime} ${tripType === "round-trip" ? `and returning on ${returnDate}` : ""}`
      );
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-5"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
          SERVICES ACROSS 2000+ CITIES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mt-4">
          Book your rides easily and quickly with our reliable service!
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-5xl">
        <div className="flex justify-around border-b-2 pb-3">
          {["one-way", "round-trip", "local"].map((type) => (
            <button
              key={type}
              onClick={() => handleTripTypeChange(type)}
              className={`py-2 px-3 sm:px-4 font-semibold text-sm sm:text-base ${
                tripType === type
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black border"
              } rounded-lg`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="flex flex-wrap justify-between mt-4 gap-4">
          {tripType !== "local" && (
            <>
              <div className="flex-1 min-w-[150px]">
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Enter Pickup City"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="flex-1 min-w-[150px]">
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Enter Drop City"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </>
          )}

          {tripType === "local" && (
            <div className="flex-1 min-w-[150px]">
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                CITY
              </label>
              <input
                type="text"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          )}

          <div className="flex-1 min-w-[150px]">
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Pick Up
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {tripType === "round-trip" && (
            <div className="flex-1 min-w-[150px]">
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Return
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          )}

          <div className="flex-1 min-w-[150px]">
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Pick Up At
            </label>
            <div className="flex items-center">
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <select
                value={pickupAMPM}
                onChange={(e) => setPickupAMPM(e.target.value)}
                className="ml-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-lg shadow-md hover:bg-orange-600 text-sm sm:text-base"
          >
            Explore Cabs
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
