// import React from "react";
// //import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


// const Footer = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-800 via-blue-400 to-black text-white mt-14 rounded-t-3xl">
//       <section className="container max-w-7xl mx-auto px-4">
//        {/* Company Section */}
//        <div className="flex-1">
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
//       </section>

//       <div className="border-t border-gray-800 py-4">
//         <div className="container max-w-7xl mx-auto px-4 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
//import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-400 to-black text-white mt-14 rounded-t-3xl">
      <section className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Section */}
          <div className="flex-1 min-w-[200px]">
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
          <div className="flex-1 min-w-[200px]">
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
          <div className="flex-1 min-w-[200px]">
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
      </section>

      <div className="border-t border-gray-800 py-4">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-100">
          <p>&copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
