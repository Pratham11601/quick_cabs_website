
import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import image1 from "../../assets/image7.jpg";
import image2 from "../../assets/bride.jpg";
import image3 from "../../assets/makeup1.jpg";
import image4 from "../../assets/image5.jpg";
export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  // {
  //   id: 2,
  //   name: "SERVICES",
  //   subMenu: [
  //     {
  //       name: "Haircut",
  //       link: "/services/haircut",
  //       images: {
  //         first_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
  //         second_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
  //         third_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg",
  //         fourth_img: "https://i.pinimg.com/736x/e4/01/3a/e4013a58101bf93ecd3051d72c4ca53c.jpg"
  //       },
  //       icon: "✂️",
  //       description: "Professional haircut services.",
  //       features: [
  //         "Precision cutting techniques",
  //         "Styling for all hair types",
  //         "Consultation included"
  //       ],
  //       targetAudience: "Men, Women, and Children",
  //       recommendedProducts: ["Hair Gel", "Hair Spray"]
  //     },
  //     {
  //       name: "Nails",
  //       link: "/services/nails",
  //       images: {
  //         first_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
  //         second_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
  //         third_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg",
  //         fourth_img: "https://i.pinimg.com/236x/0a/95/ab/0a95abb7f9cbc9bd62a18e9169122716.jpg"
  //       },
  //       icon: "💅",
  //       description: "Beautiful nail treatments.",
  //       features: [
  //         "Manicure and Pedicure options",
  //         "Nail art and designs available",
  //         "Organic products used"
  //       ],
  //       targetAudience: "All ages",
  //       recommendedProducts: ["Nail Polish", "Cuticle Oil"]
  //     },
  //     {
  //       name: "Massage",
  //       link: "/services/massage",
  //       images: {
  //         first_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
  //         second_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
  //         third_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg",
  //         fourth_img: "https://i.pinimg.com/736x/33/b8/8d/33b88d4dc486a54bad4df94ab98d7314.jpg"
  //       },
  //       icon: "💆",
  //       description: "Relaxing massage therapies.",
  //       features: [
  //         "Swedish, Deep Tissue, and Aromatherapy options",
  //         "Customized massage experience",
  //         "Trained therapists"
  //       ],
  //       targetAudience: "Adults seeking relaxation and relief from stress",
  //       recommendedProducts: ["Massage Oil", "Essential Oils"]
  //     },
  //     {
  //       name: "Facial",
  //       link: "/services/facial",
  //       images: {
  //         first_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
  //         second_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
  //         third_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg",
  //         fourth_img: "https://i.pinimg.com/236x/2d/e2/a3/2de2a3940b7a271e9c19436185002b4d.jpg"
  //       },
  //       icon: "🧖",
  //       description: "Rejuvenating facial treatments.",
  //       features: [
  //         "Cleansing and exfoliation",
  //         "Hydrating masks tailored to skin type",
  //         "Anti-aging treatments available"
  //       ],
  //       targetAudience: "Individuals looking to improve skin health",
  //       recommendedProducts: ["Moisturizer", "Sunscreen"]
  //     },
  //     {
  //       name: "Spa",
  //       link: "/services/spa",
  //       images: {
  //         first_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
  //         second_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
  //         third_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg",
  //         fourth_img: "https://i.pinimg.com/736x/a0/9d/47/a09d470c5451d4b4206e22a2813b0a58.jpg"
  //       },
  //       icon: "🛁",
  //       description: "Luxurious spa experiences.",
  //       features: [
  //         "Full body treatments available",
  //         "Relaxation areas with soothing ambiance",
  //         "Package deals for couples"
  //       ],
  //       targetAudience: "Anyone seeking a luxurious escape",
  //       recommendedProducts: ["Body Scrub", "Bath Salts"]
  //     },
  //     {
  //       name: "Coloring",
  //       link: "/services/coloring",
  //       images: {
  //         first_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
  //         second_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
  //         third_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg",
  //         fourth_img: "https://i.pinimg.com/736x/43/b5/61/43b561f97b3c8fb5b5089b5185accaec.jpg"
  //       },
  //       icon: "🎨",
  //       description: "Vibrant hair coloring options.",
  //       features: [
  //         "Highlights, Balayage, and Ombre techniques available",
  //         "Color matching consultation provided",
  //         "Use of high-quality hair dyes"
  //       ],
  //       targetAudience: "Anyone looking to change their hair color dramatically or subtly",
  //       recommendedProducts: ["Color Protect Shampoo", "Conditioner"]
  //     },
  //     {
  //       name: "Makeup",
  //       link: "/services/makeup",
  //       images: {
  //         first_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
  //         second_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
  //         third_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg",
  //         fourth_img: "https://i.pinimg.com/736x/d8/b9/15/d8b9151584fb89c681d68cc973efeb9c.jpg"
  //       },
  //       icon: "💄",
  //       description: "Professional makeup services.",
  //       features: [
  //         "Bridal and event makeup available",
  //         "Customized looks based on client preferences",
  //         "High-quality makeup products used"
  //       ],
  //       targetAudience: "Individuals preparing for special occasions or events",
  //       recommendedProducts: ["Foundation", "Setting Spray"]
  //     },
  //     {
  //       name: "Waxing",
  //       link: "/services/waxing",
  //       images: {
  //         first_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
  //         second_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
  //         third_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg",
  //         fourth_img: "https://i.pinimg.com/236x/d1/25/51/d1255148f0747db69b5c47bdb793c5eb.jpg"
  //       },
  //       icon: "🕯️",
  //       description: "Smooth waxing solutions.",
  //       features: [
  //         "Full body waxing options available",
  //         "Gentle techniques to minimize discomfort",
  //         "Post-wax care products offered"
  //       ],
  //       targetAudience: "Anyone seeking smooth skin without shaving hassle.",
  //       recommendedProducts: ["After Wax Lotion", "Exfoliating Scrub"]
  //     }
  //   ]
  // },
  {
    id: 3,
    name: "CATEGORIES",
    subMenu: [
      {
        name: "Astrology",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Discover Your Destiny with Expert Astrology",
          img: "	https://i.pinimg.com/736x/23/28/03/232803c12ea29188f1dff35e334cf329.jpg", // Replace with actual image URL
        },
        section1: {
          heading: "Unlock the Secrets of the Stars",
          img: "https://i.pinimg.com/736x/d1/ed/ad/d1edaddd1f225755588208cbbf319f3f.jpg", // Replace with actual image URL
          para1:
            "Our expert astrologers provide insights into your life's path through personalized readings and horoscopes.",
          para2:
            "From understanding your past to navigating your future, our astrology services help you achieve clarity and confidence.",
        },
        section2: {
          heading: "Meet the Astrologer",
          img: "https://i.pinimg.com/236x/06/0e/fa/060efac4c4791fbf60aaeced4aed9c36.jpg", // Replace with actual image URL
          para1:
            "With years of experience, our astrologer brings wisdom and compassion to every consultation.",
          para2: [
            "Specializes in natal charts, compatibility analysis, and career guidance",
            "Offers personalized readings tailored to your unique circumstances",
            "Combines traditional and modern astrology techniques",
          ],
        },
        section3: {
          heading: "Guidance Aligned with the Stars",
          img: "https://i.pinimg.com/736x/1c/d6/44/1cd6445d62129261fe472682c6bf9b27.jpg", // Replace with actual image URL
          para1:
            "Our astrologers continuously refine their expertise to provide accurate and insightful readings.",
          para2:
            "Each session is designed to empower you to make informed decisions with celestial guidance.",
        },
        testimonials: [
          { quote: "The astrology reading helped me find direction in life.", name: "Anna B." },
          { quote: "I gained a deeper understanding of myself. Thank you!", name: "Michael T." },
          { quote: "Highly accurate and insightful. I recommend their services.", name: "Sophia L." },
          { quote: "Their guidance gave me clarity on important life decisions.", name: "Emma K." },
        ],
      },
      {
        name: "Tarot card reader",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Find Clarity with Expert Tarot Card Readings",
          img: "https://i.pinimg.com/236x/9b/ef/b7/9befb7857dadd35d9ec95b9a97d0b949.jpg", // Replace with actual image URL
        },
        section1: {
          heading: "Unlock the Mysteries of Life",
          img: "https://i.pinimg.com/236x/6c/d9/2c/6cd92ce5b351c824b4e7e123b7f50002.jpg", // Replace with actual image URL
          para1:
            "Our tarot card readers provide deep insights and answers to your most pressing questions.",
          para2:
            "Experience the power of tarot as a tool for guidance, clarity, and self-discovery.",
        },
        section2: {
          heading: "Meet the Tarot Reader",
          img: "https://i.pinimg.com/236x/47/51/b8/4751b81bb584c0f0451ffdcd35d2e62e.jpg", // Replace with actual image URL
          para1:
            "Our tarot reader combines intuitive skills with years of experience to offer meaningful readings.",
          para2: [
            "Specializes in love, career, and spiritual guidance",
            "Provides personalized spreads to address your concerns",
            "Creates a calming and supportive environment",
          ],
        },
        section3: {
          heading: "Unveil the Path Ahead",
          img: "https://i.pinimg.com/236x/f2/23/64/f223641855641754097ff35db4fcd3a7.jpg", // Replace with actual image URL
          para1:
            "Our tarot card reader keeps learning new techniques to ensure you receive accurate and insightful guidance.",
          para2:
            "Each reading is tailored to empower and inspire you on your journey.",
        },
        testimonials: [
          { quote: "The tarot reading was spot on! It gave me clarity.", name: "Daniel R." },
          { quote: "I felt so much lighter after the session. Amazing experience!", name: "Laura P." },
          { quote: "The reader’s insights were incredibly accurate.", name: "Tom H." },
          { quote: "Highly recommend for anyone seeking guidance.", name: "Emma W." },
        ],
      },
      { name: "Makeup artist", link: "/categories/makeup-artist",
        heroSection: { text: "Enhance Your Beauty with Expert Makeup Artistry", img: image1 },
        section1: { heading: "Elevate Your Style",img:image2 , para1: "Embrace the transformation! Our expert makeup artists specialize in bringing out your inner beauty, whether it’s for an unforgettable wedding day, a captivating photoshoot, or a special celebration. Let us help you look and feel your best!",para2:"Experience a personalized touch with makeup designed to suit your unique features. We offer a range of services tailored to make you feel radiant and confident for any event." },
        section2:{heading:"Meet the Artist",img:image3,para1:"Our makeup artist is a skilled professional with years of experience creating stunning looks for all occasions. From bridal makeup to editorial shoots, their artistry enhances natural beauty with a touch of glamour.",para2:["Expert in bridal makeup, photoshoots, and special events","Uses premium quality products for long-lasting results","Provides personalized makeup consultations"]},
        section3:{heading:"Always Innovating, Always Improving", img:image4, para1:"We are always on the lookout for the latest trends, products, and techniques to ensure our clients receive the best possible service.", para2:"Our dedication to innovation means we are constantly improving, ensuring your experience with us is fresh, exciting, and always top-notch."},
        testimonials:[
          {
            quote: "The makeup artist transformed my look for my wedding day! I felt beautiful and confident. The makeup stayed on all day, and I received so many compliments!",
            name: "Sarah J.",
          },
          {
            quote: "I had my first photoshoot and the makeup artist made me feel like a star. The look was perfect for the camera, and I loved how my makeup turned out!",
            name: "Emily R.",
          },
          {
            quote: "She made my prom night unforgettable! The makeup was flawless and enhanced my features so naturally. I received so many compliments throughout the evening!",
            name: "Olivia W.",
          },
          {
            quote: "The makeup artist really understood my skin tone and gave me a fresh, natural look that lasted for hours! I will definitely book again for my next event.",
            name: "Rachel T.",
          },
        ]
       },
      {
        name: "Beautician",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Enhance Your Natural Beauty with Expert Care",
          img: "beautician_hero_image.jpg", // Replace with actual image URL
        },
        section1: {
          heading: "Pamper Yourself with Professional Services",
          img: "beautician_section1_image.jpg", // Replace with actual image URL
          para1:
            "Our beauticians provide a wide range of services to enhance your natural glow and keep your skin healthy.",
          para2:
            "From facials to waxing, our treatments are designed to rejuvenate and refresh.",
        },
        section2: {
          heading: "Meet the Beautician",
          img: "beautician_section2_image.jpg", // Replace with actual image URL
          para1:
            "Our experienced beauticians are dedicated to providing top-notch services with a personalized touch.",
          para2: [
            "Specializes in skincare, makeup, and grooming services",
            "Uses high-quality, skin-safe products",
            "Offers consultations to meet your beauty goals",
          ],
        },
        section3: {
          heading: "Innovative Techniques for Timeless Beauty",
          img: "beautician_section3_image.jpg", // Replace with actual image URL
          para1:
            "Our beauticians are always updating their skills to provide the latest and best techniques.",
          para2:
            "Experience the perfect blend of relaxation and beauty enhancement in every session.",
        },
        testimonials: [
          { quote: "My skin feels amazing after the facial!", name: "Lily A." },
          { quote: "Their services are top-notch. I felt so pampered.", name: "Nina R." },
          { quote: "The beautician was very professional and skilled.", name: "James M." },
          { quote: "I’ll definitely come back for more treatments.", name: "Sophia L." },
        ],
      },
      {
        name: "Mehendi artist",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Celebrate Traditions with Beautiful Mehendi Designs",
          img: "mehendi_artist_hero_image.jpg", // Replace with actual image URL
        },
        section1: {
          heading: "Intricate Designs for Special Occasions",
          img: "mehendi_artist_section1_image.jpg", // Replace with actual image URL
          para1:
            "Our mehendi artists craft intricate and stunning designs that add elegance to every occasion.",
          para2:
            "From bridal mehendi to festive celebrations, we ensure every design is unique and beautiful.",
        },
        section2: {
          heading: "Meet the Mehendi Artist",
          img: "mehendi_artist_section2_image.jpg", // Replace with actual image URL
          para1:
            "Our mehendi artist is skilled in traditional and modern styles, creating designs to suit your taste.",
          para2: [
            "Expert in bridal, festive, and personalized designs",
            "Uses organic and skin-safe mehendi",
            "Offers quick and detailed application services",
          ],
        },
        section3: {
          heading: "Tradition Meets Creativity",
          img: "mehendi_artist_section3_image.jpg", // Replace with actual image URL
          para1:
            "Our artists continuously refine their techniques to ensure every design is a masterpiece.",
          para2:
            "Celebrate your special moments with the perfect blend of tradition and creativity.",
        },
        testimonials: [
          { quote: "My bridal mehendi was stunning! Thank you!", name: "Priya S." },
          { quote: "The designs were so intricate and beautiful.", name: "Rina P." },
          { quote: "Highly professional and talented artist.", name: "Anjali T." },
          { quote: "I loved the mehendi! It made my event even more special.", name: "Neha M." },
        ],
      },
      {
        name: "Tattoo artist",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Express Yourself with Stunning Tattoo Art",
          img: "tattoo_artist_hero_image.jpg",
        },
        section1: {
          heading: "Create Your Unique Story",
          img: "tattoo_artist_section1_image.jpg",
          para1:
            "Our talented tattoo artists bring your vision to life with custom designs that reflect your individuality.",
          para2:
            "From intricate details to bold statements, we ensure every tattoo is a work of art tailored to you.",
        },
        section2: {
          heading: "Meet the Tattoo Artist",
          img: "tattoo_artist_section2_image.jpg",
          para1:
            "Our tattoo artist combines creativity and precision to deliver exceptional tattooing experiences.",
          para2: [
            "Expert in traditional, tribal, and modern tattoo styles",
            "Uses high-quality, sterile equipment for safety and comfort",
            "Provides detailed consultations to understand your vision",
          ],
        },
        section3: {
          heading: "Art that Evolves with You",
          img: "tattoo_artist_section3_image.jpg",
          para1:
            "Our artists continuously refine their skills and stay updated with the latest trends and techniques.",
          para2:
            "Every tattoo is a unique creation designed to be meaningful and timeless.",
        },
        testimonials: [
          { quote: "The artist designed my dream tattoo perfectly!", name: "Mike T." },
          { quote: "I felt at ease throughout the process. Amazing work!", name: "Jessica F." },
          { quote: "My tattoo is a masterpiece I’ll cherish forever.", name: "Daniel G." },
          { quote: "Their creativity and professionalism are unmatched.", name: "Anna L." },
        ],
      },
      {
        name: "Hair salons",
        link: "/categories/makeup-artist",
        heroSection: {
          text: "Transform Your Look with Expert Hair Care",
          img: "hair_salon_hero_image.jpg",
        },
        section1: {
          heading: "Discover Your Signature Style",
          img: "hair_salon_section1_image.jpg",
          para1:
            "Our hair salons offer a wide range of services to refresh your look and enhance your confidence.",
          para2:
            "From trendy cuts to advanced treatments, experience personalized hair care tailored to your unique style.",
        },
        section2: {
          heading: "Meet the Stylists",
          img: "hair_salon_section2_image.jpg",
          para1:
            "Our team of expert stylists brings years of experience and a passion for creativity to every client.",
          para2: [
            "Specializes in haircuts, coloring, and styling",
            "Uses premium hair care products for lasting results",
            "Provides consultations to create your ideal look",
          ],
        },
        section3: {
          heading: "Innovative Techniques for Stunning Results",
          img: "hair_salon_section3_image.jpg",
          para1:
            "We stay updated with the latest hair trends and techniques to ensure you always leave our salon looking fabulous.",
          para2:
            "From classic styles to cutting-edge looks, our dedication to excellence shines through in every service.",
        },
        testimonials: [
          { quote: "I love my new haircut! The stylist was amazing.", name: "Sophie K." },
          { quote: "Their coloring services are top-notch. Highly recommend!", name: "Ryan M." },
          { quote: "The staff is friendly and professional. Great experience!", name: "Emma T." },
          { quote: "My hair feels healthier and looks stunning after the treatment.", name: "Lily C." },
        ],
      },
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
    <div className="relative z-30 shadow-md w-full bg-white text-black">
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
                  // onMouseLeave={() => setDropdown(null)}
                >
                  <a
                    onClick={() => setDropdown(id)}
                    href={link}
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
