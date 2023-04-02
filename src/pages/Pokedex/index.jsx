import {Title, List, Container,Content, TopRow, BackIcon, MenuIcon } from './styles'
import { PokeCard } from '../../components/PokeCard/index.jsx'
import { useState } from 'react';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Pokedex = ({ allPokemonsInfo }) => {
  const [loadedCount, setLoadedCount] = useState(30);
  const displayedPokemons = allPokemonsInfo.slice(0, loadedCount);
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