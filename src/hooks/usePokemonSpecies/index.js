import axios from "axios";
import {useEffect, useState} from "react";


export const usePokemonSpecies = (url) => {
    const [pokeSpecies, setPokeSpecies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            setIsLoading(true);
            if (!url) return;
            axios.get(url)
                .then((response) => {
                    setPokeSpecies(response.data);
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, [url]);

    return { pokeSpecies, isLoading };
}