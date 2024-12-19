// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js}", // Update paths based on your project structure
      "./public/index.html",
    ],
    theme: {
      extend: {
        
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // For better form styling
      require('@tailwindcss/typography'), // For rich text styling
    ],
  };
  