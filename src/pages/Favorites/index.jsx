import { FavoritesContext } from '../../contexts/favorites.jsx';
import { useContext } from 'react';
import { Container, Title, Content, TopRow } from './styles.js';
import { Pokedex } from '../Pokedex/index.jsx';
import { Items } from '../Items/index.jsx';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);


  return (
    <Container>
      <TopRow>
        <Title>Favorites</Title>
      </TopRow>
      <Content>
        <Title>Pokedex</Title>
        <Pokedex pokeList={ favorites.pokemons }/>
        <Title>Items</Title>
        <Items items={ favorites.items }/>
      </Content>
    </Container>
  );
};