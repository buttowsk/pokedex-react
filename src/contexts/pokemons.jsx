import { createContext } from 'react';
import { useAllPokemons } from '../hooks/useAllPokemons/index.js';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const { pokeList, hasMorePoke, setPokePage, isLoading, getPokemonByName } = useAllPokemons();

  return (
    <PokemonsContext.Provider value={ { pokeList, hasMorePoke, setPokePage, isLoading, getPokemonByName } }>
      { children }
    </PokemonsContext.Provider>
  );

}