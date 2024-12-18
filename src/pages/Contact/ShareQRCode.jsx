
import React from 'react';
// Import the image from the assets folder
import downloadAppImage from '../../assets/downloadapp.png';
// Import icons from react-icons
import { FaWhatsapp } from 'react-icons/fa';  // WhatsApp icon
import { MdEmail } from 'react-icons/md';    // Email icon
import { FaFacebookF } from 'react-icons/fa'; // Facebook icon
import { FaTwitter } from 'react-icons/fa';   // Twitter icon

const ShareQRCode = () => {
  // Mock QR code pattern using divs
  const MockQRCode = () => (
    <div className="w-72 h-72 bg-white p-4 grid grid-cols-7 gap-1 relative rounded-xl ">
      {Array(49).fill().map((_, i) => (
        <div 
          key={i} 
          className={`${Math.random() > 0.7 ? 'bg-black' : 'bg-transparent'}`}
        />
      ))}
    </div>
  );

  // Share URL configuration
  const shareMessage = "Check out this amazing app!";
  const shareUrl = window.location.href;

  return (
    <div className="max-w-4xl mx-auto bg-cream min-h-screen p-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - QR Code */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Scan QR code with your device
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-all duration-300">
            <MockQRCode />
          </div>
        </div>

        {/* Right side - App Store buttons */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">
            Or, download it on your app store!
          </h2>
          <div className="space-y-4 flex justify-center">
            <a 
              href="https://www.apple.com/app-store/" 
              className="block w-48 transition-transform hover:scale-110"
            >
              <img 
                src={downloadAppImage}  // Using the imported image from assets
                alt="Download the App" 
                className="w-full rounded-xl shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Share Options */}
      <div className="mt-12 space-y-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">Share with others</h3>
        <div className="flex justify-center space-x-8">
          {/* WhatsApp Share Button */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp size={32} />
          </a>

          {/* Email Share Button */}
          <a
            href={`mailto:?subject=${encodeURIComponent("Check this out!")}&body=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            className="p-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MdEmail size={32} />
          </a>

          {/* Facebook Share Button */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaFacebookF size={32} />
          </a>

          {/* Twitter Share Button */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareQRCode;
