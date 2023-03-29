import {usePokemonEvolutions} from "../../hooks/usePokemonEvolutions/index.js";
import {EvolutionChain, Title, PokeImage, PokeName, PokeContainer, PokeArrow} from "./styles.js";
import {useEffect, useState} from "react";
import axios from "axios";

export const PokeEvolutions = ({ pokemonName }) => {
    const { evolutions, isLoading } = usePokemonEvolutions(pokemonName);
    const [pokeInfo, setPokeInfo] = useState([]);

    useEffect(() => {
        const getPokeInfo = async () => {
            const pokeInfo = await Promise.all(evolutions.map(async (evolution) => {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolution.name}`);
                return data;
            }));
            setPokeInfo(pokeInfo);
        }
        getPokeInfo();
    }, [evolutions]);

    if (isLoading || !pokeInfo) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <Title>Evolution Chain</Title>
            <EvolutionChain>
                <PokeContainer>
                    <PokeImage src={pokeInfo[0]?.sprites?.other?.dream_world?.front_default} />
                    <PokeName>{evolutions[0]?.name}</PokeName>
                </PokeContainer>
                <PokeContainer>
                    <PokeArrow />
                    <Title>Level {evolutions[1]?.min_level}</Title>
                </PokeContainer>
                <PokeContainer>
                    <PokeImage src={pokeInfo[1]?.sprites?.other?.dream_world?.front_default} />
                    <PokeName>{evolutions[1]?.name}</PokeName>
                </PokeContainer>
            </EvolutionChain>
                <EvolutionChain>
                    <PokeContainer>
                        <PokeImage src={pokeInfo[1]?.sprites?.other?.dream_world?.front_default} />
                        <PokeName>{evolutions[1]?.name}</PokeName>
                    </PokeContainer>
                    <PokeContainer>
                        <PokeArrow />
                        <Title>Level {evolutions[2]?.min_level}</Title>
                    </PokeContainer>
                    <PokeContainer>
                        <PokeImage src={pokeInfo[2]?.sprites?.other?.dream_world?.front_default} />
                        <PokeName>{evolutions[2]?.name}</PokeName>
                    </PokeContainer>
                </EvolutionChain>
        </>
    );
};