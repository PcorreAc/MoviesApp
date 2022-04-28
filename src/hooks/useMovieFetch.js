import { useState, useEffect } from "react";
import API from '../API';
import { API_KEY } from "../config";

export const useMovieFetch = movieId => {

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
                    member => member.job === 'Director'
                );

                seState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };

        fetchMovie();
    }, [movieId]);

    return { state, loading, error };
};