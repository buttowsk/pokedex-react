import {useEffect, useState} from "react";
import axios from "axios";

export const useAllPokemons = (url) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            axios.get(url)
                .then((response) => {
                    const { data } = response;
                    const { results } = data;
                    setPokemons(results);
                    setLoading(false);
                })
                .catch((e) => {
                    console.log(e)
                    setError(true);
                })
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    },[url]);

    return { pokemons, loading, error };
}