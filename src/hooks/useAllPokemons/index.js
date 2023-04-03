import {useEffect, useState} from "react";
import { pokeApi } from '../../services/pokeApi.js';

export const useAllPokemons = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await pokeApi.get('/pokemon?limit=20&offset=0');
                const { data } = response;
                const { results } = data;
                const pokeInfo = await Promise.all(
                  results.map(async (pokemon) => {
                      const { data } = await pokeApi.get(`/pokemon/${pokemon.name}`);
                      return data;
                  })
                );
                setPokeList(pokeList.concat(pokeInfo)); // adiciona novos pokemons na lista
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    const fetchMorePokemons = async () => {
        const response = await pokeApi.get(`/pokemon?limit=20&offset=${pokeList.length}`);
        const { data } = response;
        const { results } = data;
        const pokeInfo = await Promise.all(
          results.map(async (pokemon) => {
              const { data } = await pokeApi.get(`/pokemon/${pokemon.name}`);
              return data;
          })
        );
        setPokeList([...pokeList, ...pokeInfo ]); // adiciona novos pokemons no início da lista
    };

    const getPokemonSpecies = async (name) => {
        const { data } = await pokeApi.get(`/pokemon-species/${name}`);
        return data;
    }

    const getPokemonInfo = async (name) => {
        const { data } = await pokeApi.get(`/pokemon/${name}`);
        return data;
    }

    const getPokemonEvolutions = async (pokemonName) => {
        const { data } = await pokeApi.get(`/pokemon-species/${pokemonName}`);
        const evolutionChainUrl = data?.evolution_chain?.url;
        const evolutionChainId = evolutionChainUrl?.split('/').slice(-2, -1)[0];
        const { data: evolutionChain } = await pokeApi.get(`/evolution-chain/${evolutionChainId}`);
        const { chain } = evolutionChain;
        const evolutionsList = [];
        let currentChainItem = chain;
        do {
            const { species, evolution_details: evolutionDetails } = currentChainItem;
            evolutionsList.push({ name: species.name, url: species.url, ...evolutionDetails[0] });
            currentChainItem = currentChainItem?.evolves_to?.[0];
        } while (currentChainItem);

        return evolutionsList;
    }


    const getPokemon = (name) => {
        return pokeList.find((pokemon) => pokemon.name === name);
    }

    const getPokemonById = (id) => {
        return pokeList.find((pokemon) => pokemon.id === id);
    }

    return { loading, error, pokeList, getPokemonSpecies, getPokemon, getPokemonById, getPokemonEvolutions, fetchMorePokemons, getPokemonInfo };
};