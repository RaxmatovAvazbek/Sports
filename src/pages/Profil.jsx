import { useFetch } from "../hooks/useFetch";

const Profil = () => {
  const url = `https://676076cc6be7889dc35e0637.mockapi.io/sport/sportTuri`;
  const { data: turlar, loading, error } = useFetch(url);
  console.log(turlar);
  console.log(url);

  return (
    <div className="container my-10">
      <h1 className="text-center  my-10 text-3xl">Sport Turlari</h1>
      {loading && <h2>LOADING...</h2>}
      {error && <h2>{error}</h2>}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center md: flex-col">
        {turlar &&
          turlar.map((index) => {
            return (
              <>
                <div
                  key={index.id}
                  className="card w-96 bg-base-100 shadow-xl md:grid-cols-1"
                >
                  <figure className="w-100%">
                    <img
                      src={index.image}
                      alt={index.name}
                      className="h-60 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-3xl font-bold text-left mb-2">
                      {index.name}
                    </h2>
                    <p className="text-xl text-left text-gray-600">
                      {index.description} - {index.origin}
                    </p>
                    <p className="mt-4 text-gray-700">{index.popularity}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Profil;
