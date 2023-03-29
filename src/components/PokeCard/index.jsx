import {PokeImage, PokeType, PokeName, PokeCardContainer, PokeTypeContainer} from './styles'
import { usePokemonInfo } from "../../hooks/usePokemonInfo/index.js";
import { ThemeProvider } from "styled-components";
import { themes } from "../../globalStyles/styles.js";
import { useState } from "react";
import { PokeModal } from "../PokeModal/index.jsx";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies/index.js";

export const PokeCard = ({url}) => {
    const { pokeInfo, isLoading } = usePokemonInfo(url);
    const { pokeSpecies } = usePokemonSpecies(pokeInfo?.species?.url);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    const theme = themes[pokeInfo.types[0]?.type.name];

    return (
        <ThemeProvider theme={theme}>
            { isModalOpen && <PokeModal pokeInfo={pokeInfo} pokeSpecies={pokeSpecies} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} /> }
            <PokeCardContainer onClick={handleOpenModal}>
                <>
                    <PokeImage src={pokeInfo.sprites?.other?.dream_world?.front_default} />
                    <PokeName>{pokeInfo.name}</PokeName>
                    <PokeTypeContainer>
                        { theme && <PokeType theme={theme}>{ pokeInfo.types[0]?.type.name }</PokeType> }
                        { pokeInfo.types[1]?.type.name && themes[pokeInfo.types[1]?.type.name] && (
                            <PokeType theme={ themes[pokeInfo.types[1]?.type.name] }>
                                { pokeInfo.types[1]?.type.name }
                            </PokeType>
                        )}
                    </PokeTypeContainer>
                </>
            </PokeCardContainer>
        </ThemeProvider>
    );
};