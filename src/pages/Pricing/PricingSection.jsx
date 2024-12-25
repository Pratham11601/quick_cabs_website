


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FAQItem from './FAQItem';

// const PricingSection = () => {
//   const [billingOption, setBillingOption] = useState('1 Year');
//   const [expandedCards, setExpandedCards] = useState({});
//   const navigate = useNavigate();

//   const featureLimit = 3; // Maximum number of features to show before "Read More"

//   const toggleExpand = (index) => {
//     setExpandedCards((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const plans = [
//     {
//       name: "Starter",
//       price1Year: 0,
//       price3Years: 0,
//       features1Year: [
//         "240 appointments/yr",
//         "One user/calendar",
//         "Priority support",
//         "Extra annual benefit",
//       ],
//       features3Years: [
//         "720 appointments/3 yrs",
//         "One user/calendar",
//         "Dedicated support",
//         "Exclusive long-term benefits",
//       ],
//       buttonText: "Get started",
//       isFree: true,
//     },
//     {
//       name: "Pro",
//       price1Year: 199.99,
//       price3Years: 549.99,
//       features1Year: [
//         "Unlimited appointments",
//         "Lower transaction fees (2.5% + $0.25)",
//         "Advanced reports",
//         "Priority support",
//       ],
//       features3Years: [
//         "Unlimited appointments",
//         "Even lower transaction fees (2.2% + $0.20)",
//         "Comprehensive reports",
//         "Dedicated account manager",
//       ],
//       buttonText: "Get started",
//     },
//     {
//       name: "Pro Plus",
//       price1Year: 399.99,
//       price3Years: 999.99,
//       features1Year: [
//         "Unlimited users/calendars",
//         "Team management",
//         "Advanced team analytics",
//         "Dedicated account manager",
//       ],
//       features3Years: [
//         "Unlimited users/calendars",
//         "Comprehensive team management",
//         "Premium analytics",
//         "Priority account handling",
//       ],
//       buttonText: "Get started",
//     },
//   ];

//   return (
//     <section className="bg-yellow-50 py-12 px-6 text-center">
//       <h2 className="text-5xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
//         Pricing
//       </h2>
//       <p className="text-gray-700 mb-8 text-lg animate__animated animate__fadeIn animate__delay-1s">
//         SyncBook has affordable plans that fit your business.
//       </p>

//       {/* Billing Toggle */}
//       <div className="inline-flex bg-white rounded-full shadow-md p-1 mb-10">
//         <button
//           className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
//             billingOption === '1 Year' ? 'bg-yellow-200 text-gray-800' : 'text-gray-600'
//           }`}
//           onClick={() => setBillingOption('1 Year')}
//         >
//           1 Year
//         </button>
//         <button
//           className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
//             billingOption === '3 Years' ? 'bg-gray-900 text-white' : 'text-gray-600'
//           }`}
//           onClick={() => setBillingOption('3 Years')}
//         >
//           3 Years
//         </button>
//       </div>

//       {/* Pricing Cards */}
//       <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 h-auto flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
//           >
//             <div className="bg-gray-900 text-white rounded-t-lg py-4">
//               <h3 className="text-xl font-bold uppercase">{plan.name}</h3>
//               <p className="text-sm mt-2">
//                 {plan.isFree
//                   ? "The essential tools you need to start your business."
//                   : "Everything you need to grow and manage your business."}
//               </p>
//             </div>

//             <div className="py-6 flex flex-col justify-between flex-grow">
//               {/* Price Section */}
//               <div>
//                 <h4 className="text-4xl font-bold text-gray-900 mb-2">
//                   {plan.isFree
//                     ? "FREE"
//                     : `$${billingOption === "1 Year" ? plan.price1Year : plan.price3Years} ${
//                         billingOption === "3 Years" ? "/3 YRS" : "/YR"
//                       }`}
//                 </h4>
//                 {billingOption === "3 Years" && !plan.isFree && (
//                   <p className="text-green-600 font-semibold mb-4">
//                     Save {Math.round(((plan.price1Year * 3 - plan.price3Years) / (plan.price1Year * 3)) * 100)}% with a 3-year plan
//                   </p>
//                 )}
//               </div>

//               {/* Features Section */}
//               <ul className="text-left text-gray-600 mb-6">
//                 {(billingOption === "1 Year" ? plan.features1Year : plan.features3Years)
//                   .slice(0, expandedCards[index] ? undefined : featureLimit)
//                   .map((feature, idx) => (
//                     <li key={idx} className="mb-1">
//                       ✅ {feature}
//                     </li>
//                   ))}
//               </ul>
//               {plan.features1Year.length > featureLimit && (
//                 <button
//                   className="text-blue-600 font-semibold mb-4 self-start"
//                   onClick={() => toggleExpand(index)}
//                 >
//                   {expandedCards[index] ? "Show Less" : "Read More"}
//                 </button>
//               )}

//               {/* CTA Button */}
//               <button className="bg-pink-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 ease-in-out">
//                 {plan.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <br />

//       <div className="bg-yellow-400 rounded-3xl p-12 max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
//         <div className="flex flex-col items-center text-center space-y-8">
//           <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
//             Schedule with ease
//           </h1>

//           <div className="max-w-2xl">
//             <p className="text-xl md:text-2xl text-gray-900">
//               Download the app and start booking for free with SyncBook today
//             </p>
//           </div>

//           <button
//             className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out"
//             onClick={() => navigate('/share')}
//           >
//             Get started
//           </button>
//         </div>
//       </div>
//       <FAQItem />
//     </section>
//   );
// };

// export default PricingSection;

// import React, { useState } from "react";
// import { Check, X } from 'lucide-react';

// const plans = [
//   {
//     name: "Gold",
//     features: [
//       { label: "Add Category", value: "Upto 1" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "90 days" },
//       { label: "Add Banners/Offers", value: "3" },
//       { label: "Add Services", value: "Upto 10" },
//       { label: "Support", value: "E-mail" },
//       { label: "Link Usage", value: "GMB" },
//     ],
//   },
//   {
//     name: "Diamond",
//     features: [
//       { label: "Add Category", value: "Upto 2" },
//       { label: "Advance Booking", value: "15 days" },
//       { label: "Accessible History", value: "180 days" },
//       { label: "Add Banners/Offers", value: "5" },
//       { label: "Add Services", value: "Upto 25" },
//       { label: "Support", value: "+ WhatsApp" },
//       { label: "Link Usage", value: "+ Website" },
//     ],
//   },
//   {
//     name: "Platinum",
//     features: [
//       { label: "Add Category", value: "Upto 3" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "360 days" },
//       { label: "Add Banners/Offers", value: "10" },
//       { label: "Add Services", value: "Upto 50" },
//       { label: "Support", value: "+ Call" },
//       { label: "Link Usage", value: "+ QR Code" },
//     ],
//   },
// ];

// const PricingSection = () => {
//   const [selectedPlan, setSelectedPlan] = useState("Diamond");
  
//   return (
//     <section className="bg-yellow-50 py-12 px-4 lg:px-16 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//         Upgrade Your Plan
//       </h2>
//       <p className="text-md md:text-lg text-gray-600 mb-8">
//         Choose the best plan to elevate your business. Flexible and affordable
//         options tailored to your needs.
//       </p>

//       {/* Plan Selection Buttons */}
//       <div className="flex justify-center gap-4 mb-8">
//         {plans.map((plan) => (
//           <button
//             key={plan.name}
//             onClick={() => setSelectedPlan(plan.name)}
//             className={`
//               px-8 py-3 rounded-full font-semibold transition-all duration-300
//               ${selectedPlan === plan.name 
//                 ? 'bg-blue-600 text-white scale-105 shadow-lg' 
//                 : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105'
//               }
//             `}
//           >
//             {plan.name}
//           </button>
//         ))}
//       </div>

//       {/* Enhanced Pricing Table */}
//       <div className="overflow-x-auto bg-white shadow-xl rounded-2xl max-w-6xl mx-auto">
//         <table className="w-full">
//           <thead className="bg-gray-900 text-white">
//             <tr>
//               <th className="p-6 text-left rounded-tl-2xl">Features</th>
//               {plans.map((plan) => (
//                 <th
//                   key={plan.name}
//                   className={`p-6 text-center relative ${
//                     plan.name === "Platinum" ? "rounded-tr-2xl" : ""
//                   }`}
//                 >
//                   <div className="flex flex-col items-center">
//                     <span className="text-2xl font-bold mb-2">{plan.name}</span>
//                     {selectedPlan === plan.name && (
//                       <span className="bg-blue-500 text-sm font-semibold px-4 py-1 rounded-full">
//                         Selected
//                       </span>
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {plans[0].features.map((feature, index) => (
//               <tr
//                 key={index}
//                 className={`border-b hover:bg-blue-50 transition-all duration-200 ${
//                   index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 }`}
//               >
//                 <td className="p-6 text-gray-700 font-medium text-left">
//                   {feature.label}
//                 </td>
//                 {plans.map((plan) => (
//                   <td
//                     key={plan.name}
//                     className={`p-6 text-center relative group ${
//                       selectedPlan === plan.name
//                         ? "bg-blue-50"
//                         : ""
//                     }`}
//                   >
//                     <div className={`
//                       font-semibold transition-all duration-200
//                       ${selectedPlan === plan.name ? "text-blue-700 scale-110" : "text-gray-800"}
//                       group-hover:scale-110
//                     `}>
//                       {plan.features[index].value}
//                     </div>
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Call to Action */}
//       <div className="mt-12 max-w-4xl mx-auto text-center">
//         <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//           Ready to Upgrade?
//         </h3>
//         <p className="text-lg text-gray-600 mb-8">
//           Unlock advanced features and grow your business today.
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
//           Get Started with {selectedPlan}
//         </button>
//       </div>

//       {/* Bottom CTA */}
//       <div className="mt-20 bg-yellow-400 rounded-3xl p-12 max-w-5xl mx-auto">
//         <div className="flex flex-col items-center text-center space-y-8">
//           <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
//             Schedule with ease
//           </h1>
//           <div className="max-w-2xl">
//             <p className="text-xl md:text-2xl text-gray-900">
//               Download the app and start booking for free with SyncBook today
//             </p>
//           </div>
//           <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
//             Get started
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import FAQItem from './FAQItem';


// const plans = [
//   {
//     name: "Gold",
//     features: [
//       { label: "Add Category", value: "Upto 1" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "90 days" },
//       { label: "Add Banners/Offers", value: "3" },
//       { label: "Add Services", value: "Upto 10" },
//       { label: "Support", value: "E-mail" },
//       { label: "Link Usage", value: "GMB" },
//     ],
//   },
//   {
//     name: "Diamond",
//     features: [
//       { label: "Add Category", value: "Upto 2" },
//       { label: "Advance Booking", value: "15 days" },
//       { label: "Accessible History", value: "180 days" },
//       { label: "Add Banners/Offers", value: "5" },
//       { label: "Add Services", value: "Upto 25" },
//       { label: "Support", value: "+ WhatsApp" },
//       { label: "Link Usage", value: "+ Website" },
//     ],
//   },
//   {
//     name: "Platinum",
//     features: [
//       { label: "Add Category", value: "Upto 3" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "360 days" },
//       { label: "Add Banners/Offers", value: "10" },
//       { label: "Add Services", value: "Upto 50" },
//       { label: "Support", value: "+ Call" },
//       { label: "Link Usage", value: "+ QR Code" },
//     ],
//   },
// ];

// const PricingSection = () => {
//   const [selectedPlan, setSelectedPlan] = useState("Diamond");
//   const navigate = useNavigate();

//   const getButtonColor = (planName) => {
//     return "bg-gray-800 hover:bg-gray-900 text-white";
//   };

//   return (
//     <section className="bg-yellow-50 py-12 px-4 lg:px-16 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//         Upgrade Your Plan
//       </h2>
//       <p className="text-md md:text-lg text-gray-600 mb-8">
//         Choose the best plan to elevate your business. Flexible and affordable
//         options tailored to your needs.
//       </p>

//       {/* Pricing Table */}
//       <div className="overflow-x-auto bg-white shadow-lg rounded-lg max-w-6xl mx-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr>
//               <th className="p-4"></th>
//               {plans.map((plan) => (
//                 <th
//                   key={plan.name}
//                   className="relative p-4 text-gray-800 rounded-t-lg"
//                 >
//                   <div className="flex flex-col items-center">
//                     <button
//                       onClick={() => setSelectedPlan(plan.name)}
//                       className={`
//                         mt-4 py-2 px-6 rounded-full 
//                         font-semibold shadow-md transition-all hover:scale-105
//                         ${getButtonColor(plan.name)}
//                         ${selectedPlan === plan.name ? "ring-2 ring-offset-2" : ""}
//                       `}
//                     >
//                       {plan.name}
//                     </button>
//                     {selectedPlan === plan.name && (
//                       <div className="absolute -top-1 right-4 flex h-3 w-3">
                        
//                       </div>
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {plans[0].features.map((feature, index) => (
//               <tr
//                 key={index}
//                 className={`border-b ${
//                   index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 } hover:bg-gray-100 transition-all`}
//               >
//                 <td className="p-4 text-gray-600 font-medium">{feature.label}</td>
//                 {plans.map((plan) => (
//                   <td
//                     key={plan.name}
//                     className={`p-4 text-center font-semibold ${
//                       selectedPlan === plan.name
//                         ? "bg-blue-50 text-blue-700"
//                         : "text-gray-800"
//                     }`}
//                   >
//                     {plan.features[index].value}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Call to Action */}
//       <div className="mt-8 lg:mt-12 max-w-4xl mx-auto text-center">
//         <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//           Ready to Upgrade?
//         </h3>
//         <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8">
//           Unlock advanced features and grow your business today.
//         </p>
//         <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md transition-all">
//           Get Started
//         </button>
//       </div>
// <br></br>
//       <div className="bg-yellow-400 rounded-3xl p-12 max-w-5xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
//         <div className="flex flex-col items-center text-center space-y-8">
//           <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
//             Schedule with ease
//           </h1>

//           <div className="max-w-2xl">
//             <p className="text-xl md:text-2xl text-gray-900">
//               Download the app and start booking for free with SyncBook today
//             </p>
//           </div>

//           <button
//             className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out"
//             onClick={() => navigate('/share')}
//           >
//             Get started
//           </button>
//         </div>
//       </div>
//       <FAQItem />
//     </section>
//   );
// };

// export default PricingSection;




// import React, { useState } from "react";
// import { Check } from 'lucide-react';
// import FAQItem from './FAQItem';

// const plans = [
//   {
//     name: "Gold",
//     tagline: "Perfect for startups",
//     highlight: false,
//     features: [
//       { label: "Add Category", value: "Upto 1" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "90 days" },
//       { label: "Add Banners/Offers", value: "3" },
//       { label: "Add Services", value: "Upto 10" },
//       { label: "Support", value: "E-mail" },
//       { label: "Link Usage", value: "GMB" },
//     ],
//   },
//   {
//     name: "Diamond",
//     tagline: "Most Popular",
//     highlight: true,
//     features: [
//       { label: "Add Category", value: "Upto 2" },
//       { label: "Advance Booking", value: "15 days" },
//       { label: "Accessible History", value: "180 days" },
//       { label: "Add Banners/Offers", value: "5" },
//       { label: "Add Services", value: "Upto 25" },
//       { label: "Support", value: "+ WhatsApp" },
//       { label: "Link Usage", value: "+ Website" },
//     ],
//   },
//   {
//     name: "Platinum",
//     tagline: "For growing businesses",
//     highlight: false,
//     features: [
//       { label: "Add Category", value: "Upto 3" },
//       { label: "Advance Booking", value: "30 days" },
//       { label: "Accessible History", value: "360 days" },
//       { label: "Add Banners/Offers", value: "10" },
//       { label: "Add Services", value: "Upto 50" },
//       { label: "Support", value: "+ Call" },
//       { label: "Link Usage", value: "+ QR Code" },
//     ],
//   },
// ];

// const PricingSection = ({ onGetStarted = () => {} }) => {
//   const [selectedPlan, setSelectedPlan] = useState("Diamond");

//   return (
//     <section className="bg-gradient-to-b from-yellow-50 to-white py-20 px-4 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Choose Your Perfect Plan
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Unlock powerful features to grow your business. Select the plan that best fits your needs.
//           </p>
          
//           {/* Top Filter Buttons */}
//           <div className="flex justify-center gap-4 mb-12">
//             {plans.map((plan) => (
//               <button
//                 key={plan.name}
//                 onClick={() => setSelectedPlan(plan.name)}
//                 className={`
//                   px-8 py-3 rounded-full font-semibold transition-all duration-300
//                   ${selectedPlan === plan.name 
//                     ? 'bg-gray-900 text-white scale-105 shadow-lg' 
//                     : 'bg-white text-gray-600 hover:bg-gray-100'
//                   }
//                 `}
//               >
//                 {plan.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Pricing Table */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative rounded-2xl bg-white overflow-hidden transition-all duration-300
//                 ${selectedPlan === plan.name 
//                   ? 'ring-2 ring-blue-500 scale-105 shadow-xl' 
//                   : 'hover:scale-102 shadow-lg'
//                 }
//               `}
//             >
//               {/* Top Selection Button */}
//               <button
//                 onClick={() => setSelectedPlan(plan.name)}
//                 className={`w-full py-3 px-6 font-semibold transition-all
//                   ${
//                     selectedPlan === plan.name
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                   }`}
//               >
//                 {selectedPlan === plan.name ? '✓ Selected' : `Select ${plan.name}`}
//               </button>

//               {/* Black Background Header */}
//               <div className="bg-gray-900 text-white text-center p-8">
//                 {plan.highlight && (
//                   <div className="mb-4">
//                     <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
//                       {plan.tagline}
//                     </span>
//                   </div>
//                 )}
//                 <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
//                 <p className="text-gray-300">{plan.tagline}</p>
//               </div>
              
//               {/* Features List */}
//               <div className="p-8">
//                 <ul className="space-y-4">
//                   {plan.features.map((feature, index) => (
//                     <li key={index} className="flex items-center space-x-3">
//                       <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
//                       <span className="text-gray-700 flex justify-between w-full">
//                         <span>{feature.label}</span>
//                         <span className="font-semibold">{feature.value}</span>
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="bg-yellow-400 rounded-3xl p-12 text-center transform hover:scale-[1.02] transition-all duration-300">
//           <div className="max-w-3xl mx-auto">
//             <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
//               Ready to get started?
//             </h3>
//             <p className="text-xl text-gray-800 mb-8">
//               Join thousands of businesses already using SyncBook to grow their business
//             </p>
//             <button
//               onClick={() => onGetStarted(selectedPlan)}
//               className="bg-gray-900 hover:bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
//             >
//               Get Started with {selectedPlan}
//             </button>
//           </div>
//         </div>
//         <FAQItem />
//       </div>
//     </section>
//   );
// };

// export default PricingSection;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQItem from './FAQItem';

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState('Diamond');
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Gold',
      features: [
        'Add Category: Upto 1',
        'Advance Booking: 30 days',
        'Accessible History: 90 days',
        'Add Banners/Offers: 3',
        'Add Services: Upto 10',
        'Support: Email',
        'Link can be used with: GMB',
      ],
    },
    {
      name: 'Diamond',
      features: [
        'Add Category: Upto 2',
        'Advance Booking: 15 days',
        'Accessible History: 180 days',
        'Add Banners/Offers: 5',
        'Add Services: Upto 25',
        'Support: WhatsApp',
        'Link can be used with: Website',
      ],
    },
    {
      name: 'Platinum',
      features: [
        'Add Category: Upto 3',
        'Advance Booking: 30 days',
        'Accessible History: 360 days',
        'Add Banners/Offers: 10',
        'Add Services: Upto 50',
        'Support: Call',
        'Link can be used with: QR Code',
      ],
    },
  ];

  return (
    <section className="bg-yellow-50 py-12 px-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        Choose Plan to Upgrade/Downgrade
      </h2>
      <p className="text-sm sm:text-md md:text-lg text-gray-600 mb-8 text-center">
        Choose the best plan to elevate your business. Flexible and affordable
        options tailored to your needs.
      </p>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center mb-10 space-x-2 sm:space-x-4">
        {plans.map((plan) => (
          <button
            key={plan.name}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activePlan === plan.name
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-white'
            }`}
            onClick={() => setActivePlan(plan.name)}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Cards 
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">*/}
<div className="flex flex-col md:flex-row justify-center items-stretch gap-6">

         {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg shadow-lg p-4 sm:p-6 text-left transition-transform transform ${
              activePlan === plan.name
                ? 'border-4 border-white scale-105'
                : 'hover:shadow-2xl'
            } bg-white`}
          >
            {/* <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              {plan.name}
            </h3> */}
             <div className="bg-gray-900 text-white text-center rounded-t-lg py-4">
              <h3 className="text-xl font-bold uppercase">{plan.name}</h3>
              <p className="text-sm mt-2">
                                 {plan.isFree
                   ? "The essential tools you need to start your business."
                  : "Everything you need to grow and manage your business."}
               </p>
             </div>
            <ul className="text-gray-700 space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 text-md sm:text-lg font-semibold rounded-full transition-all duration-300 ${
                activePlan === plan.name
                  ? 'bg-pink-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Select {plan.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-400 rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Ready to Upgrade?
          </h1>

          <div className="max-w-2xl">
            <p className="text-md sm:text-lg md:text-xl text-gray-900">
              Unlock advanced features and grow your business today.
            </p>
          </div>

          <button
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 ease-in-out"
            onClick={() => navigate('/share')}
          >
            Get started
          </button>
        </div>
      </div>
      <FAQItem />
    </section>
  );
};

export default PricingSection;
