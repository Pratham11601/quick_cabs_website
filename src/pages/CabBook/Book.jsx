
import React from "react";

const Book = ({ title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-10 z-50 w-full">
      <div className="w-full max-w-4xl p-6 ">
        <p className="text-lg text-5xl font-bold text-gray-800 text-center justify-center sm:text-left">
          {title}Book a cab
        </p>
      </div>
    </div>
  );
};

export default Book;
// import React from "react";

// const Book = ({ title }) => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 z-50 fixed top-0 left-0 w-full">
//       <div className="w-full max-w-4xl p-6">
//         <p className="text-5xl font-bold text-gray-800 text-center sm:text-left">
//           {title} Book a cab
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Book;

