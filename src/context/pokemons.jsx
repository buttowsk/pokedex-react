import { createContext, useCallback } from 'react';
import { useAllPokemons } from '../hooks/useAllPokemons/index.js';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const { pokeList, hasMorePoke, setPokePage, isLoading, getPokemonByName, getAllPokemons } = useAllPokemons();

  useCallback(() => {
    getAllPokemons(1);
  }, [getAllPokemons]);

  return (
    <PokemonsContext.Provider
      value={ { pokeList, hasMorePoke, setPokePage, isLoading, getPokemonByName, getAllPokemons } }>
      { children }
    </PokemonsContext.Provider>
  );

};