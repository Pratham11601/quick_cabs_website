// import React from "react";


// const Home = () => {
//   return (
//     <div className="home">
 
//       {/* Simple Welcome Message */}
//       <section className="text-center py-12 bg-gray-100">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Welcome to Savari
//         </h2>
//       </section>

//     </div>
//   );
// };

// export default Home;
import React from "react";

const Home = ({ title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-10 z-50 w-full">
    <div className="w-full max-w-4xl p-6 ">
      <p className="text-lg text-5xl font-bold text-gray-800 text-center justify-center sm:text-left">
        {title}Welcome Home
      </p>
    </div>
  </div>
  );
};

export default Home;
