import React from "react";

const Offbeat = ({ title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-10 z-50 w-full">
    <div className="w-full max-w-4xl p-6 ">
      <p className="text-lg text-5xl font-bold text-gray-800 text-center justify-center sm:text-left">
        {title}Offbeat
      </p>
    </div>
  </div>
  );
};

export default Offbeat;