import { Link } from "react-router-dom";
import "./Home.css";
const stats = [
  { id: 1, name: "Olimpiya medallari ", value: " 12,000+" },
  { id: 2, name: " Dunyo bo‘ylab faol sportchilar", value: "44,000+" },
  {
    id: 3,
    name: "Eng muvaffaqiyatli sportchilarning daromadlari",
    value: " $119 milliard yiliga",
  },
];
// const people = [
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// ];
const people = [
  {
    name: "Hasanboy Do'stmatov",
    role: "Olimpiya chempioni",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTbCN9L8s1XRGzAUzSmPaPGwTGSDSiP3eMQ&s", // Tasvir fayl nomi yoki URL
  },
  {
    name: "Odil Ahmedov",
    role: "Afsonaviy Fudbolchi",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtdp_lXwbhhWw1BNKG9Y0UjeHpS60dntUqw&s", // Tasvir fayl nomi yoki URL
  },
  {
    name: "Dostonbek Yoqubov",
    role: "Kurash ustasi",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxPsdsd6coOXTKkMn7A29FbYl4u90wR8CVA&s", // Tasvir fayl nomi yoki URL
  },
  {
    name: "Rishod Sobirov",
    role: "Dzyudo",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxrmXhpHW-ODub35fIE2bnvdOJYl2kUal0w&s", // Tasvir fayl nomi yoki URL
  },
];

function Home() {
  return (
    <>
      {/* HOME BOSHLANISH QISMI  */}
      <div className="home__enter">
        <div className="container title">
          <div className="home__title ">
            <h1 className="home__header">
              Uzbekistan <span>Sportchilar</span>
            </h1>
            <p className="home__p"></p>
            <p className="home__p">
              Bizning sportchilarimiz xalqaro maydonlarda Ozbekistonni faxr
              bilan taqdim etmoqda, ularning yutuqlari kelajak avlodlarga kuch
              va ilhom bagishlamoqda. Ozbekiston sportchilari har doim ozining
              kuchli va qatiyatli ruhiy holati bilan ajralib turadi. Ul
            </p>
            <button className="btn btn-success text-white">Sport</button>
          </div>
        </div>
        <div></div>
      </div>
      {/* HOME TUGASH QISMI     */}

      {/* HOME STATIC  QISMI  BOSHLANISHI */}

      <div className="home__static">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* HOME STATIC TUGASH  QISMI  */}

      <div className="home__main">
        <div className="home__description container">
          <div className="home__title">
            <h1 className="home__header">
              Boks Club
              <span> Boks</span>
            </h1>
            <p className="home__p"></p>
            <p className="home__p">
              Bizning sportchilarimiz xalqaro maydonlarda Ozbekistonni faxr
              bilan taqdim etmoqda, ularning yutuqlari kelajak avlodlarga kuch
              va ilhom bagishlamoqda. Ozbekiston sportchilari har doim ozining
              kuchli va qatiyatli ruhiy holati bilan ajralib turadi. Ul
            </p>
            <Link className="btn btn-success text-white">Sport</Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Bizning sportchilar bilan tanishing
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              O‘zbekiston sportchilari dunyo miqyosida o‘z iste’dodi,
              mehnatkashligi va g‘alabaga bo‘lgan intilishi bilan tanilgan. Ular
              xalqaro musobaqalarda erishgan yutuqlari bilan nafaqat
              O‘zbekiston, balki butun Markaziy Osiyo sport faxri hisoblanadi.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
