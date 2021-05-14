const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "gray-custom": "#727272",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "trippy-slow": "trippy 15s linear infinite",
        "trippy2-slow": "trippy2 20s linear infinite",
        "trippy3-slow": "trippy3 35s linear infinite"
      },
      keyframes: {
        trippy: {
          '0%, 100%': {transform: 'rotateX(0) rotateY(0) rotateZ(0)'},
          '50%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)'},
        },
        trippy2: {
          '0%, 100%': {transform: 'rotateX(100) rotateY(0) rotateZ(0)'},
          '50%': { transform: 'rotateX(360deg) rotateY(100deg) rotateZ(360deg)'},
        },
        trippy3: {
          '0%, 100%': {transform: 'rotateX(300) rotateY(300) rotateZ(0)'},
          '50%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(50deg)'},
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
