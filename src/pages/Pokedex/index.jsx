import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import { useState } from 'react';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';

export const Pokedex = ({ allPokemonsInfo, loading }) => {
  const [loadedCount, setLoadedCount] = useState(30);
  const displayedPokemons = allPokemonsInfo.slice(0, loadedCount);

  if (allPokemonsInfo.length <= 0 || !displayedPokemons || loading ) {
    return <LoadingComponent />;
  }

  return (
    <Container>
      <TopRow>
        <BackIcon />
        <MenuIcon />
      </TopRow>
      <Content>
        <Title>Pokedex</Title>
        <List>
          {displayedPokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </List>
      </Content>
    </Container>
  );
};