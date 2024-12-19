
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
import { Link } from "react-router-dom";
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
      {
        name: "Haircut",
        link: "/services/haircut",
        images: {
          first_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
          second_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
          third_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
          fourth_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg"
        },
        icon: "✂️",
        description: "Professional haircut services.",
        features: [
          "Precision cutting techniques",
          "Styling for all hair types",
          "Consultation included"
        ],
        targetAudience: "Men, Women, and Children",
        recommendedProducts: ["Hair Gel", "Hair Spray"]
      },
      {
        name: "Nails",
        link: "/services/nails",
        images: {
          first_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
          second_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
          third_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
          fourth_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg"
        },
        icon: "💅",
        description: "Beautiful nail treatments.",
        features: [
          "Manicure and Pedicure options",
          "Nail art and designs available",
          "Organic products used"
        ],
        targetAudience: "All ages",
        recommendedProducts: ["Nail Polish", "Cuticle Oil"]
      },
      {
        name: "Massage",
        link: "/services/massage",
        images: {
          first_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
          second_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
          third_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
          fourth_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg"
        },
        icon: "💆",
        description: "Relaxing massage therapies.",
        features: [
          "Swedish, Deep Tissue, and Aromatherapy options",
          "Customized massage experience",
          "Trained therapists"
        ],
        targetAudience: "Adults seeking relaxation and relief from stress",
        recommendedProducts: ["Massage Oil", "Essential Oils"]
      },
      {
        name: "Facial",
        link: "/services/facial",
        images: {
          first_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
          second_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
          third_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
          fourth_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg"
        },
        icon: "🧖",
        description: "Rejuvenating facial treatments.",
        features: [
          "Cleansing and exfoliation",
          "Hydrating masks tailored to skin type",
          "Anti-aging treatments available"
        ],
        targetAudience: "Individuals looking to improve skin health",
        recommendedProducts: ["Moisturizer", "Sunscreen"]
      },
      {
        name: "Spa",
        link: "/services/spa",
        images: {
          first_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
          second_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
          third_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
          fourth_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg"
        },
        icon: "🛁",
        description: "Luxurious spa experiences.",
        features: [
          "Full body treatments available",
          "Relaxation areas with soothing ambiance",
          "Package deals for couples"
        ],
        targetAudience: "Anyone seeking a luxurious escape",
        recommendedProducts: ["Body Scrub", "Bath Salts"]
      },
      {
        name: "Coloring",
        link: "/services/coloring",
        images: {
          first_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
          second_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
          third_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
          fourth_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg"
        },
        icon: "🎨",
        description: "Vibrant hair coloring options.",
        features: [
          "Highlights, Balayage, and Ombre techniques available",
          "Color matching consultation provided",
          "Use of high-quality hair dyes"
        ],
        targetAudience: "Anyone looking to change their hair color dramatically or subtly",
        recommendedProducts: ["Color Protect Shampoo", "Conditioner"]
      },
      {
        name: "Makeup",
        link: "/services/makeup",
        images: {
          first_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
          second_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
          third_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
          fourth_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg"
        },
        icon: "💄",
        description: "Professional makeup services.",
        features: [
          "Bridal and event makeup available",
          "Customized looks based on client preferences",
          "High-quality makeup products used"
        ],
        targetAudience: "Individuals preparing for special occasions or events",
        recommendedProducts: ["Foundation", "Setting Spray"]
      },
      {
        name: "Waxing",
        link: "/services/waxing",
        images: {
          first_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
          second_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
          third_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
          fourth_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg"
        },
        icon: "🕯️",
        description: "Smooth waxing solutions.",
        features: [
          "Full body waxing options available",
          "Gentle techniques to minimize discomfort",
          "Post-wax care products offered"
        ],
        targetAudience: "Anyone seeking smooth skin without shaving hassle.",
        recommendedProducts: ["After Wax Lotion", "Exfoliating Scrub"]
      }
    ]
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
                    onClick={() => setDropdown(id)}
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
                            <Link to={item.link} state={item}>
                            <p className="block transition-colors duration-300">
                              {item.name}
                            </p>
                            </Link>
                          </li>
                        ))}
                      </div>
                      <div className="w-1/2">
                        {subMenu.slice(Math.ceil(subMenu.length / 2)).map((item, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                          >
                            <Link to={item.link} state={item}>
                            <p className="block transition-colors duration-300">
                              {item.name}
                            </p>
                            </Link>
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
