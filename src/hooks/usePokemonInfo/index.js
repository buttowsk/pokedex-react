import {useEffect, useState} from "react";
import axios from "axios";

export const usePokemonInfo = (url) => {
    const [pokeInfo, setPokeInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            setIsLoading(true);
            axios
                .get(url)
                .then((response) => {
                    setPokeInfo(response.data);
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

    return { pokeInfo, isLoading };
};