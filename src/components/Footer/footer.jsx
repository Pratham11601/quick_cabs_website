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
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
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
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
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
                    <li key={index} className="text-gray-500 dark:text-gray-200">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
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
                    <li key={index} className="text-gray-500 dark:text-gray-200">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
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
                    <li key={index} className="text-gray-500 dark:text-gray-200">
                      <Link
                        to={link.link}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer bg-gray-200 py-4 w-full">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-gray-700 text-base sm:text-lg font-medium">
            Powered by{" "}
            <a
              href="#"
              className="text-blue-800 hover:text-primary font-semibold transition duration-300"
            >
              Sync Solutions
            </a>
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            &copy; {new Date().getFullYear()} Sync Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
