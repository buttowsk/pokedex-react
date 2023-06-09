import { useCallback, useEffect, useState } from 'react';
import { pokeApi } from '../../services/pokeApi.js';
import { Pokemon } from '../../utils/models/Pokemon/index.js';
import { Evolution } from '../../utils/models/Evolution/index.js';

export const useAllPokemons = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokeList, setPokeList] = useState([]);
  const [pokePage, setPokePage] = useState(1);
  const [totalPokePages, setTotalPokePages] = useState(1);
  const [hasMorePoke, setHasMorePoke] = useState(true);

  const getPokemonByName = useCallback(async (name) => {
    try {
      const response = await pokeApi.get(`/pokemon/${ name }`);
      const { data } = response;
      const { data: speciesData } = await pokeApi.get(`/pokemon-species/${ data.id ?? data.name }`);
      const evolutionChainUrl = speciesData?.evolution_chain?.url;
      const evolutionChainId = evolutionChainUrl?.split('/').slice(-2, -1)[0];
      const { data: evolutionChain } = await pokeApi.get(`/evolution-chain/${ evolutionChainId }`);
      const { chain } = evolutionChain;
      const evolutionsList = [];
      let currentChainItem = chain;
      do {
        const { species, evolution_details: evolutionDetails } = currentChainItem;
        const id = species.url.split('/').slice(-2, -1)[0];
        const { data: speciesData } = await pokeApi.get(`/pokemon-species/${ id }`);
        const { data } = await pokeApi.get(`/pokemon/${ speciesData.id }`);
        const evolutions = new Evolution(
          species.name,
          data.sprites.other['official-artwork'].front_default,
          evolutionDetails[0],
        );
        evolutionsList.push(evolutions);
        currentChainItem = currentChainItem?.evolves_to?.[0];
      } while (currentChainItem);
      const abilities = data.abilities.map(({ ability }) => ability.name);
      const moves = data.moves.map(({ move }) => move.name);
      const stats = data.stats.map(({ base_stat, stat }) => ({ name: stat.name, value: base_stat }));
      const types = data.types.map(({ type }) => type.name);
      const genderRate = speciesData.gender_rate === -1 ? { genderless: true } : {
        male: `${ (100 - (speciesData.gender_rate * 10)) }%`,
        female: `${ 10 * speciesData.gender_rate }%`,
      };
      const generation = speciesData.generation.name;
      return new Pokemon(
        data.name,
        types,
        data.sprites.other['official-artwork'].front_default,
        data.id,
        evolutionsList,
        genderRate,
        abilities,
        data.height,
        data.weight,
        moves,
        stats,
        generation,
        data.sprites.other['official-artwork'].front_shiny,
      );
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);


  const getAllPokemons = useCallback(async (page) => {
    try {
      setLoading(true);
      const response = await pokeApi.get(`/pokemon?limit=60&offset=${ (page - 1) * 60 }`);
      const { data } = response;
      const { results } = data;
      const pokemonPromises = results.map(async (result) => {
        const { name } = result;
        const pokemon = await getPokemonByName(name);
        return [name, pokemon];
      });
      const pokeList = await Promise.all(pokemonPromises);
      const newPokeList = Object.fromEntries(pokeList);
      setPokeList((prevPokeList) => ({ ...prevPokeList, ...newPokeList }));
      setTotalPokePages(Math.ceil(data.count / 60));
      setHasMorePoke(page < totalPokePages);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [totalPokePages]);

  useEffect(() => {
    getAllPokemons(pokePage);
  }, [getAllPokemons, pokePage]);


  useEffect(() => {
    sessionStorage.setItem('pokeList', JSON.stringify(pokeList));
  }, [pokeList]);


  return { loading, error, pokeList, hasMorePoke, setPokePage, getPokemonByName, getAllPokemons };
};