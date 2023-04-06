import {
    Container,
    List,
    ListItem,
    Title,
    Pokeball,
    Flash,
    Pokecog,
    Map,
    Input,
    Content, SearchBar, Search
} from './styles';
import { LoadingComponent } from '../../components/LoadingComponent/index.jsx';


export const Home = ({ pokeList }) => {

    if (!pokeList) {
        return <LoadingComponent />
    }

    return (
      <Container>
          <Content>
              <Title>O que está procurando?</Title>
              <SearchBar>
                  <Search />
                  <Input type="text" placeholder="Search Pokemon" />
              </SearchBar>
              <List>
                  <ListItem to={'/pokedex'} buttonname={'pokedex'}>
                      Pokedex
                      <Pokeball />
                  </ListItem>
                  <ListItem to={'/moves'} buttonname={'moves'}>
                      Moves
                      <Flash />
                  </ListItem>
                  <ListItem to={'/items'} buttonname={'items'}>
                      Items
                      <Pokecog />
                  </ListItem>
                  <ListItem to={'/locations'} buttonname={'locations'}>
                      Locations
                      <Map />
                  </ListItem>
              </List>
          </Content>
      </Container>
    );
}