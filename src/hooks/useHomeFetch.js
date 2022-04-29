import { useState, useEffect } from "react";

//API
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Renderizado inicial y de búsqueda
  useEffect(() => {
    //! condicional para validar el uso del sessionStorage
    //* no se almacenará en el storage una busqueda
    if (!searchTerm) {
      //TODO Guardamos la session en un archivo llamado homeState
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    //! Fin del condicional

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More
  useEffect(() => {
    //si es distinto a false ejecutamos el Effect y añadimos una pagina más a la busqueda
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    //Después de cargar 1 página más lo debemos detener o seguirá cargando el bucle
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //! Escribimos la sessionStorage
  useEffect(() => {
    //* pasamos al sessionStorage el estado que queremos almacenar (JSON), pero como string
    //* siempre que no se esté realizando una busqueda
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
