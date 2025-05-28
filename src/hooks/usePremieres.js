import { useState, useEffect, useRef } from "react";
import { getMovies } from "../utils/movie.utils";

export function usePremieres(delay = 500) {
  const [premieres, setPremieres] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const timerRef                  = useRef(null);

  useEffect(() => {
    setLoading(true);
    timerRef.current = setTimeout(() => {
      try {
        setPremieres(getMovies().slice(0, 10)); // primeros 10 estrenos
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [delay]);

  return { premieres, loading, error };
}
