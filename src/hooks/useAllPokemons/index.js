import {useEffect, useState} from "react";
import axios from "axios";

export const useAllPokemons = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=700&offset=0');
                const { data } = response;
                const { results } = data;
                const pokeInfo = await Promise.all(
                  results.map(async (pokemon) => {
                      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                      return data;
                  })
                );
                setPokeList(pokeInfo);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    return { loading, error, pokeList };
};