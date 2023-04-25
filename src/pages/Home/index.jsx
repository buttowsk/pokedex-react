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
import {useEffect, useState} from "react";


export const Home = ({ pokeList }) => {
  const [name, setName] = useState('');
  const nameFromLS = localStorage.getItem('name');
  useEffect(() => {
    setName(nameFromLS);
  }, [pokeList, nameFromLS]);

  if (!pokeList || !name) {
    return <LoadingComponent/>;
  }

  const username = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Container>
      <Content>
        <Title>Olá, { username }! O que está procurando?</Title>
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