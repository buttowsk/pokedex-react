import {useEffect, useState} from "react";
import { pokeApi } from '../../services/pokeApi.js';
import { Pokemon } from '../../models/Pokemon/index.js';
import { Evolution } from '../../models/Evolution/index.js';

export const useAllPokemons = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const response = await pokeApi.get('/pokemon?limit=900&offset=0');
                const { data } = response;
                const { results } = data;
                const pokemonPromises = results.map(async (result) => {
                    const id = result.url.split('/').slice(-2, -1)[0];
                    const { data: pokemonData } = await pokeApi.get(`/pokemon/${id}`);
                    const { data: speciesData } = await pokeApi.get(`/pokemon-species/${pokemonData.id ?? pokemonData.name}`);
                    const evolutionChainUrl = speciesData?.evolution_chain?.url;
                    const evolutionChainId = evolutionChainUrl?.split('/').slice(-2, -1)[0];
                    const { data: evolutionChain } = await pokeApi.get(`/evolution-chain/${evolutionChainId}`);
                    const { chain } = evolutionChain;
                    const evolutionsList = [];
                    let currentChainItem = chain;
                    do {
                        const { species, evolution_details: evolutionDetails } = currentChainItem;
                        const id = species.url.split('/').slice(-2, -1)[0];
                        const { data: speciesData } = await pokeApi.get(`/pokemon-species/${id}`);
                        const {data} = await pokeApi.get(`/pokemon/${speciesData.id}`);
                        const evolutions = new Evolution(
                          species.name,
                          data.sprites.other['official-artwork'].front_default,
                          evolutionDetails[0],
                        )
                        evolutionsList.push(evolutions);
                        currentChainItem = currentChainItem?.evolves_to?.[0];
                    } while (currentChainItem);
                    const abilities = pokemonData.abilities.map(({ ability }) => ability.name);
                    const moves = pokemonData.moves.map(({ move }) => move.name);
                    const stats = pokemonData.stats.map(({ base_stat, stat }) => ({ name: stat.name, value: base_stat }));
                    const types = pokemonData.types.map(({ type }) => type.name);
                    const genderRate = speciesData.gender_rate === -1 ? 'Genderless' : `${(100 - (speciesData.gender_rate * 10))}% ♂, ${10 * speciesData.gender_rate}% ♀`;
                    const generation = speciesData.generation.name;
                    const hatchSteps = 255 * ((speciesData.hatch_counter + 1) / 256);
                    const pokemon = new Pokemon(
                      pokemonData.name,
                      types,
                      pokemonData.sprites.other['official-artwork'].front_default,
                      pokemonData.id,
                      evolutionsList,
                      genderRate,
                      hatchSteps,
                      abilities,
                      pokemonData.height,
                      pokemonData.weight,
                      moves,
                      stats,
                      generation,
                    );
                    return pokemon;
                });
                const pokeList = await Promise.all(pokemonPromises);
                setPokeList(pokeList);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemons();
    }, []);


    useEffect(() => {
        localStorage.setItem('pokeList', JSON.stringify(pokeList));
    }, [pokeList]);

    const getPokemonSpecies = async (name) => {
        const { data } = await pokeApi.get(`/pokemon-species/${name}`);
        return data;
    }

    const getPokemonInfo = async (name) => {
        const { data } = await pokeApi.get(`/pokemon/${name}`);
        return data;
    }


    const getPokemon = (name) => {
        return pokeList.find((pokemon) => pokemon.name === name);
    }

    const getPokemonById = (id) => {
        return pokeList.find((pokemon) => pokemon.id === id);
    }

    return { loading, error, pokeList, getPokemonSpecies, getPokemon, getPokemonById, getPokemonInfo };
};