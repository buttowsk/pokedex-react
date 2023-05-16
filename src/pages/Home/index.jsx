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
import { FavoritesContext } from '../../context/favorites.jsx';
import { dbApi } from '../../services/dbApi.js';
import { PokemonsContext } from '../../context/pokemons.jsx';

export const Home = () => {
  const { getPokemons, getItems, setUserId } = useContext(FavoritesContext);
  const { isLoading } = useContext(PokemonsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await dbApi.get('/get-user-id');
        const { user_id } = data;
        console.log(user_id)
        setUserId(user_id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setUserId]);

  useEffect(() => {
    dbApi.get('/get-user-id')
      .then(({ data }) => {
        const { user_id } = data;
        getPokemons(user_id);
        getItems(user_id);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
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