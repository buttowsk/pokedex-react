import {EvolutionChain, PokeArrow, PokeContainer, PokeImage, PokeName, Container, Title } from "./styles.js";
import { useEffect, useState } from 'react';
import { LoadingComponent } from '../LoadingComponent/index.jsx';
import { useAllPokemons } from '../../hooks/useAllPokemons/index.js';

export const PokeEvolutions = ({ pokemonName, pokeList }) => {
    const { getPokemonEvolutions, isLoading, getPokemonInfo } = useAllPokemons();
    const [evolutions, setEvolutions] = useState([]);

    useEffect(() => {
        if (pokeList.length > 0) {
            const fetchEvolutions = async () => {
                const evolutionsList = await getPokemonEvolutions(pokemonName);
                const pokemonPromises = evolutionsList.map(evolution =>
                  pokeList.find(poke => evolution.name === poke.name)
                );
                const pokemonInfo = await Promise.all(pokemonPromises);
                setEvolutions(
                  await Promise.all(
                    evolutionsList.map(async (evolution, index) => {
                        if (!pokemonInfo[index]) {
                            pokemonInfo[index] = await getPokemonInfo(evolution.name);
                        }
                        return {
                            ...evolution,
                            info: pokemonInfo[index],
                        };
                    })
                  )
                );
            };
            fetchEvolutions();
        }
    }, [pokeList, pokemonName]);

    if (isLoading || !evolutions.length) {
        return <LoadingComponent />;
    }

    return (
      <Container>
          {evolutions[1] ? (
            <EvolutionChain>
                <PokeContainer>
                    <PokeImage src={evolutions[0]?.info.sprites?.other['official-artwork']?.front_default} />
                    <PokeName>{evolutions[0]?.name}</PokeName>
                </PokeContainer>
                <PokeContainer>
                    <PokeArrow />
                    {evolutions[1]?.min_level && <Title>{`Level ${evolutions[1]?.min_level}`}</Title>}
                </PokeContainer>
                <PokeContainer>
                    <PokeImage src={evolutions[1]?.info.sprites?.other['official-artwork']?.front_default} />
                    <PokeName>{evolutions[1]?.name}</PokeName>
                </PokeContainer>
            </EvolutionChain>
          ) : (
            <EvolutionChain>
                <PokeContainer>
                    <PokeImage src={evolutions[0]?.info.sprites?.other['official-artwork']?.front_default} />
                    <PokeName>{evolutions[0]?.name}</PokeName>
                </PokeContainer>
            </EvolutionChain>
          )}
          {evolutions[2] && (
            <EvolutionChain>
                <PokeContainer>
                    <PokeImage src={evolutions[1]?.info.sprites?.other['official-artwork']?.front_default} />
                    <PokeName>{evolutions[1]?.name}</PokeName>
                </PokeContainer>
                <PokeContainer>
                    <PokeArrow />
                    {evolutions[1]?.min_level && <Title>{`Level ${evolutions[2]?.min_level}`}</Title>}
                </PokeContainer>
                <PokeContainer>
                    <PokeImage src={evolutions[2]?.info.sprites?.other['official-artwork']?.front_default} />
                    <PokeName>{evolutions[2]?.name}</PokeName>
                </PokeContainer>
            </EvolutionChain>
          )}
      </Container>
    );
};