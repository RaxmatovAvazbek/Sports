// import axios from "axios";
// const BASE_URL = "https://sportapi7.p.rapidapi.com";

// const options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5',
//   params: {page: '2'},
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_PUBLIC_KEY,
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// export const ApiService = {
//   async fetching(url) {
//     try {
//       const response = await axios.get(`${BASE_URL}/${url}`, options);
//       return response.data;
//     } catch (error) {
//       console.log("API request failed", error);
//       throw error;
//     }
//   },
// };
// import axios from "axios";

// const BASE_URL = "https://sportapi7.p.rapidapi.com";
// const REACT_APP_PUBLIC_KEY = '09901feb86mshe9627263c4e299cp163dbfjsn7fd50ad831b8'
// // API kalit va host ma'lumotlarini alohida options obyektida saqlaymiz
// const options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5',
//   params: {page: '2'},
//   headers: {
//     'x-rapidapi-key': REACT_APP_PUBLIC_KEY,
//     'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//   }
// };
// // API xizmati
// export const ApiService = {
//   async fetching(url, params = {}) {
//     try {
//       // Axios so'rov yuboradi, params obyektini dinamik tarzda qo'shadi
//       const response = await axios.get(`${BASE_URL}/${url}`), {
//         ...options,
//         params, // parametrlarni uzatish
//       });
//       return response.data; // muvaffaqiyatli so'rov natijasi
//     }catch (error) {
//       console.error("API request failed:", error.message);
//       throw error; // xatoni qaytaramiz
//     }
//   },
// };
