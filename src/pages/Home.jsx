import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="home__enter">
      <div className="container title">
        <div className="home__title ">
          <h1 className="home__header">
            Uzbekistan <span>Sportchilar</span>
          </h1>
          <p className="home__p"></p>
          <p className="home__p">
            Bizning sportchilarimiz xalqaro maydonlarda Ozbekistonni faxr bilan
            taqdim etmoqda, ularning yutuqlari kelajak avlodlarga kuch va ilhom
            bagishlamoqda. Ozbekiston sportchilari har doim ozining kuchli va
            qatiyatli ruhiy holati bilan ajralib turadi. Ul
          </p>
          <button className="btn btn-success text-white">Sport</button>
        </div>
      </div>
      <div></div>
    </div>
    <div className="home__main">
      <div className="home__description container">
      <div className="home__title">
          <h1 className="home__header">
            Boks Club 
             <span> Boks</span>
          </h1>
          <p className="home__p"></p>
          <p className="home__p">
            Bizning sportchilarimiz xalqaro maydonlarda Ozbekistonni faxr bilan
            taqdim etmoqda, ularning yutuqlari kelajak avlodlarga kuch va ilhom
            bagishlamoqda. Ozbekiston sportchilari har doim ozining kuchli va
            qatiyatli ruhiy holati bilan ajralib turadi. Ul
          </p>
          <Link  className="btn btn-success text-white">Sport</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
