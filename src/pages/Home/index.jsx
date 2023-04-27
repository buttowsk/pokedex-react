import {
  Container,
  List,
  ListItem,
  Title,
  Pokeball,
  Pokecog,
  Content,
} from './styles';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';
import { useContext, useEffect } from 'react';
import { FavoritesContext } from '../../contexts/favorites.jsx';
import { dbApi } from '../../services/dbApi.js';

export const Home = ({ pokeList }) => {
  const { getPokemons, getItems } = useContext(FavoritesContext);

  useEffect(() => {
    dbApi.get('/get-user-id')
      .then(({ data }) => {
        const { user_id } = data;
        getPokemons(user_id);
        getItems(user_id);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!pokeList) {
    return <LoadingComponent/>;
  }


  return (
    <Container>
      <Content>
        <Title>O que está procurando?</Title>
        <List>
          <ListItem to={ '/pokedex' } buttonname={ 'pokedex' }>
            Pokemons
            <Pokeball/>
          </ListItem>
          <ListItem to={ '/items' } buttonname={ 'items' }>
            Items
            <Pokecog/>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};