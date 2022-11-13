/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  
  content: ["./src/**/*.{html,js}"],
  
  daisyui:{
    theme: {
      extend: {},
    },
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  }
  
}
