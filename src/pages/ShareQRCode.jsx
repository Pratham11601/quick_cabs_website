import React from 'react';
import { Share, MoreVertical, ArrowLeft } from 'lucide-react';
import QRCode from 'qrcode.react';

const ShareQRCode = () => {
  // This would normally come from your app's state/props
  const businessName = "Garg's Beauty Salon";
  const shareUrl = "https://example.com/business";
  
  const shareButtons = [
    { id: 'instagram', icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/instagram.svg', color: 'bg-blue-500' },
    { id: 'email', icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/gmail.svg', color: 'bg-blue-500' },
    { id: 'facebook', icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/facebook.svg', color: 'bg-blue-500' },
    { id: 'whatsapp', icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/4.25.0/whatsapp.svg', color: 'bg-blue-500' }
  ];

  const handleShare = (platform) => {
    // Implement sharing logic for each platform
    console.log(`Sharing via ${platform}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg">Share link</span>
        </div>
        <div className="flex items-center space-x-2">
          <Share className="w-6 h-6" />
          <MoreVertical className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/64/64"
            alt="Business Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Business Name */}
        <h2 className="text-blue-500 font-medium">{businessName}</h2>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <QRCode value={shareUrl} size={200} />
        </div>

        {/* QR Code Info */}
        <p className="text-sm text-gray-500 text-center">
          Your QR code is private. If you share it with someone they can scan it
          with their Link camera to add you as a contact.
        </p>
      </div>

      {/* Share Buttons */}
      <div className="p-4 bg-gray-50">
        <div className="flex justify-center space-x-6">
          {shareButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleShare(button.id)}
              className={`w-12 h-12 rounded-full ${button.color} flex items-center justify-center`}
            >
              <img
                src={button.icon}
                alt={button.id}
                className="w-6 h-6 invert"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareQRCode;