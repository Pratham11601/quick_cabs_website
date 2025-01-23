// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-400 text-white ">
//       <div className="w-full mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 z-50">
//         {/* Company Section */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">COMPANY</h3>
//           <ul className="space-y-3">
//             <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
//             <li><a href="/media" className="hover:text-gray-200">Media Coverage</a></li>
//             <li><a href="/careers" className="hover:text-gray-200">Careers</a></li>
//             <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
//             <li><a href="/terms" className="hover:text-gray-200">Terms & Conditions</a></li>
//             <li><a href="/refunds" className="hover:text-gray-200">Refunds</a></li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">SERVICES</h3>
//           <ul className="space-y-3">
//             <li><a href="/local-car-rentals" className="hover:text-gray-200">Local Car Rentals</a></li>
//             <li><a href="/outstation-taxi" className="hover:text-gray-200">Outstation Taxi</a></li>
//             <li><a href="/one-way-cabs" className="hover:text-gray-200">One way cabs</a></li>
//             <li><a href="/corporate-car-rental" className="hover:text-gray-200">Corporate Car Rental</a></li>
//             <li><a href="/airport-taxi" className="hover:text-gray-200">Airport Taxi</a></li>
//             <li><a href="/tempo-travellers" className="hover:text-gray-200">Tempo Travellers and Minibuses</a></li>
//           </ul>
//         </div>

//         {/* Get in Touch Section */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
//           <ul className="space-y-3 mb-6">
//             <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
//             <li><a href="/travel-agent" className="hover:text-gray-200">Travel Agent</a></li>
//             <li><a href="/sitemap" className="hover:text-gray-200">Sitemap</a></li>
//             <li><a href="/xml-sitemap" className="hover:text-gray-200">XML Sitemap</a></li>
//           </ul>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22 3.999c-.78.463-1.62.775-2.5.913a4.344 4.344 0 0 0 1.524-1.912c-.67.397-1.41.684-2.197.84a4.13 4.13 0 0 0-3.144-1.34A4.163 4.163 0 0 0 11.5 6.754c0 .325.035.642.105.947A11.767 11.767 0 0 1 3.347 3.06a4.16 4.16 0 0 0 1.27 5.548 4.12 4.12 0 0 1-1.858-.514v.052a4.163 4.163 0 0 0 3.313 4.08 4.13 4.13 0 0 1-1.853.07 4.164 4.164 0 0 0 3.883 2.892A8.358 8.358 0 0 1 2 16.798a11.717 11.717 0 0 0 6.382 1.872c7.66 0 11.84-6.346 11.84-11.84 0-.18-.003-.36-.012-.538A8.394 8.394 0 0 0 22 3.999z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 py-4 text-center">
//           <p>© Copyright Sync Solution.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";

// const Footer = () => {
//   return (
//     // <footer className="bg-blue-400 text-white z-50">
//     <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-14 rounded-t-3xl">
//       <div className="w-full mx-auto px-4 py-12 flex justify-between items-start gap-8">
//         {/* Left-aligned Company Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">COMPANY</h3>
//           <ul className="space-y-3">
//             <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
//             <li><a href="/media" className="hover:text-gray-200">Media Coverage</a></li>
//             <li><a href="/careers" className="hover:text-gray-200">Careers</a></li>
//             <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
//             <li><a href="/terms" className="hover:text-gray-200">Terms & Conditions</a></li>
//             <li><a href="/refunds" className="hover:text-gray-200">Refunds</a></li>
//           </ul>
//         </div>

//         {/* Left-aligned Services Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">SERVICES</h3>
//           <ul className="space-y-3">
//             <li><a href="/local-car-rentals" className="hover:text-gray-200">Local Car Rentals</a></li>
//             <li><a href="/outstation-taxi" className="hover:text-gray-200">Outstation Taxi</a></li>
//             <li><a href="/one-way-cabs" className="hover:text-gray-200">One way cabs</a></li>
//             <li><a href="/corporate-car-rental" className="hover:text-gray-200">Corporate Car Rental</a></li>
//             <li><a href="/airport-taxi" className="hover:text-gray-200">Airport Taxi</a></li>
//             <li><a href="/tempo-travellers" className="hover:text-gray-200">Tempo Travellers and Minibuses</a></li>
//           </ul>
//         </div>

//         {/* Left-aligned Get in Touch Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
//           <ul className="space-y-3 mb-6">
//             <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
//             <li><a href="/travel-agent" className="hover:text-gray-200">Travel Agent</a></li>
//             <li><a href="/sitemap" className="hover:text-gray-200">Sitemap</a></li>
//             <li><a href="/xml-sitemap" className="hover:text-gray-200">XML Sitemap</a></li>
//           </ul>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22 3.999c-.78.463-1.62.775-2.5.913a4.344 4.344 0 0 0 1.524-1.912c-.67.397-1.41.684-2.197.84a4.13 4.13 0 0 0-3.144-1.34A4.163 4.163 0 0 0 11.5 6.754c0 .325.035.642.105.947A11.767 11.767 0 0 1 3.347 3.06a4.16 4.16 0 0 0 1.27 5.548 4.12 4.12 0 0 1-1.858-.514v.052a4.163 4.163 0 0 0 3.313 4.08 4.13 4.13 0 0 1-1.853.07 4.164 4.164 0 0 0 3.883 2.892A8.358 8.358 0 0 1 2 16.798a11.717 11.717 0 0 0 6.382 1.872c7.66 0 11.84-6.346 11.84-11.84 0-.18-.003-.36-.012-.538A8.394 8.394 0 0 0 22 3.999z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 py-4 text-center">
//           <p>© Copyright Sync Solution.</p>
//         </div>
//       </div>
//     {/* </footer> */}
//     </div>
//   );
// };

// export default Footer;




// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-400 via-blue-900 to-black text-white mt-14 rounded-t-3xl">
//       <div className="w-full mx-auto px-4 py-12 flex justify-between items-start gap-8">
//         {/* Company Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">COMPANY</h3>
//           <ul className="space-y-3">
//             <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
//             <li><a href="/media" className="hover:text-gray-200">Media Coverage</a></li>
//             <li><a href="/careers" className="hover:text-gray-200">Careers</a></li>
//             <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
//             <li><a href="/terms" className="hover:text-gray-200">Terms & Conditions</a></li>
//             <li><a href="/refunds" className="hover:text-gray-200">Refunds</a></li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">SERVICES</h3>
//           <ul className="space-y-3">
//             <li><a href="/local-car-rentals" className="hover:text-gray-200">Local Car Rentals</a></li>
//             <li><a href="/outstation-taxi" className="hover:text-gray-200">Outstation Taxi</a></li>
//             <li><a href="/one-way-cabs" className="hover:text-gray-200">One-way Cabs</a></li>
//             <li><a href="/corporate-car-rental" className="hover:text-gray-200">Corporate Car Rental</a></li>
//             <li><a href="/airport-taxi" className="hover:text-gray-200">Airport Taxi</a></li>
//             <li><a href="/tempo-travellers" className="hover:text-gray-200">Tempo Travellers and Minibuses</a></li>
//           </ul>
//         </div>

//         {/* Get in Touch Section */}
//         <div className="flex-1">
//           <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
//           <ul className="space-y-3 mb-6">
//             <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
//             <li><a href="/travel-agent" className="hover:text-gray-200">Travel Agent</a></li>
//             <li><a href="/sitemap" className="hover:text-gray-200">Sitemap</a></li>
//             <li><a href="/xml-sitemap" className="hover:text-gray-200">XML Sitemap</a></li>
//           </ul>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-200">
//               <FaInstagram className="text-2xl" />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaFacebook className="text-2xl" />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaLinkedin className="text-2xl" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="border-t border-gray-700 py-4">
//         <p className="text-center text-gray-400">
//           &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;





import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-400 via-blue-900 to-black text-white mt-14 rounded-t-3xl z-50">
      <div className="w-full mx-auto px-4 py-12 flex justify-between items-start gap-8 z-50">
        {/* Company Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">COMPANY</h3>
          <ul className="space-y-3">
            <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
            <li><a href="/media" className="hover:text-gray-200">Media Coverage</a></li>
            <li><a href="/careers" className="hover:text-gray-200">Careers</a></li>
            <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-200">Terms & Conditions</a></li>
            <li><a href="/refunds" className="hover:text-gray-200">Refunds</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-3">
            <li><a href="/local-car-rentals" className="hover:text-gray-200">Local Car Rentals</a></li>
            <li><a href="/outstation-taxi" className="hover:text-gray-200">Outstation Taxi</a></li>
            <li><a href="/one-way-cabs" className="hover:text-gray-200">One-way Cabs</a></li>
            <li><a href="/corporate-car-rental" className="hover:text-gray-200">Corporate Car Rental</a></li>
            <li><a href="/airport-taxi" className="hover:text-gray-200">Airport Taxi</a></li>
            <li><a href="/tempo-travellers" className="hover:text-gray-200">Tempo Travellers and Minibuses</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <ul className="space-y-3 mb-6">
            <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
            <li><a href="/travel-agent" className="hover:text-gray-200">Travel Agent</a></li>
            <li><a href="/sitemap" className="hover:text-gray-200">Sitemap</a></li>
            <li><a href="/xml-sitemap" className="hover:text-gray-200">XML Sitemap</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
