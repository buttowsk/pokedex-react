import { FavoritesContext } from '../../contexts/favorites.jsx';
import { useContext } from 'react';
import { PokeCard } from '../../components/PokeCard/index.jsx';
import { ItemCard } from '../../components/ItemCard/index.jsx';
import { Container, List, Title, Content, TopRow } from './styles.js';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);


  return (
    <Container>
      <TopRow>
        <Title>Favorites</Title>
      </TopRow>
      <Content>
        <List>
          { favorites['items'].map((favorite) => {
            return <ItemCard key={ favorite.id } item={ favorite }/>;
          }) }
          { favorites['pokemons'].map((favorite) => {
            return <PokeCard key={ favorite.id } pokemon={ favorite }/>;
          }) }
        </List>
      </Content>
    </Container>
  );
};