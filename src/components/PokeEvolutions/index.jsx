import {EvolutionChain, PokeArrow, PokeContainer, PokeImage, PokeName, Container, Title } from "./styles.js";
import { LoadingComponent } from '../LoadingComponent/index.jsx';
import { useNavigate } from 'react-router-dom';
export const PokeEvolutions = ({ poke, textColor }) => {
  const navigate = useNavigate();

  if (!poke) {
    return <LoadingComponent />;
  }

  return (
    <Container textColor={textColor}>
      {poke.evolutionChain[1] ? (
        <EvolutionChain>
          <PokeContainer onClick={() => navigate(`/pokedex/${poke.evolutionChain[0].name}`)}>
            <PokeImage src={poke.evolutionChain[0]?.image} />
            <PokeName>{poke.evolutionChain[0]?.name}</PokeName>
          </PokeContainer>
          <PokeContainer>
            <PokeArrow />
            {poke.evolutionChain[1]?.evolutionInfo.min_level && <Title>{`Level ${poke.evolutionChain[1]?.evolutionInfo.min_level}`}</Title>}
          </PokeContainer>
          <PokeContainer onClick={() => navigate(`/pokedex/${poke.evolutionChain[1].name}`)}>
            <PokeImage src={poke.evolutionChain[1]?.image} />
            <PokeName>{poke.evolutionChain[1]?.name}</PokeName>
          </PokeContainer>
        </EvolutionChain>
      ) : (
        <EvolutionChain>
          <PokeContainer>
            <PokeImage src={poke.evolutionChain[0]?.image} />
            <PokeName>{poke.evolutionChain[0]?.name}</PokeName>
          </PokeContainer>
        </EvolutionChain>
      )}
      {poke.evolutionChain[2] && (
        <EvolutionChain>
          <PokeContainer onClick={() => navigate(`/pokedex/${poke.evolutionChain[1].name}`)}>
            <PokeImage src={poke.evolutionChain[1]?.image} />
            <PokeName>{poke.evolutionChain[1]?.name}</PokeName>
          </PokeContainer>
          <PokeContainer>
            <PokeArrow />
            {poke.evolutionChain[1]?.evolutionInfo.min_level && <Title>{`Level ${poke.evolutionChain[2]?.evolutionInfo.min_level}`}</Title>}
          </PokeContainer>
          <PokeContainer onClick={() => navigate(`/pokedex/${poke.evolutionChain[2].name}`)}>
            <PokeImage src={poke.evolutionChain[2]?.image} />
            <PokeName>{poke.evolutionChain[2]?.name}</PokeName>
          </PokeContainer>
        </EvolutionChain>
      )}
    </Container>
  );
};