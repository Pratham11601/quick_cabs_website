import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const Navbar = () => {
  const [isBlogActive, setIsBlogActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleBlogClick = () => {
    setIsBlogActive(true);
  };

  const handleLogoClick = () => {
    setIsBlogActive(false);
  };

  const handleBackClick = () => {
    // If the blog section is active, go back to the previous page
    if (isBlogActive) {
      setIsBlogActive(false);
      navigate(-1); // Go back one step in history (browser back functionality)
    }
  };

  return (
    <header className="w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Quick Cabs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isBlogActive ? (
              <>
                <a
                  href="#"
                  onClick={handleBlogClick}
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/download"
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Download App
                </a>
                <a
                  href="/login"
                  className="font-bold bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Login
                </a>
              </>
            ) : (
              <div className="flex items-center space-x-8">
                <a
                  href="/book-cab"
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Book a Cab
                </a>
                <a
                  href="/travel-guides"
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Travel Guides
                </a>
                <a
                  href="/offbeat"
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Offbeat
                </a>
                <a
                  href="/web-stories"
                  className="font-bold text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Web Stories
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Back button for blog navigation */}
        {isBlogActive && (
          <button
            onClick={handleBackClick}
            className="md:hidden font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
          >
            ← Back
          </button>
        )}

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full absolute left-0 top-16 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-3 px-4 py-4">
              {!isBlogActive ? (
                <>
                  <a
                    href="#"
                    onClick={handleBlogClick}
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="/download"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Download App
                  </a>
                  <a
                    href="/login"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Login
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/book-cab"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Book a Cab
                  </a>
                  <a
                    href="/travel-guides"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Travel Guides
                  </a>
                  <a
                    href="/offbeat"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Offbeat
                  </a>
                  <a
                    href="/web-stories"
                    className="font-bold text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition-colors"
                  >
                    Web Stories
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
