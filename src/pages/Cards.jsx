import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `https://676076cc6be7889dc35e0637.mockapi.io/sport/uzbekSport/sportTuri/${id}`;
  const { data: sport, loading, error } = useFetch(url);
  console.log(sport);
  
  return (
    <div className="container images mx-auto mt-10">
      <button onClick={() => navigate(-1)} className="btn btn-active mb-6">
        Orqaga
      </button>
      {loading && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>}
      {sport && (
        <div className="w-full min-h-96 bg-base-100 shadow-xl my-8  lg:flex lg:flex-row flex-col">
          <figure className="lg:w-1/3 w-full mb-4 lg:mb-0">
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="flex flex-col p-6 w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-left mb-5">{sport.name}</h2>
            <p className="text-xl text-left text-gray-600 mb-6">
              {sport.title}
            </p>
            <p className="text-left text-gray-700">{sport.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
