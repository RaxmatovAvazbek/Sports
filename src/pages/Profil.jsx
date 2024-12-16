import { useFetch } from "../hooks/useFetch";

const Profil = () => {
  const url = `http://localhost:5000/uzbekSport`;
  const { data: sport, loading, error } = useFetch(url);

  return (
    <div className="container images mx-auto mt-10">
      {loading && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>}
      {sport && (
        <div className=" w-96 bg-white shadow-xl rounded-lg overflow-hidden flex justify-between">
          <figure className="w-100%">
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="p-6 w-2/3">
            <h2 className="text-3xl font-bold text-left mb-2">{sport.name}</h2>
            <p className="text-xl text-left text-gray-600">
              {sport.title} - {sport.title}
            </p>
            <p className="mt-4 text-gray-700">{sport.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
