import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const req = await fetch(url);
        console.log(req);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const testlar = await req.json();
        setData(testlar);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
