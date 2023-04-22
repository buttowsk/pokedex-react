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


export const Home = ({ pokeList }) => {

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