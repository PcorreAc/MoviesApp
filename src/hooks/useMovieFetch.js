import { useState, useEffect } from "react";
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [state, seState] = useState({}); //Lo pasamos con un objeto vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        //Obtener solo los directorios
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        seState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);
    //! Verificamos la sesión para almacenarla en el storage
    if (sessionState) {
      seState(sessionState);
      //* Debemos cancelar la carga del Sppiner
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //! Escribimos la sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
