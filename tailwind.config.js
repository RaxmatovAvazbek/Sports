/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Containerni o'rtaga joylashtiradi
        padding: '2rem', // Yonlardan padding qo'shadi
        screens: { // Har bir ekran o'lchami uchun max-width o'rnatadi
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1300px',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "winter"],
  },
};
