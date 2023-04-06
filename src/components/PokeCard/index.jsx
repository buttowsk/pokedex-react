import {PokeImage, PokeType, PokeName, PokeCardContainer, PokeTypeContainer} from './styles'
import { ThemeProvider } from "styled-components";
import { themes } from "../../globalStyles/styles.js";
import {LoadingComponent} from "../LoadingComponent/index.jsx";

export const PokeCard = ({ pokemon, onClick }) => {
  if (!pokemon) {
    return <LoadingComponent />
  }

  const theme = themes[pokemon.types[0]];

  return (
    <ThemeProvider theme={theme}>
      <PokeCardContainer to={`/pokedex/${pokemon.name}`} preventScrollReset={true} onClick={onClick}>
        <>
          <PokeImage src={pokemon.image} />
          <PokeName>{pokemon.name}</PokeName>
          <PokeTypeContainer>
            { theme && <PokeType theme={theme}>{ pokemon.types[0] }</PokeType> }
            { pokemon.types[1] && themes[pokemon.types[1]] && (
              <PokeType theme={ themes[pokemon.types[1]] }>
                { pokemon.types[1] }
              </PokeType>
            )}
          </PokeTypeContainer>
        </>
      </PokeCardContainer>
    </ThemeProvider>
  );
};