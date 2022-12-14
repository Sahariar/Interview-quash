/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e82f2c",
        
"secondary": "#f6bfff",
        
"accent": "#aedbed",
        
"neutral": "#241924",
        
"base-100": "#f3f4f6",
        
"info": "#7898DD",
        
"success": "#78EDD7",
        
"warning": "#fcd34d",
        
"error": "#E63D62",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
