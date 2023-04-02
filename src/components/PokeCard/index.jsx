import {PokeImage, PokeType, PokeName, PokeCardContainer, PokeTypeContainer} from './styles'
import { usePokemonInfo } from "../../hooks/usePokemonInfo/index.js";
import { ThemeProvider } from "styled-components";
import { themes } from "../../globalStyles/styles.js";
import { useState } from "react";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies/index.js";
import {LoadingComponent} from "../LoadingComponent/index.jsx";
import {PokeModal} from "../PokeModal/index.jsx";
import {useGetBgColor} from "../../hooks/useGetBgColor/index.js";
import {getColor} from "../../hooks/getColor/index.js";

export const PokeCard = ({pokemon}) => {
    const { pokeSpecies } = usePokemonSpecies(pokemon?.species?.url);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bgColor = useGetBgColor(pokemon.sprites?.other['official-artwork']?.front_default);
    const color = getColor(bgColor);


    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    if (!pokemon || !pokeSpecies) {
        return <LoadingComponent />
    }

    const theme = themes[pokemon.types[0]?.type.name];


    return (
      <ThemeProvider theme={theme}>
          { isModalOpen && <PokeModal pokeInfo={pokemon} pokeSpecies={pokeSpecies} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} bgColor={bgColor} color={color} /> }
          <PokeCardContainer onClick={handleOpenModal}>
              <>
                  <PokeImage src={pokemon.sprites?.other['official-artwork']?.front_default} />
                  <PokeName>{pokemon.name}</PokeName>
                  <PokeTypeContainer>
                      { theme && <PokeType theme={theme}>{ pokemon.types[0]?.type.name }</PokeType> }
                      { pokemon.types[1]?.type.name && themes[pokemon.types[1]?.type.name] && (
                        <PokeType theme={ themes[pokemon.types[1]?.type.name] }>
                            { pokemon.types[1]?.type.name }
                        </PokeType>
                      )}
                  </PokeTypeContainer>
              </>
          </PokeCardContainer>
      </ThemeProvider>
    );
};