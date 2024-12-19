
// import React, { useState } from "react";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
// import { IoIosArrowDown } from "react-icons/io";

// export const Navlinks = [
//   {
//     id: 1,
//     name: "HOME",
//     link: "/",
//   },
//   {
//     id: 2,
//     name: "SERVICES",
//     subMenu: [
//       { name: "Haircut", link: "/services/haircut" },
//       { name: "Nails", link: "/services/nails" },
//       { name: "Massage", link: "/services/massage" },
//       { name: "Facial", link: "/services/facial" },
//       { name: "Spa", link: "/services/spa" },
//       { name: "Coloring", link: "/services/coloring" },
//       { name: "Makeup", link: "/services/makeup" },
//       { name: "Waxing", link: "/services/waxing" },
//     ],
//   },
//   {
//     id: 3,
//     name: "CATEGORIES",
//     subMenu: [
//       { name: "Astrology", link: "/categories/astrology" },
//       { name: "Tarot card reader", link: "/categories/tarot-card-reader" },
//       { name: "Beautician", link: "/categories/beautician" },
//       { name: "Makeup artist", link: "/categories/makeup-artist" },
//       { name: "Mehendi artist", link: "/categories/mehendi-artist" },
//       { name: "Tattoo artist", link: "/categories/tattoo-artist" },
//       { name: "Hair salons", link: "/categories/hair-salons" },
//     ],
//   },
//   {
//     id: 4,
//     name: "CONTACT",
//     link: "/contactus",
//   },
//   {
//     id: 5,
//     name: "PRICING",
//     link: "/pricing",
//   },
// ];

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [dropdown, setDropdown] = useState(null);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const toggleDropdown = (id) => {
//     setDropdown(dropdown === id ? null : id);
//   };

//   return (
//     <div className="relative z-10 shadow-md w-full bg-white text-black">
//       <div className="container mx-auto py-2 px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div>
//             <span className="text-3xl font-bold font-serif text-black hover:text-primary transition-colors duration-300">
//               SyncBook
//             </span>
//           </div>
//           {/* Desktop Navigation */}
//           <nav className="hidden md:block">
//             <ul className="flex items-center gap-8">
//               {Navlinks.map(({ id, name, link, subMenu }) => (
//                 <li
//                   key={id}
//                   className="relative group"
//                   onMouseEnter={() => setDropdown(id)}
//                   onMouseLeave={() => setDropdown(null)}
//                 >
//                   <a
//                     href={link || "#"}
//                     className="text-lg font-medium flex items-center gap-2 text-black hover:text-primary transition-colors duration-300"
//                   >
//                     {name}
//                     {subMenu && (
//                       <IoIosArrowDown className="text-gray-500 group-hover:text-primary transition-colors duration-300" />
//                     )}
//                   </a>
//                   {subMenu && dropdown === id && (
//                     <ul className="absolute top-full left-0 bg-gray-800 text-gray-200 py-2 shadow-lg rounded-md w-48">
//                       {subMenu.map((item, index) => (
//                         <li
//                           key={index}
//                           className="px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300"
//                         >
//                           <a
//                             href={item.link}
//                             className="block transition-colors duration-300"
//                           >
//                             {item.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           {/* Mobile Navigation */}
//           <div className="flex items-center gap-4 md:hidden">
//             {showMenu ? (
//               <HiMenuAlt1
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             ) : (
//               <HiMenuAlt3
//                 onClick={toggleMenu}
//                 className="cursor-pointer transition-all"
//                 size={30}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Mobile Dropdown Menu */}
//       {showMenu && (
//         <div className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col gap-4 p-4">
//             {Navlinks.map(({ id, name, link, subMenu }) => (
//               <li key={id} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(id)}
//                   className="w-full text-left text-lg font-medium flex justify-between items-center text-black hover:text-primary transition-colors duration-300"
//                 >
//                   {name}
//                   {subMenu && (
//                     <IoIosArrowDown
//                       className={`text-white transition-transform duration-300 ${
//                         dropdown === id ? "rotate-180" : "rotate-0"
//                       }`}
//                     />
//                   )}
//                 </button>
//                 {subMenu && dropdown === id && (
//                   <ul className="bg-gray-800 mt-2 rounded-md shadow-md">
//                     {subMenu.map((item, index) => (
//                       <li
//                         key={index}
//                         className="px-4 py-2 hover:bg-gray-700 hover:text-primary transition-colors duration-300"
//                       >
//                         <a
//                           href={item.link}
//                           className="block transition-colors duration-300"
//                         >
//                           {item.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SERVICES",
    subMenu: [
      { name: "Haircut", link: "/services/haircut" },
      { name: "Nails", link: "/services/nails" },
      { name: "Massage", link: "/services/massage" },
      { name: "Facial", link: "/services/facial" },
      { name: "Spa", link: "/services/spa" },
      { name: "Coloring", link: "/services/coloring" },
      { name: "Makeup", link: "/services/makeup" },
      { name: "Waxing", link: "/services/waxing" },
    ],
  },
  {
    id: 3,
    name: "CATEGORIES",
    subMenu: [
      { name: "Astrology", link: "/categories/astrology" },
      { name: "Tarot card reader", link: "/categories/tarot-card-reader" },
      { name: "Beautician", link: "/categories/beautician" },
      { name: "Makeup artist", link: "/categories/makeup-artist" },
      { name: "Mehendi artist", link: "/categories/mehendi-artist" },
      { name: "Tattoo artist", link: "/categories/tattoo-artist" },
      { name: "Hair salons", link: "/categories/hair-salons" },
    ],
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/contactus",
  },
  {
    id: 5,
    name: "PRICING",
    link: "/pricing",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = (id) => {
    setDropdown(dropdown === id ? null : id);
  };

  return (
    <div className="relative z-10 shadow-md w-full bg-white text-black">
      <div className="container mx-auto py-2 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <span className="text-3xl font-bold font-serif text-black hover:text-primary transition-colors duration-300">
              SyncBook
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link, subMenu }) => (
                <li
                  key={id}
                  className="relative group"
                  onMouseEnter={() => setDropdown(id)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <a
                    href={link || "#"}
                    className="text-lg font-medium flex items-center gap-2 text-black hover:text-primary transition-colors duration-300"
                  >
                    {name}
                    {subMenu && (
                      <IoIosArrowDown className="text-gray-500 group-hover:text-primary transition-colors duration-300" />
                    )}
                  </a>
                  {subMenu && dropdown === id && (
                    <ul className="absolute top-full left-0 bg-gray-800 text-gray-200 py-2 shadow-lg rounded-md w-96 flex">
                      <div className="w-1/2">
                        {subMenu.slice(0, Math.ceil(subMenu.length / 2)).map((item, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                          >
                            <a href={item.link} className="block transition-colors duration-300">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </div>
                      <div className="w-1/2">
                        {subMenu.slice(Math.ceil(subMenu.length / 2)).map((item, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                          >
                            <a href={item.link} className="block transition-colors duration-300">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {Navlinks.map(({ id, name, link, subMenu }) => (
              <li key={id} className="relative">
                <button
                  onClick={() => toggleDropdown(id)}
                  className="w-full text-left text-lg font-medium flex justify-between items-center text-black hover:text-primary transition-colors duration-300"
                >
                  {name}
                  {subMenu && (name === "SERVICES" || name === "CATEGORIES") && (
                    <IoIosArrowDown
                      className={`text-black transition-transform duration-300 ${
                        dropdown === id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>
                {subMenu && dropdown === id && (
                  <ul className="bg-gray-200 mt-2 rounded-md shadow-md">
                    {subMenu.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-300 hover:text-primary transition-colors duration-300"
                      >
                        <a
                          href={item.link}
                          className="block transition-colors duration-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
