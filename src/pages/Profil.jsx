import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profil = () => {
  const { id } = useParams();
  const [sportchi, setSportchi] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/sportchilar/${id}`)
      .then((response) => setSportchi(response.data))
      .catch((error) => console.error("Xatolik:", error));
  }, [id]);

  if (!sportchi) return <div>Yuklanmoqda...</div>;

  return (
    <div className="container images mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{sportchi.name}</h1>
      <img
        src={sportchi.image}
        alt={sportchi.name}
        className="w-full max-w-md mx-auto rounded-md"
      />
      <p>
        <strong>Sport:</strong> {sportchi.sport}
      </p>
      <p>
        <strong>Yutuqlar:</strong> {sportchi.achievements.join(", ")}
      </p>
      <p className="mt-4">{sportchi.bio}</p>
    </div>
  );
};

export default Profil;
