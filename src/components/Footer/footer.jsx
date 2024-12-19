// import React from "react";

// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
// } from "react-icons/fa";

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/#",
//   },
//   {
//     title: "About",
//     link: "/aboutus",
//   },
//   {
//     title: "Contact",
//     link: "/contactus",
//   },
//   {
//     title: "Blog",
//     link: "/#blog",
//   },
// ];
// const Footer = () => {
//   return (
//     <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
//       <section className="container">
//         <div className=" grid md:grid-cols-3 py-5">
//           {/* company Details */}
//           <div className=" py-8 px-4 ">
//             <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
//             SyncBook-Mark-Web
//             </h1>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Possimus, voluptate.{" "}
//             </p>
//             <br />
//             <div className="flex items-center gap-3">
//               <FaLocationArrow />
//               <p>Noida, Uttar Pradesh</p>
//             </div>
//             <div className="flex items-center gap-3 mt-3">
//               <FaMobileAlt />
//               <p>+91 123456789</p>
//             </div>
//             {/* Social Handle */}
//             <div className="flex items-center gap-3 mt-6">
//               <a href="#">
//                 <FaInstagram className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaFacebook className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaLinkedin className="text-3xl hover:text-primary duration-300" />
//               </a>
//             </div>
//           </div>


//           {/* Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Important Links
//                 </h1>
//                 <ul className={`flex flex-col gap-3`}>
//                   {FooterLinks.map((link) => (
//                     <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
//                       <span>&#11162;</span>
//                       <span>{link.title}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Links
//                 </h1>
//                 <ul className="flex flex-col gap-3">
//                   {FooterLinks.map((link) => (
//                     <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
//                       <span>&#11162;</span>
//                       <span>{link.title}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="">
//               <div className="py-8 px-4 ">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Location
//                 </h1>
//                 {/* <ul className="list-disc list-inside"> */}
//                 <ul className="flex flex-col gap-3">
//                   {FooterLinks.map((link) => (
//                     <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
//                       <span>&#11162;</span>
//                       <span>{link.title}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//     </section>

//       <div className="footer bg-gray-200 py-4 w-full">
//           <div className="max-w-screen-xl mx-auto px-4 text-center">
//             <h1 className="text-gray-700 text-base sm:text-lg font-medium">
//               Powered by{" "}
//               <a
//                 href="#"
//                 className="text-blue-800 hover:text-primary font-semibold transition duration-300"
//               >
//                 Sync Solutions
//               </a>
//             </h1>
//             <p className="text-gray-600 text-sm mt-2">
//               &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
//             </p>
//           </div>
//         </div>

//     </div>
//   );
// };

// export default Footer;
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from React Router
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
//   FaGooglePlay,
//   FaApple

// } from "react-icons/fa";

// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "About",
//     link: "/aboutus",
//   },
//   {
//     title: "Contact",
//     link: "/contactus",
//   },
//   {
//     title: "QR Code",
//     link: "/share",
//   },
//   {
//     title: "Blog",
//     link: "/blog",
//   },
// ];

// const Footer = () => {
//   return (
//     <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
//       <section className="container">
//         <div className="grid md:grid-cols-3 py-5">
//           {/* Company Details */}
//           <div className="py-8 px-4">
//             <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
//               SyncBook-Mark-Web
//             </h1>
//             <p className="text-sm">
//               Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Possimus, voluptate.
//             </p>
//             <br />
//             <div className="flex items-center gap-3">
//               <FaLocationArrow />
//               <p>Noida, Uttar Pradesh</p>
//             </div>
//             <div className="flex items-center gap-3 mt-3">
//               <FaMobileAlt />
//               <p>+91 123456789</p>
//             </div>
//             {/* Social Handles */}
//             <div className="flex items-center gap-3 mt-6">
//               <a href="#">
//                 <FaInstagram className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaFacebook className="text-3xl hover:text-primary duration-300" />
//               </a>
//               <a href="#">
//                 <FaLinkedin className="text-3xl hover:text-primary duration-300" />
//               </a>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
//             <div>
//               <div className="py-8 px-4">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Important Links
//                 </h1>
//                 <ul className="flex flex-col gap-3">
//                   {FooterLinks.map((link, index) => (
//                     <li key={index} className="text-gray-500 dark:text-gray-200">
//                       <Link
//                         to={link.link}
//                         className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
//                       >
//                         {link.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             {/* Duplicate Links */}
//             <div>
//               <div className="py-8 px-4">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Links
//                 </h1>
//                 <ul className="flex flex-col gap-3">
//                   {FooterLinks.map((link, index) => (
//                     <li key={index} className="text-gray-500 dark:text-gray-200">
//                       <Link
//                         to={link.link}
//                         className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
//                       >
//                         {link.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             {/* Location */}
//             <div>
//               <div className="py-8 px-4">
//                 <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
//                   Location
//                 </h1>
//                 <ul className="flex flex-col gap-3">
//                   {FooterLinks.map((link, index) => (
//                     <li key={index} className="text-gray-500 dark:text-gray-200">
//                       <Link
//                         to={link.link}
//                         className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
//                       >
//                         {link.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-8">
//              <h3 className="text-lg font-semibold mb-4">Download on mobile</h3>
//                <div className="space-y-3">
//                  <a
//                    href="#"
//                    className="flex items-center gap-2 text-gray-500 hover:text-primary"
//                  >
//                    <FaGooglePlay className="text-2xl" />
//                    <span>Google Play</span>
//                  </a>
//                  <a
//                    href="#"
//                    className="flex items-center gap-2 text-gray-500 hover:text-primary"
//                  >
//                    <FaApple className="text-2xl" />
//                    <span>App Store</span>
//                  </a>
//                </div>
//              </div>
//               </div>
//             </div>


            

//           </div>
//         </div>
//       </section>

         

//       <div className="footer bg-gray-200 py-4 w-full">
//         <div className="max-w-screen-xl mx-auto px-4 text-center">
//           <h1 className="text-gray-700 text-base sm:text-lg font-medium">
//             Powered by{" "}
//             <a
//               href="#"
//               className="text-blue-800 hover:text-primary font-semibold transition duration-300"
//             >
//               Sync Solutions
//             </a>
//           </h1>
//           <p className="text-gray-600 text-sm mt-2">
//             &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/aboutus",
  },
  {
    title: "Contact",
    link: "/contactus",
  },
  {
    title: "QR Code",
    link: "/share",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-300 mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              SyncBook-Mark-Web
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Duplicate Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Location */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Download on mobile</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                      <FaGooglePlay className="text-2xl" />
                      <span>Google Play</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                      <FaApple className="text-2xl" />
                      <span>App Store</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer bg-gray-200 dark:bg-gray-800 py-4 w-full">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium">
            Powered by{" "}
            <a
              href="#"
              className="text-blue-800 dark:text-primary hover:text-primary font-semibold transition duration-300"
            >
              Sync Solutions
            </a>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;




// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
//   FaGooglePlay,
//   FaApple
// } from "react-icons/fa";

// const Features = [
//   { title: "Appointments", link: "/appointments" },
//   { title: "Reminders", link: "/reminders" },
//   { title: "Online booking", link: "/booking" },
//   { title: "Reports", link: "/reports" },
//   { title: "Payments", link: "/payments" },
//   { title: "Card readers", link: "/card-readers" },
//   { title: "Calendar sync", link: "/calendar" },
//   { title: "Client management", link: "/clients" },
//   { title: "Centralized communication", link: "/communication" },
//   { title: "Services", link: "/services" },
//   { title: "Marketing", link: "/marketing" },
//   { title: "Reserve with Google", link: "/google-reserve" }
// ];

// const Customers = [
//   { title: "Acupuncturists", link: "/acupuncturists" },
//   { title: "Auto detailers", link: "/auto-detailers" },
//   { title: "Barbers", link: "/barbers" },
//   { title: "Braiders & Locticians", link: "/braiders" },
//   { title: "Bridal Shops", link: "/bridal" },
//   { title: "Estheticians", link: "/estheticians" },
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
//     <div className="bg-gray-900 text-white mt-14 rounded-t-3xl">
//       <section className="container max-w-7xl mx-auto px-4">
//         <div className="grid md:grid-cols-5 py-12 gap-8">
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
//           <div className="col-span-2">
//             <h2 className="text-xl font-bold mb-4">Customers</h2>
//             <div className="grid grid-cols-2 gap-2">
//               {Customers.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.link}
//                   className="text-gray-300 hover:text-white hover:translate-x-1 duration-300 block"
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Goldie Column */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Goldie</h2>
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
//                   support@heygoldie.com
//                 </a>
//               </li>
//             </ul>

//             <div className="mt-8">
//               <h3 className="text-lg font-semibold mb-4">Download on mobile</h3>
//               <div className="space-y-3">
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white"
//                 >
//                   <FaGooglePlay className="text-2xl" />
//                   <span>Google Play</span>
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 text-gray-300 hover:text-white"
//                 >
//                   <FaApple className="text-2xl" />
//                   <span>App Store</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="border-t border-gray-800 py-4">
//         <div className="container max-w-7xl mx-auto px-4 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Goldie. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;