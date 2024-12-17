// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#f7b2d9",
//         secondary: {
//           100: "#E2E2D5",
//           200: "#888883",
//         },
//         dark: "#111111",
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "3rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f7b2d9",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        'gradient-text': 'gradient-text 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 2s ease-out forwards',
        'button': 'button 0.5s ease-in-out',
        'image': 'image 1.5s ease-in-out forwards',
        'slideInLeft': 'slideInLeft 1s ease-out',
        'slideInRight': 'slideInRight 1s ease-out',
        'zoomIn': 'zoomIn 1s ease-out',
        'rotateIn': 'rotateIn 1s ease-out',
        'bounceIn': 'bounceIn 1s ease-out',
        'fadeUp': 'fadeUp 1.5s ease-out forwards',
      },
      keyframes: {
        'gradient-text': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        'fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'button': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.1)',
          },
        },
        'image': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'slideInLeft': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slideInRight': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'zoomIn': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        'rotateIn': {
          '0%': {
            transform: 'rotate(-200deg)',
            opacity: 0,
          },
          '100%': {
            transform: 'rotate(0deg)',
            opacity: 1,
          },
        },
        'bounceIn': {
          '0%': {
            transform: 'scale(0.7)',
            opacity: 0,
          },
          '60%': {
            transform: 'scale(1.2)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'fadeUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
