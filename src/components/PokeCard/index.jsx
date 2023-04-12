import { PokeImage, PokeType, PokeName, PokeCardContainer, PokeTypeContainer, PokeNumber } from './styles'
import { ThemeProvider } from "styled-components";
import { themes } from "../../globalStyles/styles.js";
import { LoadingComponent } from "../LoadingComponent/index.jsx";

export const PokeCard = ({ pokemon, onClick }) => {
  const handlePokeNumber = (number) => {
    if (number < 10) {
      return `00${number}`;
    } else if (number < 100) {
      return `0${number}`;
    } else {
      return number;
    }
  }


  if (!pokemon) {
    return <LoadingComponent />
  }


  const theme = themes[pokemon.types[0]];

  return (
    <ThemeProvider theme={theme}>
      <PokeCardContainer to={`/pokedex/${pokemon.name}`} preventScrollReset={true} onClick={onClick}>
        <>
          <PokeImage src={pokemon.image} />
          <PokeNumber>{handlePokeNumber(pokemon.id)}</PokeNumber>
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