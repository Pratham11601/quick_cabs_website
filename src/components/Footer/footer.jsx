// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
//   FaGooglePlay,
//   FaApple,
//   FaShareAlt
// } from "react-icons/fa";

// const Features = [
//   { title: "Appointments", link: "/appointments" },
//   { title: "Reports", link: "/reports" },
//   { title: "Payments", link: "/payments" },
//   { title: "Card readers", link: "/card-readers" },
//   { title: "Client management", link: "/clients" },
//   { title: "Centralized communication", link: "/communication" },
//   { title: "Services", link: "/services" },
//   { title: "Marketing", link: "/marketing" },
//   { title: "Reserve with Google", link: "/google-reserve" }
// ];

// const Customers = [
//   { title: "Hairstylists", link: "/hairstylists" },
//   { title: "Hair removal technicians", link: "/hair-removal" },
//   { title: "Lash artists", link: "/lash-artists" },
//   { title: "Makeup artists", link: "/makeup" },
//   { title: "Massage therapists", link: "/massage" },
//   { title: "Nail artists", link: "/nail-artists" }
// ];

// const GoldieLinks = [
//   { title: "Pricing", link: "/pricing" },
//   { title: "Referral program", link: "/referral" },
//   { title: "Blog", link: "/blog" },
//   { title: "Terms & conditions", link: "/terms" },
//   { title: "Privacy policy", link: "/privacy" },
//   { title: "Referral policy", link: "/referral-policy" }
// ];

// const Support = [
//   { title: "Help center", link: "/help" },
//   { title: "Getting started", link: "/getting-started" }
// ];

// const Footer = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-14 rounded-t-3xl">
//       <section className="container max-w-7xl mx-auto px-4">
//         <div className="grid md:grid-cols-5 py-12 gap-8">

//           {/* Company Details Section */}
//           <div className="py-8 px-4">
//             <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif text-primary">
//               SyncBook
//             </h1>
//             <p className="text-sm mb-4">
//               Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
//             </p>
//             <div className="flex items-center gap-3 mb-3">
//               <FaLocationArrow className="text-lg text-primary" />
//               <p>Noida, Uttar Pradesh</p>
//             </div>
//             <div className="flex items-center gap-3 mb-3">
//               <FaMobileAlt className="text-lg text-primary" />
//               <p>+91 123456789</p>
//             </div>
//             {/* Social Handles */}
//             <div className="flex items-center gap-4 mt-6">
//               <a href="#" className="text-3xl hover:text-primary duration-300">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="text-3xl hover:text-primary duration-300">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-3xl hover:text-primary duration-300">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Features Column */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Features</h2>
//             <ul className="space-y-2">
//               {Features.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.link}
//                     className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Customers Column */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Customers</h2>
//             {Customers.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.link}
//                 className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </div>

//           {/* Goldie Column */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">SyncBook</h2>
//             <ul className="space-y-2">
//               {GoldieLinks.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.link}
//                     className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Support Column */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Support</h2>
//             <ul className="space-y-2">
//               {Support.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.link}
//                     className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <a href="mailto:support@heygoldie.com" className="text-gray-300 hover:text-white">
//                   support@SyncBook.com
//                 </a>
//               </li>
//             </ul>


//             <div className="mt-8">
//               {/*Download on mobile */}
//               <h3 className="text-lg font-semibold mb-4">Download on mobile</h3>
//               {/* QR Code Link */}
//                 <Link
//                   to="/share"
//                   className="text-gray-300 hover:text-white flex items-left justify-left gap-2 mb-4"
//                 >
//                   QR Code
//                 </Link>

//                 {/* Mobile Download Options below the QR Code */}
//                 <div className="flex flex-col items-left">
//                   <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white mb-2">
//                     <FaGooglePlay className="text-2xl" />
//                     <span>Google Play</span>
//                   </a>
//                   <a href="#" className="flex items-left gap-2 text-gray-300 hover:text-white">
//                     <FaApple className="text-2xl" />
//                     <span>App Store</span>
//                   </a>
//                 </div>
//               </div>
//              </div>

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
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGooglePlay,
  FaApple,
  FaShareAlt
} from "react-icons/fa";

const Features = [
  { title: "Appointments", link: "/appointments" },
  { title: "Reports", link: "/reports" },
  { title: "Payments", link: "/payments" },
  { title: "Card readers", link: "/card-readers" },
  { title: "Client management", link: "/clients" },
  { title: "Centralized communication", link: "/communication" },
  { title: "Services", link: "/services" },
  { title: "Marketing", link: "/marketing" },
  { title: "Reserve with Google", link: "/google-reserve" }
];

const Customers = [
  { title: "Hairstylists", link: "/hairstylists" },
  { title: "Hair removal technicians", link: "/hair-removal" },
  { title: "Lash artists", link: "/lash-artists" },
  { title: "Makeup artists", link: "/makeup" },
  { title: "Massage therapists", link: "/massage" },
  { title: "Nail artists", link: "/nail-artists" }
];

const GoldieLinks = [
  { title: "Pricing", link: "/pricing" },
  { title: "Referral program", link: "/referral" },
  { title: "Blog", link: "/blog" },
  { title: "Terms & conditions", link: "/terms" },
  { title: "Privacy policy", link: "/privacy" },
  { title: "About Us", link: "/aboutus" }
];

const Support = [
  { title: "Help center", link: "/help" },
  { title: "Getting started", link: "/#" }
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white mt-14 rounded-t-3xl">
      <section className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 py-12 gap-8">

          {/* Company Details Section moved to top */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif text-primary">
              SyncBook
            </h1>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow className="text-lg text-primary" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaMobileAlt className="text-lg text-primary" />
              <p>+91 123456789</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              {Features.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customers Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customers</h2>
            {Customers.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Goldie Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">SyncBook</h2>
            <ul className="space-y-2">
              {GoldieLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              {Support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:support@syncbook.com" className="text-gray-300 hover:text-white">
                  support@SyncBook.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              {/* Download on mobile */}
              <h3 className="text-lg font-semibold mb-4">Download on mobile</h3>
              {/* QR Code Link */}
              <Link
                to="/share"
                className="text-gray-300 hover:text-white flex items-left justify-left gap-2 mb-4"
              >
                QR Code
              </Link>

              {/* Mobile Download Options below the QR Code */}
              <div className="flex flex-col items-left">
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white mb-2">
                  <FaGooglePlay className="text-2xl" />
                  <span>Google Play</span>
                </a>
                <a href="#" className="flex items-left gap-2 text-gray-300 hover:text-white">
                  <FaApple className="text-2xl" />
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="border-t border-gray-800 py-4">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
