/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/bg.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctorsportal: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#D4D9E3",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
