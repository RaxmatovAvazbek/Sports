import { Link  } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
// import { Loader } from "../components";

const Sportchilar = () => {
  const {data: sport, loading, error } = useFetch(`https://676076cc6be7889dc35e0637.mockapi.io/sport/uzbekSport`);

  return (
    <div className="container my-10 px-4">
      <h1 className="text-left  my-10 text-3xl">Sportchilar</h1>
      {loading && <h2>YUKLANMOQDA...</h2>}
      {error && <h2>{error}</h2>}
      <div className="container  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center md: flex-col">
        {sport &&
          sport.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="card w-96 bg-base-100 shadow-xl md:grid-cols-1  "
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-60 w-full object-cover sm: object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">
                      {item.sport} - {item.title}
                    </p>
                    <p className="text-sm mt-2">{item.body.slice(0, 35)} ...</p>
                    <div className="card-actions justify-start mt-4">
                      <Link to={`/sport/${item.id}`} className="py-1 px-6 bg-blue-600 text-white rounded btn-info">
                          Batafsil
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Sportchilar;

// const uzbekSport = [
//   {
//     id: 1,
//     name: "Hasanboy Do‘stmatov",
//     sport: "Boks",
//     title: "Rio 2016 Olimpiada chempioni",
//     body: "Hasanboy Do‘stmatov 2016-yilgi Rio Olimpiadasida boks bo‘yicha oltin medalni qo‘lga kiritdi. U O‘zbekistonning eng yaxshi bokschilaridan biri sifatida tanilgan.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTbCN9L8s1XRGzAUzSmPaPGwTGSDSiP3eMQ&s",
//   },
//   {
//     id: 11,
//     name: "Lina Cheryazova",
//     sport: "YengilAtletika",
//     title:
//       "Akrobatikada fristayl bo‘yicha ham birinchi olimpiya chempioni hisoblanadi.",
//     body: "1994 yil Olimpiada o‘yinlaridan so‘ng u og‘ir tan jarohati olgan. Amerikaning Leyk-Plesid qishlog‘ida mashg‘ulot vaqtida 25 yoshida sportchi boshidan hayotiga xavf soluvchi jarohat oldi, biroq u nafaqat sog‘aydi, balki katta sportga ham qayta oldi. 1998 yilda Naganoda qishki Olimpiya o‘yinlariga saralash bo‘lib o‘tdi. Musobaqada 13-o‘rinni qo‘lga kiritgan Lina katta sportdagi faoliyatiga yakun yasagan. O‘zbekiston tarixidagi birinchi chang‘i akrobatikachisi Lina Cheryazova 2019 yil 23 mart kuni Novosibirksda 51 yoshda hayotdan ko‘z yumgan.",
//     image: "	https://www.gazeta.uz/media/img/2021/07/Um1gNs16270163096149_b.jpg",
//   },
//   {
//     id: 12,
//     name: "Oksana Chusovitina",
//     sport: " Osiyo o‘yinlari chempioni",
//     title:
//       "Bugungi kunda Tokioda bo‘lib o‘tayotgan Olimpiada o‘yinlarida ham ishtirok etmoqda. Bu uning sakkizinchi Olimpiadasi.",
//     body: "Oksana Chusovitina yetti bor (1992, 1996, 2000, 2004, 2008, 2012, 2016) yozgi Olimpiadada ishtirok etgan holda Ginnesning rekordlar kitobiga kiritilgan. Sportchi SSSR, Germaniya (2006−2012) nomidan Olimpiada o‘yinlarida ishtirok etgan, ayni vaqtda esa O‘zbekiston sharafini himoya qilmoqda. Chusovitina — 1992 yili jamoaviy bahsda olimpiya chempioni, uch karra jahon chempioni, Yevropa chempioni, Osiyo o‘yinlari chempioni bo‘lgan. U tayanib sakrashga ixtisoslashgan.",
//     image: "	https://www.gazeta.uz/media/img/2021/07/LkpIo916270411056585_b.jpg",
//   },
//   {
//     id: 2,
//     name: "Oksana Chusovitina",
//     sport: "Gimnastika",
//     title: "7 karra Olimpiya ishtirokchisi",
//     body: "Oksana Chusovitina sport tarixida 7 ta Olimpiadada qatnashgan yagona gimnastikachidir. U o‘zining chidamliligi va fidoyiligi bilan tanilgan.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKpTCZXdWzqyhBCG7ArlVJvenP_pudCsmcw&s",
//   },
//   {
//     id: 3,
//     name: "Eldor Shomurodov",
//     sport: "Futbol",
//     title: "Roma klubi hujumchisi",
//     body: "Eldor Shomurodov O‘zbekiston futbolining yetakchilaridan biri bo‘lib, u A Seriya klublarida muvaffaqiyatli faoliyat olib bormoqda.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLdIVE8cntwKSTSGX6To6mA0EMxDV8EE_7w&s",
//   },
//   {
//     id: 4,
//     name: "Ruslan Chagaev",
//     sport: "Boks",
//     title: "Sobiq jahon chempioni",
//     body: "Ruslan Chagaev og‘ir vazn toifasida jahon chempioni bo‘lib, professional boksda o‘z izini qoldirgan sportchilardan biri.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VjOiu-k9FB1_wG8mGe0FUHw4C9KrzcDhcQ&s",
//   },
//   {
//     id: 5,
//     name: "Nodirbek Abdusattorov",
//     sport: "Shaxmat",
//     title: "Jahon chempioni 2021",
//     body: "Nodirbek Abdusattorov 2021-yilda shaxmat bo‘yicha jahon chempioni bo‘lib, yosh grossmeyster sifatida tarixga kirdi.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvj0T4uFnSUoAz3hogrh0AL8iCuXBBEWUuOA&s",
//   },
//   {
//     id: 6,
//     name: "Shahram G‘iyosov",
//     sport: "Boks",
//     title: "Rio 2016 Olimpiada kumush medali",
//     body: "Shahram G‘iyosov professional boks olamida o‘z o‘rniga ega va xalqaro turnirlarda muvaffaqiyatli ishtirok etib kelmoqda.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ApwbFdt1wUHGWowxf8QCgTxvqIEQmCCkjA&s",
//   },
//   {
//     id: 7,
//     name: "Akbar Djuraev",
//     sport: "Og‘ir atletika",
//     title: "Tokio 2020 Olimpiada chempioni",
//     body: "Akbar Djuraev 2020-yilgi Tokio Olimpiadasida og‘ir atletika bo‘yicha oltin medalni qo‘lga kiritdi.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i5lAS7VJXWU9LvBbR_Aqhjr9QMF8Ey9LkQ&s",
//   },
//   {
//     id: 8,
//     name: "Odil Ahmedov",
//     sport: "Futbol",
//     title: "Milliy terma jamoa sardori",
//     body: "Odil Ahmedov O‘zbekiston futbol terma jamoasining uzoq yillik sardori bo‘lib, xalqaro futbol maydonlarida o‘z nomini tanitgan.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtdp_lXwbhhWw1BNKG9Y0UjeHpS60dntUqw&s",
//   },
//   {
//     id: 9,
//     name: "Shakhboz Rakhmonov",
//     sport: "MMA",
//     title: "UFC jangchisi",
//     body: "Shakhboz Rakhmonov UFC oktagonida yengilmas sportchi sifatida faoliyat yuritib kelmoqda.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdRFFzWGUVsApaC85keRyy_5elO4AK3e1Ag&s",
//   },
//   {
//     id: 10,
//     name: "Rishod Sobirov",
//     sport: "Dzyudo",
//     title: "Osiyo o‘yinlari chempioni",
//     body: "Rishod Sobirov dzyudo bo‘yicha bir nechta xalqaro turnirlarda g‘alaba qozongan O‘zbekistonning faxrli sportchilaridan biri.",
//     image:
//       "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxrmXhpHW-ODub35fIE2bnvdOJYl2kUal0w&s",
//   },
// ];
