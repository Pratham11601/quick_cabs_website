

// export default ShareQRCode;
import React from 'react';
// Import the image from the assets folder
import downloadAppImage from '../../assets/downloadapp.png';
// Import icons from lucide-react
import { Share2, MessageCircle, Facebook, Twitter } from 'lucide-react';

const ShareQRCode = () => {
  // Mock QR code pattern using divs
  const MockQRCode = () => (
    <div className="w-72 h-72 bg-white p-4 grid grid-cols-7 gap-1 relative">
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
          <h1 className="text-4xl font-black">
            Scan QR code with your device
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <MockQRCode />
          </div>
        </div>

        {/* Right side - App Store buttons */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black">
            Or, download it on your app store!
          </h2>
          <div className="space-y-4">
            <a 
              href="https://www.apple.com/app-store/" 
              className="block w-48 transition-transform hover:scale-105"
            >
              <img 
                src={downloadAppImage}  // Using the imported image from assets
                alt="Download the App" 
                className="w-full"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Share Options */}
      <div className="mt-12 space-y-6 text-center">
        <h3 className="text-2xl font-semibold">Share with others</h3>
        <div className="flex justify-center space-x-6">
          {/* Share button */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
            <MessageCircle size={32} />
          </a>

          {/* Email Share */}
          <a
            href={`mailto:?subject=${encodeURIComponent("Check this out!")}&body=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            <MessageCircle size={32} />
          </a>

          {/* Facebook Share */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
          >
            <Facebook size={32} />
          </a>

          {/* Twitter Share */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
          >
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareQRCode;
