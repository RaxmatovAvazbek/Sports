/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Containerni o'rtaga joylashtiradi
        padding: {
          DEFAULT: "2rem", // Barcha ekranlar uchun standart padding
          xs: "1rem", // 375px va kichik ekranlar uchun
          sm: "2rem", // Kichik ekranlar uchun
          md: "3rem", // O'rtacha ekranlar uchun
          lg: "4rem", // Katta ekranlar uchun
          xl: "5rem", // Juda katta ekranlar uchun
          "2xl": "6rem", // Ikki barobar katta ekranlar uchun
        },
        screens: {
          xs: "375px", // 375px va kichik ekranlar uchun
          sm: "640px", // Kichik ekranlar
          md: "768px", // O'rtacha ekranlar
          lg: "1024px", // Katta ekranlar
          xl: "1280px", // Juda katta ekranlar
          "2xl": "1400px", // Ikki barobar katta ekranlar
        },
        // Kartalar orasida bo'shliq qo'shish
        gap: "1rem", // Barcha ekranlarda kartalar orasida bo'shliq (responsive)
        // Agar grid yoki flex layout ishlatayotgan bo'lsangiz, margin qo'shishingiz mumkin
        margin: "1rem", // Katta ekranlar uchun margin
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "winter"],
  },
};
